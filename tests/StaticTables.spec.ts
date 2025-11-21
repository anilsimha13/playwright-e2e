import { test, expect, Locator } from "@playwright/test";

test("Static Web Tables Validation", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table: Locator = page.locator('table[name="BookTable"]>tbody');
  await expect(table).toBeVisible();
  //Count Rows
  const tableRows: Locator = table.locator("tr");
  const count: number = await tableRows.count();
  console.log(count);
  expect(count).toBe(7);

  //Count Columns

  const columnCount = table.locator("tr>th");
  console.log(await columnCount.count());

  //Read all data from 2nd row

  const rowCells: Locator = tableRows.nth(1).locator("td");
  const rowData: string[] = await rowCells.allInnerTexts();
  console.log(rowData, "2nd Row");

  //Print all rows and columns

  const allRowData = await tableRows.all();
  for (let rowdata of allRowData.slice(1)) {
    console.log(await rowdata.locator("td").allInnerTexts());
  }
});
