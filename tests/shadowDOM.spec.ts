import { test, expect, Locator } from "@playwright/test";

test("Validating the shadow dom elements", async ({ page }) => {
  await page.goto("https://books-pwakit.appspot.com/");
  const searchbox = page.getByRole("searchbox", { name: "Search Books" });
  await searchbox.fill("Playwright Automation");
  await page.waitForTimeout(5000);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(5000);
  const booksFound = await page.locator("h2.title").all();
  const countOfBooks = booksFound.length;
  console.log("Total number of books found is: ", countOfBooks);
  for (let book of booksFound) {
    const bookName = await book.innerText();
    if (bookName === "Theatre Magazine") {
      await book.click();
      break;
    }
  }
  await page.waitForTimeout(5000);
});
