import { test, expect, Locator, chromium } from "@playwright/test";

test("Browser Settings", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 800, height: 800 },
    locale: "en-US",
    //proxy: { server: "PROXY URL" },
    ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();
  await page.goto("https://books-pwakit.appspot.com/");
  await page.waitForTimeout(5000);
});
