import puppeteer from "puppeteer";
import { writeFileSync, mkdirSync } from "fs";

const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720 });
await page.goto("https://unfinished-entry.vercel.app/", { waitUntil: "networkidle0", timeout: 30000 });
await new Promise((r) => setTimeout(r, 2000));
const buf = await page.screenshot({ type: "png" });
mkdirSync("public/assets/ai-collab", { recursive: true });
writeFileSync("public/assets/ai-collab/game-cover.png", buf);
await browser.close();
console.log("Screenshot saved to public/assets/ai-collab/game-cover.png");
