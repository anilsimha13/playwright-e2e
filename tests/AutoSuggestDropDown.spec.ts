import { expect, Locator, test } from "@playwright/test";
test("Auto Suggest Dropdowns", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");
  const searchBoxLocator: Locator = page.locator(
    '//input[@title="Search for Products, Brands and More"]'
  );
  await searchBoxLocator.fill("mobile");
  await page.waitForTimeout(10000);
  const options: Locator = page.locator("ul>li");
  const totalCount = await options.count();
  console.log(totalCount);
  for (let i = 0; i < totalCount; i++) {
    const suggestedText = await options.nth(i).innerText();
    if (suggestedText == "mobile under 7000") {
      await options.nth(i).click();
      break;
    }
  }
  await page.waitForTimeout(10000);
});
