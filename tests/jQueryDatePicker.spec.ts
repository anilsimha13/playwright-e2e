import { test, expect, Locator } from "@playwright/test";

test("jQuery Date Picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //  await page.fill("#datepicker", "09/04/2025");
  //  await page.waitForTimeout(5000);
  const dateInput: Locator = page.locator("#datepicker");
  await dateInput.click();

  //select target date
  const year = "2026";
  const month = "September";
  const date = "4";

  while (true) {
    const currentMonth: string | null = await page
      .locator(".ui-datepicker-month")
      .textContent();
    const currentYear = await page.locator(".ui-datepicker-year").textContent();

    if (currentMonth === month && currentYear === year) {
      const allDates = await page.locator(".ui-datepicker-calendar td").all();
      for (let dt of allDates) {
        const dateText = await dt.innerText();
        if (dateText === date) {
          await dt.click();
          break;
        }
      }
      break;
    }
    await page.locator(".ui-datepicker-next").click();
  }
});
