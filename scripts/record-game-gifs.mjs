import puppeteer from "puppeteer";
import GIFEncoder from "gif-encoder-2";
import { createCanvas, loadImage } from "canvas";
import { writeFileSync, mkdirSync } from "fs";

const W = 800, H = 450;
mkdirSync("public/assets/ai-collab", { recursive: true });

async function captureGif(page, filename, durationMs = 4500, fps = 6, onFrame) {
  const encoder = new GIFEncoder(W, H, "neuquant", true);
  encoder.setDelay(Math.round(1000 / fps));
  encoder.setRepeat(0);
  encoder.setQuality(15);
  encoder.start();
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext("2d");
  const frameCount = Math.round((durationMs / 1000) * fps);
  for (let i = 0; i < frameCount; i++) {
    if (onFrame) await onFrame(i, frameCount);
    const buf = await page.screenshot({ type: "png" });
    ctx.drawImage(await loadImage(buf), 0, 0);
    encoder.addFrame(ctx);
    await new Promise((r) => setTimeout(r, 1000 / fps));
  }
  encoder.finish();
  writeFileSync(filename, encoder.out.getData());
  console.log("saved", filename);
}

const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: W, height: H });

// === Clip 1: 水彩地图 ===
await page.goto("https://unfinished-entry.vercel.app/", { waitUntil: "networkidle0", timeout: 30000 });
await page.evaluate(() => localStorage.setItem("adult-movie-demo:introSeen", "true"));
await page.reload({ waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 1500));
await captureGif(page, "public/assets/ai-collab/game-clip-1.gif", 2500, 5);

// === Clip 2: 档案袋关系图谱 ===
await page.click("button.global-bag-tab");
await new Promise((r) => setTimeout(r, 1000));
await page.click('[data-tutorial-target="archive-tab-graph"]');
await new Promise((r) => setTimeout(r, 1200));
await captureGif(page, "public/assets/ai-collab/game-clip-2.gif", 4000);

// === Clip 3: 李宅剧情场景画面 ===
// 关闭档案袋，回到地图
await page.click("button.archive-close-button");
await new Promise((r) => setTimeout(r, 600));
await page.click('[data-tutorial-target="map-node-li-house"]');
await new Promise((r) => setTimeout(r, 1000));
await page.click('[data-tutorial-target="li-house-enter-investigation"]');
await new Promise((r) => setTimeout(r, 1500));

// node00 是 paper 模式，有打字机效果
// 点击 paper-transcript-body 跳过打字 + 推进行（node00 有 4 行，每行 2 次点击）
for (let i = 0; i < 12; i++) {
  const el = await page.$("div.paper-transcript-body");
  if (!el) break;
  await el.click();
  await new Promise((r) => setTimeout(r, 350));
}

// 等待并点击「开始审阅」choice-link
await page.waitForSelector("button.choice-link", { timeout: 6000 });
await page.click("button.choice-link");
await new Promise((r) => setTimeout(r, 1000));

// 现在进入 node01-recording-start（scene 模式，背景图 li-house-testimony-camera.png）
// 推进 2 行后开始录制
for (let i = 0; i < 2; i++) {
  const sceneEl = await page.$(".scene-player");
  if (sceneEl) await sceneEl.click();
  await new Promise((r) => setTimeout(r, 600));
}

// 录制 6s，期间每 ~1.5s 推进一次（点 choice-link 或 scene-player）
let sceneClicks = 0;
await captureGif(page, "public/assets/ai-collab/game-clip-3.gif", 6000, 6, async (frameIdx) => {
  if (frameIdx > 0 && frameIdx % 9 === 0 && sceneClicks < 12) {
    try {
      const choiceBtn = await page.$("button.choice-link");
      if (choiceBtn) {
        await choiceBtn.click();
      } else {
        const sp = await page.$(".scene-player");
        if (sp) await sp.click();
      }
      sceneClicks++;
    } catch {
      // ignore
    }
  }
});

await browser.close();
console.log("All GIFs saved.");
