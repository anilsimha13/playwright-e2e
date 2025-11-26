import { test, Locator, Page, expect } from "@playwright/test";

test("popups demo", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://testautomationpractice.blogspot.com/");

  await Promise.all([
    page.waitForEvent("popup"),
    page.locator("#PopUp").click(),
  ]);
  const pages = context.pages();
  console.log(pages.length);

  for (let page of pages) {
    const pageTitle = await page.title();
    console.log(pageTitle);
    if (pageTitle.includes("Selenium")) {
      await expect(page.locator("#Layer_1")).toHaveAttribute("data-name");
      //await page.locator('//div[@class="dropdown"]').click();
      await page.close();
    }
    await page.close();
  }
});
