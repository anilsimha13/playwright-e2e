import { test, Locator, expect } from "@playwright/test";

test.skip("Keyboard actions multiple commands", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#input1").click();
  await page.keyboard.type("Welcome");
  await page.keyboard.down("Meta");
  await page.keyboard.press("A");
  await page.keyboard.up("Meta");

  await page.keyboard.down("Meta");
  await page.keyboard.press("C");
  await page.keyboard.up("Meta");

  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");

  await page.keyboard.down("Meta");
  await page.keyboard.press("V");
  await page.keyboard.up("Meta");

  await page.waitForTimeout(5000);
});
test("Keyboard actions single commands", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#input1").click();
  await page.keyboard.type("Welcome");
  await page.keyboard.press("Meta+A");
  await page.keyboard.press("Meta+C");

  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");

  await page.keyboard.press("Meta+V");

  await page.waitForTimeout(5000);
});
