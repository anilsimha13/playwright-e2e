import { expect, Locator, test } from "@playwright/test";

test("Text Input Actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const userNameField: Locator = page.locator(
    '//input[@class="form-control" and @placeholder="Enter Name"]'
  );
  await userNameField.fill("Anil Simha");
  await expect(userNameField).toBeEnabled();
  await expect(userNameField).toBeVisible();
  const attributeValue: string | null = await userNameField.getAttribute(
    "maxlength"
  );
  console.log(attributeValue);
  await expect(userNameField).toHaveAttribute("maxlength", "15");
  console.log("Entered Value is: ", await userNameField.inputValue());
});

test("Radio buttons", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const genderMale: Locator = page.locator('//input[@value="male"]');
  await genderMale.click();
  //await genderMale.uncheck();
  await expect(genderMale).toBeVisible();
  (await genderMale.isChecked())
    ? console.log("Male is checked")
    : console.log("Male is unchecked");
});

test.only("Checkbox", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  /* Method - 1
  const allDays = await page
    .locator('//input[@class="form-check-input" and @type="checkbox"]')
    .elementHandles();
  for (const element of allDays) {
    await element.check();
  }
    */

  /* Method - 2
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const checkBoxs: Locator[] = days.map((day) => page.getByLabel(day));
  await expect(checkBoxs).toHaveLength(7);

  for (const checkbox of checkBoxs) {
    await checkbox.check();
  }
    */
  const sundayLable: Locator = page.getByLabel("Sunday");
  /*
  await sundayLable.check();
  await expect(sundayLable).toBeChecked();
  await page.waitForTimeout(5000);
  await sundayLable.uncheck();
  (await sundayLable.isChecked())
    ? console.log("Sunday is checked")
    : console.log("Sunday is not checked");
    */
  (await sundayLable.isChecked())
    ? await sundayLable.check()
    : await sundayLable.uncheck();
});
