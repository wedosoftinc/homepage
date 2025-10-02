#!/usr/bin/env ts-node

import { XMLParser } from 'fast-xml-parser';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as http from 'http';
import { URL } from 'url';

// 설정
const XML_FILE = path.join(__dirname, '../docs/wedosoft.WordPress.2025-09-22.posts.xml');
const OUTPUT_DIR = path.join(__dirname, '../content/blog');
const IMAGES_DIR = path.join(__dirname, '../public/blog/images');

interface WordPressPost {
  title: string;
  link: string;
  pubDate: string;
  'dc:creator': string;
  'content:encoded': string;
  'wp:post_id': string;
  'wp:post_date': string;
  'wp:post_name': string;
  'wp:status': string;
  category?: any;
  'wp:postmeta'?: any[];
}

// 이미지 다운로드 함수
async function downloadImage(url: string, filepath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // 리다이렉트 처리
        if (response.headers.location) {
          return downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
        }
      }

      if (response.statusCode !== 200) {
        console.warn(`이미지 다운로드 실패: ${url} (${response.statusCode})`);
        resolve(url); // 원본 URL 반환
        return;
      }

      const file = fs.createWriteStream(filepath);
      response.pipe(file);

      file.on('finish', () => {
        file.close();
        resolve(filepath);
      });

      file.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      console.warn(`이미지 다운로드 에러: ${url}`, err.message);
      resolve(url); // 원본 URL 반환
    });
  });
}

// HTML을 마크다운으로 간단 변환
function htmlToMarkdown(html: string): string {
  let md = html;

  // CDATA 제거
  md = md.replace(/<!\[CDATA\[/g, '').replace(/\]\]>/g, '');

  // 기본 HTML 태그 변환
  md = md.replace(/<br\s*\/?>/gi, '\n');
  md = md.replace(/<\/p>/gi, '\n\n');
  md = md.replace(/<p>/gi, '');
  md = md.replace(/<b>(.*?)<\/b>/gi, '**$1**');
  md = md.replace(/<strong>(.*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<i>(.*?)<\/i>/gi, '*$1*');
  md = md.replace(/<em>(.*?)<\/em>/gi, '*$1*');
  md = md.replace(/<h1>(.*?)<\/h1>/gi, '# $1\n');
  md = md.replace(/<h2>(.*?)<\/h2>/gi, '## $1\n');
  md = md.replace(/<h3>(.*?)<\/h3>/gi, '### $1\n');
  md = md.replace(/<h4>(.*?)<\/h4>/gi, '#### $1\n');

  // 링크 변환
  md = md.replace(/<a\s+href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');

  // 불필요한 태그 제거
  md = md.replace(/<div[^>]*>/gi, '\n');
  md = md.replace(/<\/div>/gi, '\n');
  md = md.replace(/<span[^>]*>/gi, '');
  md = md.replace(/<\/span>/gi, '');
  md = md.replace(/<center>/gi, '\n');
  md = md.replace(/<\/center>/gi, '\n');
  md = md.replace(/<table[^>]*>/gi, '');
  md = md.replace(/<\/table>/gi, '');
  md = md.replace(/<tbody[^>]*>/gi, '');
  md = md.replace(/<\/tbody>/gi, '');
  md = md.replace(/<tr[^>]*>/gi, '');
  md = md.replace(/<\/tr>/gi, '\n');
  md = md.replace(/<td[^>]*>/gi, '');
  md = md.replace(/<\/td>/gi, ' ');

  // 여러 줄바꿈 정리
  md = md.replace(/\n\n\n+/g, '\n\n');
  md = md.trim();

  return md;
}

// 이미지 URL 추출 및 로컬 다운로드
async function processImages(content: string, postSlug: string): Promise<string> {
  const imageRegex = /<img[^>]+src="([^">]+)"/gi;
  const matches = [...content.matchAll(imageRegex)];

  let processedContent = content;
  const downloadedImages: { old: string; new: string }[] = [];

  for (const match of matches) {
    const imageUrl = match[1];

    // 이미 로컬 이미지면 스킵
    if (imageUrl.startsWith('/') || imageUrl.startsWith('./')) {
      continue;
    }

    try {
      const urlObj = new URL(imageUrl);
      const ext = path.extname(urlObj.pathname) || '.jpg';
      const filename = `${postSlug}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}${ext}`;
      const localPath = path.join(IMAGES_DIR, filename);
      const webPath = `/blog/images/${filename}`;

      console.log(`다운로드 중: ${imageUrl}`);
      await downloadImage(imageUrl, localPath);

      downloadedImages.push({ old: imageUrl, new: webPath });

      // URL을 로컬 경로로 교체
      processedContent = processedContent.replace(imageUrl, webPath);
    } catch (err) {
      console.warn(`이미지 처리 실패: ${imageUrl}`, err);
    }
  }

  return processedContent;
}

// 슬러그 생성
function createSlug(title: string, postId: string, date: string): string {
  // URL 디코딩
  const decodedTitle = decodeURIComponent(title);

  // 영문/숫자만 추출
  let slug = decodedTitle
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

  // 한글만 있는 경우 날짜-id로 대체
  if (!/[a-z0-9]/.test(slug) || slug.length < 3) {
    const dateStr = date.split('T')[0];
    slug = `${dateStr}-post-${postId}`;
  }

  return slug;
}

// 카테고리 추출
function extractCategories(category: any): string[] {
  if (!category) return [];

  const categories = Array.isArray(category) ? category : [category];
  return categories
    .filter((c: any) => c['@_domain'] === 'category')
    .map((c: any) => c['#text'])
    .filter(Boolean);
}

// 메인 마이그레이션 함수
async function migrate() {
  console.log('📚 워드프레스 블로그 마이그레이션 시작...\n');

  // XML 파일 읽기
  const xmlContent = fs.readFileSync(XML_FILE, 'utf-8');

  // XML 파싱
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
  });
  const result = parser.parse(xmlContent);

  const items = result.rss.channel.item;
  const posts = Array.isArray(items) ? items : [items];

  console.log(`✅ 총 ${posts.length}개의 포스트 발견\n`);

  let successCount = 0;
  let failCount = 0;

  for (const post of posts) {
    try {
      // 발행된 포스트만 처리
      if (post['wp:status'] !== 'publish' || post['wp:post_type'] !== 'post') {
        continue;
      }

      const title = post.title || 'Untitled';
      const content = post['content:encoded'] || '';
      const date = post['wp:post_date'] || post.pubDate;
      const postId = post['wp:post_id'];
      const author = post['dc:creator'] || 'WEDO Soft';

      // 슬러그 생성
      const slug = createSlug(post['wp:post_name'] || title, postId, date);

      console.log(`처리 중: ${title} (${slug})`);

      // 카테고리 추출
      const categories = extractCategories(post.category);

      // 이미지 다운로드 및 경로 변경
      const processedContent = await processImages(content, slug);

      // HTML을 마크다운으로 변환
      const markdownContent = htmlToMarkdown(processedContent);

      // Front Matter 생성
      const frontMatter = `---
title: "${title.replace(/"/g, '\\"')}"
slug: "${slug}"
publishedAt: "${date}"
author: "${author}"
originalCategory: ${categories.length > 0 ? `"${categories[0]}"` : '""'}
categories: []
meta:
  originalId: "${postId}"
  views: 0
---

${markdownContent}
`;

      // MDX 파일 저장
      const outputPath = path.join(OUTPUT_DIR, `${slug}.mdx`);
      fs.writeFileSync(outputPath, frontMatter, 'utf-8');

      successCount++;
      console.log(`✅ 저장 완료: ${outputPath}\n`);

    } catch (err) {
      failCount++;
      console.error(`❌ 처리 실패:`, err);
    }
  }

  console.log('\n📊 마이그레이션 완료!');
  console.log(`✅ 성공: ${successCount}개`);
  console.log(`❌ 실패: ${failCount}개`);
}

// 실행
migrate().catch(console.error);
