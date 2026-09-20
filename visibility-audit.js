const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE_URL = "http://localhost:3000";
const SCREENSHOT_DIR = path.resolve(__dirname, "..", "screenshots", "audit");

const PAGES = [
  "/",
  "/about",
  "/events",
  "/journal",
  "/careers",
  "/contact",
  "/locations",
  "/collaborations",
  "/samsara",
  "/svvara",
  "/svarga",
  "/acasa",
  "/nocturne",
  "/music",
  "/dining",
  "/hospitality",
  "/community",
  "/design",
  "/lifestyle",
  "/privacy",
  "/terms",
  "/locations/jakarta",
  "/locations/ubud",
  "/locations/canggu",
];

(async () => {
  // Ensure output dir exists
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });

  const errors = [];
  const pagesTested = [];

  for (const route of PAGES) {
    const slug = route.replace(/\//g, "_").replace(/^_/, "") || "home";
    const screenshotPath = path.join(SCREENSHOT_DIR, `${slug}.png`);
    const pageErrors = [];

    const page = await context.newPage();
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        pageErrors.push(msg.text());
      }
    });
    page.on("pageerror", (err) => {
      pageErrors.push(err.message);
    });

    const url = `${BASE_URL}${route}`;
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
      await page.screenshot({ path: screenshotPath, fullPage: true });
      pagesTested.push(route);
      if (pageErrors.length > 0) {
        errors.push({ route, consoleErrors: pageErrors });
      }
      console.log(`✓ ${route} → ${path.basename(screenshotPath)}`);
    } catch (err) {
      console.error(`✗ ${route} — ${err.message}`);
      errors.push({ route, consoleErrors: [err.message] });
    } finally {
      await page.close();
    }
  }

  await browser.close();

  console.log("\n========== AUDIT SUMMARY ==========");
  console.log(`Pages tested: ${pagesTested.length}/${PAGES.length}`);
  if (errors.length > 0) {
    console.log(`\nConsole errors found on ${errors.length} page(s):\n`);
    for (const e of errors) {
      console.log(`  ${e.route}:`);
      for (const msg of e.consoleErrors) {
        console.log(`    - ${msg}`);
      }
    }
  } else {
    console.log("No console errors detected.");
  }
  console.log(`\nScreenshots saved to: ${SCREENSHOT_DIR}`);
})();
