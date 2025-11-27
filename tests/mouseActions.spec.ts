import { test, expect, Locator } from "@playwright/test";

test.skip("mouse actions demo", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const pointMeLocator = page.getByText("Point Me");
  await pointMeLocator.hover();
  const laptopLocator = page.locator('a:has-text("Laptops")');
  await laptopLocator.hover();
  await page.waitForTimeout(5000);
});

test.skip("Right Click", async ({ page }) => {
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
  const rightClickElementLocator = page.locator('p:has-text("right click me")');
  await rightClickElementLocator.click({ button: "right" });
  const ParentlistOfElement = page.locator(
    ".context-menu-list.context-menu-root"
  );
  const ChildListOfElements = await ParentlistOfElement.locator(
    "li"
  ).allInnerTexts();

  for (let allLis of ChildListOfElements) {
    console.log(allLis);
  }
});

test.skip("Double Click", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const COPYTEXTlocator = page.getByRole("button", { name: "Copy Text" });
  await COPYTEXTlocator.dblclick();
  const FIELD_2 = page.locator("#field2");
  await expect(FIELD_2).toHaveValue("Hello World!");
});

test("Drag and Drop", async ({ page }) => {
  await page.goto("http://demo.automationtesting.in/Static.html");
  const sourceElement = page.locator("#node");
  const dropElement = page.locator("#droparea");
  /*
  Method - 1
  await sourceElement.hover();
  await page.mouse.down();
  await dropElement.hover();
  await page.mouse.up();
 */
  //Method - 2
  await sourceElement.dragTo(dropElement);
  await page.waitForTimeout(5000);
});
