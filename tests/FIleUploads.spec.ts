import { test, Locator, expect } from "@playwright/test";
import fs from "fs";

test("Single File Uploads", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#singleFileInput").setInputFiles("testFiles/simple.txt");
  await page.locator('button:has-text("Upload Single File")').click();
  await page.waitForTimeout(3000);
  const msg = await page.locator("#singleFileStatus").textContent();

  await expect(msg).toContain("simple.txt");
});
