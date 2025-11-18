import test, { expect, Locator } from "@playwright/test";

test("Multi-select dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const colorsElements: Locator = await page.locator("#colors");
  await colorsElements.selectOption(["Blue", "Green"]); //Visible
  await colorsElements.selectOption(["white"]); //Attribute
  await colorsElements.selectOption([{ value: "yellow" }, { value: "red" }]); //Value
  await colorsElements.selectOption([{ index: 1 }, { index: 3 }]); //Index

  await page.waitForTimeout(5000);

  //Count

  const colorsList: Locator = await page.locator("#colors>option");
  const totalColorsInList: number = await colorsList.count();
  expect(totalColorsInList).toBe(7);
  console.log(totalColorsInList);

  //Check the presence of Red color

  const optionsList: string[] = (await colorsList.allTextContents()).map(
    (text) => text.trim()
  );
  expect(optionsList).toContain("Red");
  console.log(optionsList);

  for (let list of optionsList) {
    console.log(list);
  }
});
