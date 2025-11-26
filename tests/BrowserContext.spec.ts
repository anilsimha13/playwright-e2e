import { test, expect, Locator, Page, chromium } from "@playwright/test";

test("Browser Context demo", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page1: Page = await context.newPage();
  const page2: Page = await context.newPage();
  const page3: Page = await context.newPage();
  const page4: Page = await context.newPage();
  await page1.goto("https://testautomationpractice.blogspot.com/");
  await page2.goto("https://demowebshop.tricentis.com/");
  await page3.goto("https://ui.shadcn.com/");
  await page4.goto("https://v0.dev/");
  console.log(context.pages().length);
});
