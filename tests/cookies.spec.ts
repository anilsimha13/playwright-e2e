import { test, expect, Locator, chromium } from "@playwright/test";

test("Browser setting - Cookies", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  context.addCookies([
    {
      name: "mycookies",
      value: "12345678",
      url: "http://www.automationpractice.pl/index.php",
    },
    {
      name: "mycookies1",
      value: "123456789",
      url: "http://www.automationpractice.pl/index.php",
    },
  ]);
  const page = await context.newPage();
  await page.goto("http://www.automationpractice.pl/index.php");
  const allTheCookies = await context.cookies();
  const retrivedCookies = allTheCookies.find((c) => c.name === "mycookies1");
  console.log(retrivedCookies);
  await context.clearCookies()
});
