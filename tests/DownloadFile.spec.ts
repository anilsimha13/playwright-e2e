import { test, Locator, expect } from "@playwright/test";
import fs from "fs";

test("Download Files", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/download-files_25.html"
  );
  await page.getByLabel("Enter Text:").fill("Welcome");
  await page.locator("#generateTxt").click();
  expect(page.locator("#txtDownloadLink")).toBeVisible();
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.locator("#txtDownloadLink").click(),
  ]);
  const downLoadPath = "testFiles/downdloadedfile.txt";
  await download.saveAs(downLoadPath);
  await page.waitForTimeout(5000);
  const fileDownloaded = fs.existsSync(downLoadPath);
  expect(fileDownloaded).toBeTruthy();
  fs.readFile("testFiles/downdloadedfile.txt", "utf8", (err, data) => {
    console.log("Message from file", data);
  });
  if (fileDownloaded) {
    fs.unlinkSync(downLoadPath);
  }
});
