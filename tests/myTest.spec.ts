import { test, expect } from "@playwright/test";

test("my first test - Page title validation", async ({ page }) => {
  await page.goto("http://www.automationpractice.pl/index.php");
  const pageTitle: string = await page.title();
  console.log(`Page title is: ${pageTitle}`);
  await expect(page).toHaveTitle("My Shop");
  await expect(page).toHaveURL("http://www.automationpractice.pl/index.php");
});
