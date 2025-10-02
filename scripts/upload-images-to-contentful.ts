/**
 * 로컬 이미지를 Contentful Assets로 업로드하는 스크립트
 *
 * 실행 방법:
 * npx tsx scripts/upload-images-to-contentful.ts
 *
 * 옵션:
 * --dry-run : 실제 업로드 없이 미리보기
 * --limit=10 : 처음 N개만 업로드
 */

import { createClient } from 'contentful-management'
import * as dotenv from 'dotenv'
import { resolve } from 'path'
import fs from 'fs'
import path from 'path'

// 환경 변수 로드
dotenv.config({ path: resolve(process.cwd(), '.env.local') })

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID!
const MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN!
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || 'master'

// CLI 인자 파싱
const args = process.argv.slice(2)
const isDryRun = args.includes('--dry-run')
const limitArg = args.find((arg) => arg.startsWith('--limit='))
const limit = limitArg ? parseInt(limitArg.split('=')[1]) : undefined

interface ImageUploadResult {
  localPath: string
  fileName: string
  assetId: string
  cdnUrl: string
}

// 이미지 파일 읽기
function getImageFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return []
  }

  return fs
    .readdirSync(dir)
    .filter((file) => {
      const ext = path.extname(file).toLowerCase()
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)
    })
    .map((file) => path.join(dir, file))
}

// MIME 타입 결정
function getMimeType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase()
  const mimeTypes: { [key: string]: string } = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
  }
  return mimeTypes[ext] || 'application/octet-stream'
}

// Contentful에 이미지 업로드
async function uploadImagesToContentful(
  imagePaths: string[],
  existingMapping: { [key: string]: string },
  mappingPath: string
): Promise<ImageUploadResult[]> {
  const client = createClient({
    accessToken: MANAGEMENT_TOKEN,
  })

  const space = await client.getSpace(SPACE_ID)
  const environment = await space.getEnvironment(ENVIRONMENT)

  const results: ImageUploadResult[] = []
  let successCount = 0
  let skipCount = 0
  let errorCount = 0

  for (const [index, imagePath] of imagePaths.entries()) {
    try {
      const fileName = path.basename(imagePath)
      const relativePath = imagePath.replace(process.cwd(), '')

      console.log(`\n[${index + 1}/${imagePaths.length}] 처리 중: ${fileName}`)

      // 이미 업로드된 이미지 체크
      if (existingMapping[relativePath]) {
        console.log(`  ⏭️  이미 업로드됨: ${existingMapping[relativePath]}`)
        skipCount++
        results.push({
          localPath: imagePath,
          fileName,
          assetId: 'existing',
          cdnUrl: existingMapping[relativePath],
        })
        continue
      }

      if (isDryRun) {
        console.log('  ✓ [DRY RUN] 업로드 스킵')
        continue
      }

      // 파일 읽기
      const fileContent = fs.readFileSync(imagePath)
      const contentType = getMimeType(imagePath)

      // 1. Asset 생성
      const asset = await environment.createAssetFromFiles({
        fields: {
          title: {
            'en-US': fileName,
          },
          description: {
            'en-US': `Migrated from local blog images`,
          },
          file: {
            'en-US': {
              contentType,
              fileName,
              file: fileContent,
            },
          },
        },
      })

      // 2. Asset 처리 (업로드)
      const processedAsset = await asset.processForAllLocales()

      // 3. Asset 발행
      const publishedAsset = await processedAsset.publish()

      // 4. CDN URL 추출
      const cdnUrl = publishedAsset.fields.file['en-US'].url

      results.push({
        localPath: imagePath,
        fileName,
        assetId: publishedAsset.sys.id,
        cdnUrl: `https:${cdnUrl}`,
      })

      console.log(`  ✅ 업로드 완료`)
      console.log(`     Asset ID: ${publishedAsset.sys.id}`)
      console.log(`     CDN URL: https:${cdnUrl}`)
      successCount++

      // 10개마다 매핑 파일 저장 (중간 저장)
      if (results.length % 10 === 0) {
        const currentMapping = { ...existingMapping }
        results.forEach((result) => {
          const relativePath = result.localPath.replace(process.cwd(), '')
          currentMapping[relativePath] = result.cdnUrl
        })
        fs.writeFileSync(mappingPath, JSON.stringify(currentMapping, null, 2))
        console.log(`  💾 중간 저장: ${results.length}개 매핑 저장됨`)
      }

      // Rate limit 방지 (0.3초 대기)
      await new Promise((resolve) => setTimeout(resolve, 300))
    } catch (error: any) {
      console.error(`  ❌ 오류: ${error.message}`)
      errorCount++
    }
  }

  return results
}

// 매핑 파일 저장
function saveImageMapping(
  results: ImageUploadResult[],
  existingMapping: { [key: string]: string }
) {
  // 기존 매핑과 새 결과를 병합
  const mapping: { [key: string]: string } = { ...existingMapping }

  results.forEach((result) => {
    const relativePath = result.localPath.replace(process.cwd(), '')
    mapping[relativePath] = result.cdnUrl
  })

  const outputPath = resolve(process.cwd(), 'scripts/image-mapping.json')
  fs.writeFileSync(outputPath, JSON.stringify(mapping, null, 2))

  console.log(`\n📄 이미지 매핑 파일 저장: ${outputPath}`)
  console.log(`   전체 매핑: ${Object.keys(mapping).length}개`)
}

// 메인 실행
async function main() {
  console.log('🚀 이미지 → Contentful 업로드 시작\n')
  console.log('설정:')
  console.log(`  Space ID: ${SPACE_ID}`)
  console.log(`  Environment: ${ENVIRONMENT}`)
  console.log(`  Dry Run: ${isDryRun ? 'YES' : 'NO'}`)
  console.log(`  Limit: ${limit || '전체'}`)
  console.log('')

  // 1. 기존 매핑 로드
  const mappingPath = resolve(process.cwd(), 'scripts/image-mapping.json')
  let existingMapping: { [key: string]: string } = {}
  if (fs.existsSync(mappingPath)) {
    existingMapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'))
    console.log(`📋 기존 매핑 로드: ${Object.keys(existingMapping).length}개\n`)
  }

  // 2. 이미지 파일 찾기
  const imagesDir = resolve(process.cwd(), 'public/blog/images')
  console.log(`📂 디렉토리: ${imagesDir}`)

  if (!fs.existsSync(imagesDir)) {
    console.error('❌ public/blog/images 디렉토리를 찾을 수 없습니다.')
    process.exit(1)
  }

  let imagePaths = getImageFiles(imagesDir)
  console.log(`🖼️  발견된 이미지: ${imagePaths.length}개\n`)

  // Limit 적용
  if (limit) {
    imagePaths = imagePaths.slice(0, limit)
    console.log(`⚡ 처음 ${limit}개만 처리합니다.\n`)
  }

  if (imagePaths.length === 0) {
    console.log('처리할 이미지가 없습니다.')
    return
  }

  // 3. Contentful 업로드
  const results = await uploadImagesToContentful(imagePaths, existingMapping, mappingPath)

  // 4. 매핑 파일 저장
  if (!isDryRun && results.length > 0) {
    saveImageMapping(results, existingMapping)
  }

  // 4. 결과 요약
  const newUploads = results.filter((r) => r.assetId !== 'existing').length
  const skipped = results.filter((r) => r.assetId === 'existing').length

  console.log('\n' + '='.repeat(50))
  console.log('📊 업로드 완료')
  console.log('='.repeat(50))
  console.log(`✅ 새로 업로드: ${newUploads}개`)
  console.log(`⏭️  건너뜀: ${skipped}개`)
  console.log(`📦 전체: ${imagePaths.length}개`)
  console.log('='.repeat(50))

  if (!isDryRun && results.length > 0) {
    console.log('\n다음 단계:')
    console.log('1. scripts/image-mapping.json 파일 확인')
    console.log('2. 마이그레이션 스크립트 실행')
    console.log('   npx tsx scripts/migrate-to-contentful.ts')
  }
}

// 실행
main().catch((error) => {
  console.error('스크립트 실행 실패:', error)
  process.exit(1)
})
