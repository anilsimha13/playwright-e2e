import { test, expect } from "@playwright/test";

test("CSS selector with tag & id", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  //#id;
  await page.fill("input#small-searchterms", "Laptop");

  //.class
  await page.fill(".search-box-text", "tv");

  //tag with any other attribute

  await page.fill('input[name="NewsletterEmail"]', "anildrive9@gmail.com");

  //tag with class and attribute
  await page.fill('input.search-box-text[value="Search store"]', "iPhone");
});
