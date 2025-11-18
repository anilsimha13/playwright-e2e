import { test, expect, Locator } from "@playwright/test";

test("Single Select Dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const countryDropDown: Locator = page.locator("#country");
  await countryDropDown.selectOption("India"); //Visible Text
  await countryDropDown.selectOption({ value: "usa" }); //Attribute
  await countryDropDown.selectOption({ label: "Brazil" }); //label
  await countryDropDown.selectOption({ index: 2 }); //Index
  const countryDropDownElements: Locator = page.locator("#country>option");
  const totalCountOfCountries = await countryDropDownElements.count();
  console.log(totalCountOfCountries);
  await expect(totalCountOfCountries).toBe(10);

  const optionsText: string[] = (
    await countryDropDownElements.allTextContents()
  ).map((text) => text.trim());
  console.log(optionsText);
  await expect(optionsText).toContain("Germany");

  for (let i = 0; i < optionsText.length; i++) {
    console.log(optionsText[i], i);
  }

  for (let option of optionsText) {
    console.log(option);
  }
});
