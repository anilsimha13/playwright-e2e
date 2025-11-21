import { test, Locator, expect } from "@playwright/test";

test.skip("Comparing the methods", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  const products: Locator = page.locator(".product-title");
  const productsCount: number = await products.count();

  for (let i = 0; i < productsCount; i++) {
    const productName: string = await products.nth(i).innerText(); //Visible text
    const productName_1: string | null = await products.nth(i).textContent(); //Prints everything which are hidden even
    console.log(productName, "innertext");
    console.log(productName_1, "textcontent");
  }

  const productNames_innextext: string[] = await products.allInnerTexts();

  for (let productName of productNames_innextext) {
    console.log(productName, "allInnerText");
  }

  const productNames_allTextContent: string[] =
    await products.allTextContents();

  for (let product of productNames_allTextContent) {
    console.log(product.trim(), "alltextcontent");
  }
});

test("all Method", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  const products: Locator = page.locator(".product-title");
  const allProductsLocators: Locator[] = await products.all();
  for (let product of allProductsLocators) {
    console.log(await product.innerText());
  }
});
