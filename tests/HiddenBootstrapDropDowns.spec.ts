import { test, expect, Locator } from "@playwright/test";

test("Hidden DropDown", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.fill('//input[@placeholder="Username"]', "Admin");
  await page.fill('//input[@placeholder="Password"]', "admin123");
  await page.click('//button[@type="submit"]');
  await page.click('//a[@href="/web/index.php/pim/viewPimModule"]');
  await page.waitForTimeout(5000);
  //await page.click('//div[@class="--toggle"]/child::button');
  await page.locator("form i").nth(2).click();
  const jobTitle: Locator = await page.locator("div[role='listbox'] span");
  const allJobTitle = await jobTitle.allTextContents();
  console.log(allJobTitle);
  const totalJobsPresentInlist = await jobTitle.count();
  console.log(totalJobsPresentInlist);
  for (let i = 0; i < totalJobsPresentInlist; i++) {
    const titleText = await jobTitle.nth(i).innerText();
    if (titleText.trim() === "Automaton Tester") {
      await jobTitle.nth(i).click();
      break;
    }
  }
});
