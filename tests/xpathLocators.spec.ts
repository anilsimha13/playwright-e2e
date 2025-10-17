import { test, expect, Locator } from "@playwright/test";

test("xpath locators", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  const logo: Locator = page.locator('//img[@alt="Tricentis Demo Web Shop"]');
  await expect(logo).toBeVisible();
  await page.fill('//input[@value="Search store"][@name="q"]', "iPhone");
  //await page.click('//input[@type="submit" and @value="Search"]');
  //await page.locator('//input[@type="submit" or @value="Search"]').click();
  const giftLinks: Locator = page.locator("//a[contains(@href,'gift')]");
  const giftLinkCount = await giftLinks.count();
  await expect(giftLinkCount).toBe(5);
  //   console.log("Gift text 1st", await giftLinks.first().textContent());
  //   console.log("Gift text last", await giftLinks.last().textContent());
  //   console.log("Gift text nth", await giftLinks.nth(2).textContent());
  const allGiftText: string[] = await giftLinks.allTextContents();
  for (let i = 0; i < allGiftText.length; i++) {
    console.log(allGiftText[i]);
  }

  for (let text of allGiftText) {
    console.log(text, "---");
  }
  const productsStartsWithBuild: Locator = page.locator(
    "//a[starts-with(@href,'/build')]"
  );

  const countOfBuildProducts = await productsStartsWithBuild.count();
  await expect(countOfBuildProducts).toBe(6);

  const regLink: Locator = page.locator("//a[normalize-space()='Register']");
  await expect(regLink).toBeVisible();
  const gPlus = page.locator('//div[@class="column follow-us"]/ul/li[last()]');
  await expect(gPlus).toHaveText("Google+");
  const twitter = page.locator(
    '//div[@class="column follow-us"]/ul/li[position()=2]'
  );
  await expect(twitter).toBeVisible();

  await page.goto("https://testautomationpractice.blogspot.com/");
  for (let i = 0; i < 6; i++) {
    await page.locator('//button[@name="start" or @name="stop"]').click();
  }
  await page.pause();
});
