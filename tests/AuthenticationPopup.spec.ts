import { test, expect, Locator, Page } from "@playwright/test";

test("Authentication popup demo passing username and password from URL", async ({
  browser,
}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
  await page.waitForLoadState();
  await page.waitForTimeout(10000);
  const successMessage = await page
    .locator("//p[contains(text(),'Congratulations')]")
    .innerText();
  expect(successMessage).toContain("Congratulations");
});
test.only("Authentication popup demo passing username and password from Context", async ({
  browser,
}) => {
  const context = await browser.newContext({
    httpCredentials: { username: "admin", password: "admin" },
  });
  const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/basic_auth");
  await page.waitForLoadState();
  await page.waitForTimeout(10000);
  const successMessage = await page
    .locator("//p[contains(text(),'Congratulations')]")
    .innerText();
  expect(successMessage).toContain("Congratulations");
});
