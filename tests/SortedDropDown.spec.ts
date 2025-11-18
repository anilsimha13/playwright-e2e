import test, { expect, Locator } from "@playwright/test";

test("Check if options in dropdown are sorted or not", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const animalsList: Locator = await page.locator("#animals");
  await animalsList.selectOption(["Cat", "Dog"]);
  const individualAnimals = await page.locator("#animals>option");
  const allAnimals: string[] = (await individualAnimals.allTextContents()).map(
    (text) => text.trim()
  );

  const originalList: string[] = allAnimals;
  const sortedList: string[] = allAnimals.sort();

  originalList == sortedList
    ? console.log("I am Sorted")
    : console.log("I am not sorted");
  expect(originalList).toEqual(sortedList);

  const animalsCount = await individualAnimals.count();
  expect(allAnimals).toContain("Zebra");
  expect(animalsCount).toBe(10);
  console.log(allAnimals);
  await page.waitForTimeout(5000);
  for (let animal of allAnimals) {
    console.log(animal);
  }
});

test.only("Duplicate Dropdowns", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //const dropDownOptions = await page.locator("#animals>option"); //No duplicates present
  const dropDownOptions = await page.locator("#colors>option"); //Has duplicates

  const getAllOptions = (await dropDownOptions.allTextContents()).map((text) =>
    text.trim()
  );
  const mySet = new Set<string>();
  const duplicates: string[] = [];
  for (let text of getAllOptions) {
    if (mySet.has(text)) {
      duplicates.push(text);
    } else {
      mySet.add(text);
    }
  }
  console.log(duplicates);
  expect(duplicates.length).toBe(2);
});
