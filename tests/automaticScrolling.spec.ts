import { test, expect, Locator } from "@playwright/test";

test.skip("scrolling demo", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  const footerTextLocator = await page.locator(".footer-disclaimer");
  const footerText = await footerTextLocator.innerText();
  console.log(footerText);
});
test("Scrolling inside a dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const inputBoxLocator = page.locator("#comboBox");
  await inputBoxLocator.click();
  const dropdownLocator = page.locator("#dropdown");
  const childDropDownElements = await dropdownLocator.locator("div").all();
  for (let i = 0; i < childDropDownElements.length; i++) {
    const cdd = await childDropDownElements[i].innerText();
    console.log(cdd);
    if (cdd === "Item 100") {
      await childDropDownElements[i].click();
      break;
    }
  }
  await page.waitForTimeout(10000);
  expect(inputBoxLocator).toHaveValue("Item 100");
});
