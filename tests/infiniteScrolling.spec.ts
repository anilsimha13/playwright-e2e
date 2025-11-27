import { test, expect, Locator } from "@playwright/test";

test("Infinite Scrolling", async ({ page }) => {
  test.slow();
  await page.goto("https://www.booksbykilo.in/new-books");

  let previousHeight = 0;
  while (true) {
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitForTimeout(2000);
    const currentHeight = await page.evaluate(() => {
      return document.body.scrollHeight;
    });
    console.log(previousHeight, currentHeight);
    if (currentHeight == previousHeight) {
      break;
    }
    previousHeight = currentHeight;
  }
  console.log("Reached End of the page");
});
