import { test, expect, Locator } from "@playwright/test";

test("Dynamic Tables", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/dynamic-table");
  const tableBody: Locator = page.locator(".table.table-striped>tbody");
  await expect(tableBody).toBeVisible();
  const tableRows: Locator[] = await tableBody.locator("tr").all();
  await expect(tableRows).toHaveLength(4);

  let cpuPercentage: string = "";
  for (let rows of tableRows) {
    const processName: string = await rows.locator("td").nth(0).innerText();
    console.log(processName);
    if (processName === "Chrome") {
      cpuPercentage = await rows.locator("td", { hasText: "%" }).innerText();
      console.log(cpuPercentage);
      break;
    }
  }

  const chromeValue: string = await page.locator("#chrome-cpu").innerHTML();
  console.log(chromeValue);
  if (chromeValue.includes(cpuPercentage)) {
    console.log("CPU percentage matches!");
  } else {
    console.log("CPU percentage doesn't match");
  }

  expect(chromeValue).toContain(cpuPercentage);
  await page.waitForTimeout(5000);

  //For Chrome process get value of CPU load.
});
