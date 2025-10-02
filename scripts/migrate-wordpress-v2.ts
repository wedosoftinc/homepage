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
  'content:encoded': string;
  'wp:post_id': string;
  'wp:post_date': string;
  'wp:status': string;
  'dc:creator': string;
  category?: any;
}

// 이미지 다운로드 함수
async function downloadImage(url: string, filepath: string): Promise<boolean> {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;

    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        if (response.headers.location) {
          return downloadImage(response.headers.location, filepath).then(resolve);
        }
      }

      if (response.statusCode !== 200) {
        console.warn(`이미지 다운로드 실패: ${url} (${response.statusCode})`);
        resolve(false);
        return;
      }

      const file = fs.createWriteStream(filepath);
      response.pipe(file);

      file.on('finish', () => {
        file.close();
        resolve(true);
      });

      file.on('error', () => {
        fs.unlinkSync(filepath);
        resolve(false);
      });
    }).on('error', () => {
      resolve(false);
    });
  });
}

// HTML을 마크다운으로 변환
function htmlToMarkdown(html: string): string {
  let md = html;

  // WordPress 주석 및 숏코드 제거
  md = md.replace(/<!--\s*wp:[^>]*-->/gi, '');
  md = md.replace(/<!--\s*\/wp:[^>]*-->/gi, '');
  md = md.replace(/\[av_[^\]]*\]/gi, '');
  md = md.replace(/\[\/av_[^\]]*\]/gi, '');
  md = md.replace(/<!--[^>]*-->/gi, '');
  md = md.replace(/<!\[CDATA\[/g, '').replace(/\]\]>/g, '');

  // 이모지 HTML 엔티티 제거 (&#x로 시작하는 것들)
  md = md.replace(/&#x[0-9a-fA-F]+;/g, '');
  md = md.replace(/&#[0-9]+;/g, '');

  // 제목 태그 변환 (먼저 처리)
  md = md.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '\n\n# $1\n\n');
  md = md.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '\n\n## $1\n\n');
  md = md.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '\n\n### $1\n\n');
  md = md.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '\n\n#### $1\n\n');
  md = md.replace(/<h5[^>]*>(.*?)<\/h5>/gi, '\n\n##### $1\n\n');

  // 리스트 변환
  md = md.replace(/<ul[^>]*>/gi, '\n');
  md = md.replace(/<\/ul>/gi, '\n');
  md = md.replace(/<ol[^>]*>/gi, '\n');
  md = md.replace(/<\/ol>/gi, '\n');
  md = md.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n');

  // 블록인용 변환
  md = md.replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gi, (match, content) => {
    return '\n> ' + content.trim().replace(/\n/g, '\n> ') + '\n';
  });

  // 텍스트 스타일 변환
  md = md.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**');
  md = md.replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*');
  md = md.replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*');

  // 링크 변환
  md = md.replace(/<a\s+href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');

  // 이미지 태그를 마크다운으로 변환
  md = md.replace(/<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"[^>]*>/gi, '\n![$2]($1)\n');
  md = md.replace(/<img[^>]+src="([^"]+)"[^>]*>/gi, '\n![]($1)\n');

  // <br> 태그 변환 (줄바꿈 보존)
  md = md.replace(/<br\s*\/?>/gi, '\n');

  // <p> 태그 변환 (속성 포함, 단락 구분 명확히)
  md = md.replace(/<\/p>\s*<p[^>]*>/gi, '\n\n');
  md = md.replace(/<p[^>]*>/gi, '');
  md = md.replace(/<\/p>/gi, '\n\n');

  // div, span 등 나머지 태그 제거
  md = md.replace(/<div[^>]*>/gi, '\n');
  md = md.replace(/<\/div>/gi, '\n');
  md = md.replace(/<span[^>]*>/gi, '');
  md = md.replace(/<\/span>/gi, '');

  // 모든 남은 HTML 태그 제거
  md = md.replace(/<[^>]*>/gi, '');

  // 탭을 리스트 항목으로 변환 (WordPress에서 자주 사용)
  md = md.replace(/^\t+(.+)$/gm, '- $1');

  // 연속된 빈 줄 정리
  md = md.replace(/\n\n\n+/g, '\n\n');

  // HTML 엔티티 디코딩
  md = md.replace(/&nbsp;/g, ' ');
  md = md.replace(/&amp;/g, '&');
  md = md.replace(/&quot;/g, '"');
  md = md.replace(/&#039;/g, "'");

  // MDX에서 문제되는 < > 기호를 제목에서 제거
  md = md.replace(/^(#{1,6})\s*<([^>]+)>/gm, '$1 $2');

  return md.trim();
}

// 첫 이미지 추출 (썸네일용)
function extractFirstImage(content: string): string | null {
  const match = content.match(/<img[^>]+src="([^">]+)"/i);
  return match ? match[1] : null;
}

// 이미지 처리
async function processImages(content: string, postId: string): Promise<{ content: string; thumbnail: string | null }> {
  const imageRegex = /<img[^>]+src="([^">]+)"/gi;
  const matches = [...content.matchAll(imageRegex)];

  let processedContent = content;
  let thumbnail: string | null = null;
  let isFirstImage = true;

  for (const match of matches) {
    const imageUrl = match[1];

    if (imageUrl.startsWith('/') || imageUrl.startsWith('./')) {
      if (isFirstImage) {
        thumbnail = imageUrl;
        isFirstImage = false;
      }
      continue;
    }

    try {
      const urlObj = new URL(imageUrl);
      const ext = path.extname(urlObj.pathname) || '.jpg';
      const filename = `post-${postId}-${Date.now()}-${Math.random().toString(36).substr(2, 6)}${ext}`;
      const localPath = path.join(IMAGES_DIR, filename);
      const webPath = `/blog/images/${filename}`;

      const success = await downloadImage(imageUrl, localPath);

      if (success) {
        processedContent = processedContent.replace(imageUrl, webPath);
        if (isFirstImage) {
          thumbnail = webPath;
          isFirstImage = false;
        }
      }
    } catch (err) {
      console.warn(`이미지 처리 실패: ${imageUrl}`);
    }
  }

  return { content: processedContent, thumbnail };
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

// 메인 마이그레이션
async function migrate() {
  console.log('📚 워드프레스 블로그 마이그레이션 V2 시작...\n');

  // 기존 파일 삭제
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true });
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const xmlContent = fs.readFileSync(XML_FILE, 'utf-8');
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
  const result = parser.parse(xmlContent);

  const items = result.rss.channel.item;
  const posts = Array.isArray(items) ? items : [items];

  console.log(`✅ 총 ${posts.length}개의 아이템 발견\n`);

  let successCount = 0;

  for (const post of posts) {
    if (post['wp:status'] !== 'publish' || post['wp:post_type'] !== 'post') {
      continue;
    }

    try {
      const postId = post['wp:post_id'];
      const title = post.title || 'Untitled';
      const content = post['content:encoded'] || '';
      const date = post['wp:post_date'];
      const author = 'We Do Soft';
      const categories = extractCategories(post.category);

      console.log(`[${successCount + 1}] 처리 중: ${title} (ID: ${postId})`);

      // 이미지 처리
      const { content: processedContent, thumbnail } = await processImages(content, postId);
      const markdownContent = htmlToMarkdown(processedContent);

      // Front Matter 생성
      const frontMatter = `---
title: "${title.replace(/"/g, '\\"')}"
slug: "${postId}"
publishedAt: "${date}"
author: "${author}"
thumbnail: ${thumbnail ? `"${thumbnail}"` : 'null'}
originalCategory: ${categories.length > 0 ? `"${categories[0]}"` : '""'}
categories: []
meta:
  originalId: "${postId}"
---

${markdownContent}
`;

      // 파일 저장 (숫자 ID 기반)
      const outputPath = path.join(OUTPUT_DIR, `${postId}.mdx`);
      fs.writeFileSync(outputPath, frontMatter, 'utf-8');

      successCount++;
      console.log(`✅ 저장: ${outputPath}\n`);

    } catch (err) {
      console.error(`❌ 처리 실패:`, err);
    }
  }

  console.log('\n🎉 마이그레이션 완료!');
  console.log(`✅ 성공: ${successCount}개 포스트`);
}

migrate().catch(console.error);
