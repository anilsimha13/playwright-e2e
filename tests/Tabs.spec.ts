import { test, expect, Locator, chromium } from "@playwright/test";

test("Tabs switching", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page1 = await context.newPage();
  await page1.goto("https://testautomationpractice.blogspot.com/");
  const newTabBtn: Locator = await page1.getByRole("button", {
    name: "New Tab",
  });

  const [childPage] = await Promise.all([
    context.waitForEvent("page"),
    newTabBtn.click(),
  ]);

  const pages = context.pages();
  console.log(pages.length);
  console.log(await pages[0].title());
  console.log(await pages[1].title());

  await page1.waitForTimeout(5000);

  //const page2 = await context.newPage();
});
