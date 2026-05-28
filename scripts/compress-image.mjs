/**
 * 圖片壓縮腳本 — 將圖片轉為 WebP 並自動壓縮到目標大小
 *
 * 用法：
 *   node scripts/compress-image.mjs <輸入圖片路徑> [輸出路徑] [目標大小KB]
 *
 * 範例：
 *   node scripts/compress-image.mjs src/assets/2022-33.jpg                           → 輸出到 public/assets/2022-33.webp，目標 100KB
 *   node scripts/compress-image.mjs src/assets/photo.png output/photo.webp 150       → 輸出到 output/photo.webp，目標 150KB
 *   node scripts/compress-image.mjs src/assets/2022-33.jpg public/assets/2022-33.webp 80  → 目標 80KB
 */

import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

// NOTE: 使用二分搜尋法在品質 1~100 之間逼近目標檔案大小，
// 這樣能在保持最高畫質的前提下精準命中目標體積。
const TARGET_KB_DEFAULT = 100;
const MAX_ITERATIONS = 15;

/**
 * 將圖片壓縮為 WebP 格式，自動調整品質以逼近目標大小
 * @param inputPath 輸入圖片的絕對或相對路徑
 * @param outputPath 輸出 WebP 的絕對或相對路徑
 * @param targetKB 目標大小（KB）
 */
async function compressToWebP(inputPath, outputPath, targetKB) {
  const targetBytes = targetKB * 1024;

  // 確保輸出目錄存在
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const metadata = await sharp(inputPath, { failOn: 'none' }).metadata();
  console.log(`\n📷 原始圖片資訊：`);
  console.log(`   格式：${metadata.format}`);
  console.log(`   尺寸：${metadata.width} x ${metadata.height}`);
  console.log(`   大小：${(fs.statSync(inputPath).size / 1024).toFixed(1)} KB`);
  console.log(`\n🎯 目標大小：${targetKB} KB`);

  let low = 1;
  let high = 100;
  let bestQuality = 80;
  let bestBuffer = null;

  // 二分搜尋最佳品質參數
  for (let i = 0; i < MAX_ITERATIONS; i++) {
    if (low > high) break;
    const mid = Math.round((low + high) / 2);
    const buffer = await sharp(inputPath, { failOn: 'none' })
      .webp({ quality: mid })
      .toBuffer();

    const sizeKB = buffer.length / 1024;
    console.log(`   嘗試品質 ${mid}：${sizeKB.toFixed(1)} KB`);

    if (buffer.length <= targetBytes) {
      // 符合條件，嘗試提高品質以獲得更好畫質
      bestQuality = mid;
      bestBuffer = buffer;
      low = mid + 1;
    } else {
      // 超過目標，降低品質
      high = mid - 1;
    }

    // 如果已經非常接近目標（誤差在 5% 以內），提前結束
    if (Math.abs(buffer.length - targetBytes) / targetBytes < 0.05) {
      if (buffer.length <= targetBytes) {
        bestQuality = mid;
        bestBuffer = buffer;
      }
      break;
    }
  }

  // HACK: 如果二分搜尋沒有找到符合條件的結果（品質 1 仍然超過目標），
  // 則進行等比縮小後重新壓縮
  if (!bestBuffer) {
    console.log(`\n⚠️  品質 1 仍超出目標，啟動尺寸縮放...\n`);
    let scale = 0.9;
    while (scale > 0.1) {
      const newWidth = Math.round(metadata.width * scale);
      const buffer = await sharp(inputPath, { failOn: 'none' })
        .resize(newWidth)
        .webp({ quality: 60 })
        .toBuffer();

      if (buffer.length <= targetBytes) {
        bestBuffer = buffer;
        bestQuality = 60;
        console.log(`   縮放至 ${Math.round(scale * 100)}%（${newWidth}px 寬）：${(buffer.length / 1024).toFixed(1)} KB ✓`);
        break;
      }
      console.log(`   縮放至 ${Math.round(scale * 100)}%（${newWidth}px 寬）：${(buffer.length / 1024).toFixed(1)} KB ✗`);
      scale -= 0.1;
    }
  }

  if (!bestBuffer) {
    console.error('\n❌ 無法壓縮到目標大小，請嘗試增大目標值。');
    process.exit(1);
  }

  fs.writeFileSync(outputPath, bestBuffer);

  const finalSize = fs.statSync(outputPath).size;
  const finalMeta = await sharp(outputPath).metadata();

  console.log(`\n✅ 壓縮完成！`);
  console.log(`   輸出路徑：${outputPath}`);
  console.log(`   輸出格式：WebP`);
  console.log(`   輸出尺寸：${finalMeta.width} x ${finalMeta.height}`);
  console.log(`   輸出品質：${bestQuality}`);
  console.log(`   輸出大小：${(finalSize / 1024).toFixed(1)} KB`);
  console.log(`   壓縮率：${((1 - finalSize / fs.statSync(inputPath).size) * 100).toFixed(1)}%\n`);
}

// 解析命令列參數
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(`
用法：node scripts/compress-image.mjs <輸入圖片路徑> [輸出路徑] [目標大小KB]

範例：
  node scripts/compress-image.mjs src/assets/photo.jpg
  node scripts/compress-image.mjs src/assets/photo.jpg public/assets/photo.webp 150
  `);
  process.exit(0);
}

const inputPath = path.resolve(args[0]);

if (!fs.existsSync(inputPath)) {
  console.error(`❌ 找不到輸入檔案：${inputPath}`);
  process.exit(1);
}

// 自動生成輸出路徑：預設放到 public/assets/ 下，副檔名改為 .webp
const inputBaseName = path.basename(inputPath, path.extname(inputPath));
const defaultOutputPath = path.resolve('public', 'assets', `${inputBaseName}.webp`);
const outputPath = args[1] ? path.resolve(args[1]) : defaultOutputPath;
const targetKB = args[2] ? parseInt(args[2], 10) : TARGET_KB_DEFAULT;

compressToWebP(inputPath, outputPath, targetKB);
