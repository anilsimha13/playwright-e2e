import { expect, test, Locator } from "@playwright/test";

test("Verify Playwright Locators", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com");
  //page.getByAltText()
  const logo: Locator = page.getByAltText("nopCommerce demo store");
  await expect(logo).toBeVisible();
  //page.getByText()
  const welcomeText: Locator = page.getByText("Welcome to our store");
  await expect(welcomeText).toBeVisible();
  //page.getByRole()
  await page.getByRole("link", { name: "Register" }).click();
  const registerHeading: Locator = page.getByRole("heading", {
    name: "Register",
  });
  await expect(registerHeading).toBeVisible();
  //page.getByLabel()
  await page.getByLabel("First name:").fill("John");
  await page.getByLabel("Last name:").fill("Doe");
  await page.getByLabel("Email:").fill("john.doe@example.com");
  //page.getByPlaceholder()
  await page.getByPlaceholder("Search store").fill("laptop");
  //page.getByTitle()
  await page.goto("file:///Users/anilsimha/Downloads/ClassDemos/app.html");
  const HomePage: Locator = page.getByTitle("Home page link");
  await expect(HomePage).toHaveText("Home");
  //page.getByTestId()
  const profileEmail: Locator = page.getByTestId("profile-email");
  await expect(profileEmail).toHaveText("john.doe@example.com");
});
