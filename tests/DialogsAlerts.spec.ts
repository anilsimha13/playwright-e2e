import { test, Locator, expect } from "@playwright/test";

test.skip("Simple Dialogs", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  page.on("dialog", (dialog) => {
    console.log(dialog.type());
    console.log(dialog.message());
    expect(dialog.message()).toContain("I am an alert box!");
    expect(dialog.type()).toBe("alert");
    dialog.accept();
  });
  const simpleAlert = await page
    .getByRole("button", { name: "Simple Alert" })
    .click();
  await page.waitForTimeout(5000);
});

test.skip("Confirmation Alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  page.on("dialog", (dialog) => {
    console.log(dialog.message());
    dialog.dismiss();
  });
  await page.getByRole("button", { name: "Confirmation Alert" }).click();
  await page.waitForTimeout(5000);
  const confirmPageInnerText = await page.locator("#demo").innerText();
  console.log(confirmPageInnerText);
  expect(confirmPageInnerText).toContain("Cancel");
});

test("Prompt Alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on("dialog", (dialog) => {
    console.log(dialog.message());
    expect(dialog.defaultValue()).toContain("Harry");
    dialog.accept("John Doe"); // Accept with a value or just accept()
  });

  await page.getByRole("button", { name: "Prompt Alert" }).click();
  const EnteredText = await page.locator("#demo").textContent();
  expect(EnteredText).toContain("Doe");
  console.log(EnteredText);

  await page.waitForTimeout(2000);
});
