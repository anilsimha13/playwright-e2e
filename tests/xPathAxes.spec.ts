import { expect, Locator, test } from "@playwright/test";

test("xpath axes", async ({ page }) => {
  await page.goto("https://www.w3schools.com/html/html_tables.asp");
  const country: Locator = page.locator("//td[text()='Germany']/self::td");
  await expect(country).toHaveText("Germany");
  const countryName = await country.textContent();
  console.log(countryName);

  //Parent

  const parentRow: Locator = page.locator("//td[text()='Germany']/parent::tr");
  await expect(parentRow).toContainText("Maria Anders");

  //Child

  const secondRowData = page.locator(
    '//table[@id="customers"]//tr[3]/child::td'
  );
  await expect(secondRowData).toHaveCount(3);
  const printSecondRowData = await secondRowData.allTextContents();
  for (const data of printSecondRowData) {
    console.log(data);
  }
  console.log(printSecondRowData);

  //Ancestor
  const ancestorTable: Locator = page.locator(
    "//td[text()='Germany']/ancestor::table"
  );
  await expect(ancestorTable).toHaveAttribute("id", "customers");

  //descendant
  const allTableData: Locator = page.locator(
    "//table[@id='customers']//descendant::td"
  );
  await expect(allTableData).toHaveCount(18);
});
