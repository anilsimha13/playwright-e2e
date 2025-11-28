# Playwright Framework - Typescript

[1. What is Playwright?](#1-what-is-playwright)

[2. Playwright Kick start](#2-playwright-kick-start)

[3. Understanding Playwright Locators(Built-in)](#3-understanding-playwright-locatorsbuilt-in)

[4. Locating Elements using CSS Locators](#4-locating-elements-using-css-locators)

[5. Locating Elements using XPath, Operators and functions in XPath](#5-locating-elements-using-xpath-operators-and-functions-in-xpath)

[6. Locating complex elements using Xpath Axes](#6-locating-complex-elements-using-xpath-axes)

[7. Playwright Actions-Inputbox, Checkbox & Radio buttons](#7-playwright-actions-inputbox-checkbox--radio-buttons)

[8. Handle Dropdowns -Part1](#8-handle-dropdowns--part1)

[9. Handle Dropdowns -Part2](#9-handle-dropdowns--part2)

[10. Handle Static & Dynamic Tables](#10-handle-static--dynamic-tables)

[11. Handle Date Pickers](#11-handle-date-pickers)

[12. Handling Dialogs and Frames/iFrames](#12-handling-dialogs-and-framesiframess)

[13. Playwright Browser Contexts, Handle Tabs and Popup Windows](#13-playwright-browser-contexts-handle-tabs-and-popup-windows)

[14. Handling Mouse Actions and Scrolling in playwright](#14-handling-mouse-actions-and-scrolling-in-playwright)

[15. Handling Keyboard Actions, File Upload and Download in Playwright](#15-handling-keyboard-actions-file-upload-and-download-in-playwright)

## Interview POV

1. ### What is Playwright?

   - Playwright is an open-source tool by Microsoft for automating web browser testing. <br>
   - Playwright is a framework for automating web browsers, enabling end-to-end testing
     <br>
   - Beyound browser testing, Playwright offers a dedicated API for testing and interacting with Web APIs
   - Released in 2020
   - Playwright is an Open-source Node.js library

#### Major Features

- Cross browser (_Chromium, Edge, Firefox, Webkit_)
- Cross Platform( _Windows, Mac, Linux_ )
- Cross Language (_Javascript, Typescript, Java, Python or C#_)
- Test Mobile Web
- API Testing
- Automatic Waiting
- Complex element handling
- Parallel execution
- Reports
- Inspector (_Helps debug tests by showing click points and verifying locators in real time_)
- Code Gen (_record and playback_)
- Tracing

#### Javascript vs Typescript

| Feature        | JavaScript              | TypeScript                         |
| -------------- | ----------------------- | ---------------------------------- |
| Type System    | Dynamic                 | Static (with type annotations)     |
| Compilation    | Interpreted             | Compiled to JavaScript             |
| Error Checking | Runtime                 | Compile-time                       |
| IDE Support    | Good                    | Excellent (with type info)         |
| Learning Curve | Easier                  | Slightly harder (types, config)    |
| Popularity     | Very High               | Growing fast                       |
| Use Case       | Web, Node.js, scripting | Large apps, maintainable codebases |

2. ### Playwright Kick start

- Installation
  - `npm init playwright@latest`
- Running tests
  - `npx playwright test`
- Generating HTML Report
  - `npx playwright show-report`
- Running tests in headed modes
  - `npx playwright test --headed`
- Running tests in specific browser
  - `npx playwright test --project=chromium`
- Running specific test file
  - `npx playwright test tests/example.spec.ts`
- Running specific test inside a file
  - `npx playwright test tests/example.spec.ts -g "test name"`
- Running tests in debug mode
  - `npx playwright test --debug`
- Generating code using codegen
  - `npx playwright codegen <website url>`
- `npx playwright test --ui` to open the test runner UI
- Fixtures
  - page
  - browser
  - context
  - Locator

3. ### Understanding Playwright Locators(Built-in)

   - `page.getByRole()` to locate by explicit and implicit accessibility attributes.
   - HTML Element vs ARIA Role table [here](https://www.w3.org/TR/html-aria/#docconformance).

   - `page.getByText()` to locate by text content/substring.
   - `page.getByLabel()` to locate a form control by associated label's text.
   - `page.getByPlaceholder()` to locate an input by placeholder.
   - `page.getByAltText()` to locate an element, usually image, by its text alternative.
   - `page.getByTitle()` to locate an element by its title attribute.
   - `page.getByTestId()` to locate an element based on its data-testid attribute (other attributes can be configured).
   - In playwright.config.ts we can configure testIdAttribute property to use custom attribute instead of data-testid.
     example: `testIdAttribute: 'data-test'`

4. ### Locating Elements using CSS Locators

- CSS has two types of stratagies to identify the locators
  - Relative
  - Absolute
- Different ways to create a CSS locatorsm(_Relative_)
  - tag with id (_tag#id_)
  - tag with class (_tag.class_)
  - tag with any other attribute (_tag[attribute=value]_)
  - tag with class and attribute (_tag.class[attribute=value]_)
- `page.locator("CSS/Xpath)`
- `body > div > *:nth-child(2)`
- `body > div > *:first-child`
- `body > div > *:last-child`
- `p[class^="ma"]` (_^ starts with_)
- `p[class$="ma"]`(_$ starts with_)
- `p[class*="ma"]` (_\* contains_)

5. ### Locating Elements using XPath, Operators and functions in XPath

- Absolute xpath
  - Starts from root
- Relative xpath

```js
await page.fill('//input[@value="Search store"][@name="q"]', "iPhone");
await page.click('//input[@type="submit" and @value="Search"]');
await page.locator('//input[@type="submit" or @value="Search"]').click();
```

- **Functions**
  - contains()
    - `//a[contains(@href,'gift')]`
  - starts-with()
    - `//a[starts-with(@href,'/build')]`
  - text()
    - `//a[text()='Register']`
    - `//a[normalize-space()='Register']`
  - last()
    - `//div[@class="column follow-us"]/ul/li[last()]`
  - position()
    - `//div[@class="column follow-us"]/ul/li[position()=2]`
  - Dynamic Xpath
    - use `OR` , `AND` , or above strategies
    - e.g:`//button[@name="start" or @name="stop"]`

6. ### Locating complex elements using Xpath Axes

- XPath Axes are used to navigate through elements in an XML document relative to the current node.
- Commonly used XPath Axes:
  - `child`: Selects all child elements of the current node.
    - `//div[@class='product-grid']/child::div`
  - `parent`: Selects the parent element of the current node.
    - `//a[@href='/register']/parent::li`
  - `ancestor`: Selects all ancestor elements (parents, grandparents, etc.) of the current node.
    - `//a[@href='/register']/ancestor::ul`
  - `descendant`: Selects all descendant elements (children, grandchildren, etc.) of the current node.
    - `//div[@class='product-grid']/descendant::a`
  - `following-sibling`: Selects all sibling elements that come after the current node.
    - `//h2[text()='Featured Products']/following-sibling::div`
  - `preceding-sibling`: Selects all sibling elements that come before the current node.
    - `//h2[text()='Featured Products']/preceding-sibling::div`
  - `following`: Selects all elements in the document that come after the current node.
    - `//a[@href='/register']/following::div`
  - `preceding`: Selects all elements in the document that come before the current node.
    - `//a[@href='/register']/preceding::div`

## 7. Playwright Actions-Inputbox, Checkbox & Radio buttons

**Input Field**

- To fill any Inputbox we need to use following method
  - `await userNameField.fill("Anil Simha")`
- To get the Entered value in the input field
  - `await userNameField.inputValue()`
- To get the Attribute value of the Locator
  - `const attributeValue: string | null = await userNameField.getAttribute("maxlength");`
- To assert the Attribute value
  - `await expect(userNameField).toHaveAttribute("maxlength", "15");`

**Radio Buttons**

```js
await expect(genderMale).toBeVisible();
(await genderMale.isChecked())
  ? console.log("Male is checked")
  : console.log("Male is unchecked");
```

**Checkbox**

- Select by label
  - `const sundayLable: Locator = page.getByLabel("Sunday");`
- Check all by `elementHandles()` method

```js
//Method1
const checkboxElements = await page
  .locator('//input[@class="form-check-input" and @type="checkbox"]')
  .elementHandles();

for (const element of checkboxElements) {
  await element.check();
}
```

```js
//Method2
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
```

## 8. Handle Dropdowns -Part1

- Methods to select the dropdown elements (Single Select)

```js
const countryDropDown: Locator = page.locator("#country");
await countryDropDown.selectOption("India"); //Visible Text
await countryDropDown.selectOption({ value: "usa" }); //Attribute
await countryDropDown.selectOption({ label: "Brazil" }); //label
await countryDropDown.selectOption({ index: 2 }); //Index
```

- Count the dropdown elements

```js
const countryDropDownElements: Locator = page.locator("#country>option");
const totalCountOfCountries = await countryDropDownElements.count();
console.log(totalCountOfCountries);
await expect(totalCountOfCountries).toBe(10);
```

- Contain the following option

```js
const optionsText: string[] = (
  await countryDropDownElements.allTextContents()
).map((text) => text.trim());
console.log(optionsText);
await expect(optionsText).toContain("Germany");
for (let option of optionsText) {
  console.log(option);
}
```

- Methods to select the dropdown elements (Multi Select)

```js
const colorsElements: Locator = await page.locator("#colors");
await colorsElements.selectOption(["Blue", "Green"]); //Visible
await colorsElements.selectOption(["white"]); //Attribute
await colorsElements.selectOption([{ value: "yellow" }, { value: "red" }]); //Value
await colorsElements.selectOption([{ index: 1 }, { index: 3 }]); //Index
```

## 9. Handle Dropdowns -Part2

- Get all the suggested options
  - `cmd+shift+p` on DOM and run `Emulate a focused page`

```js
//Auto Suggest Dropdowns
await page.goto("https://www.flipkart.com/");
const searchBoxLocator: Locator = page.locator(
  '//input[@title="Search for Products, Brands and More"]'
);
await searchBoxLocator.fill("mobile");
await page.waitForTimeout(10000);
const options: Locator = page.locator("ul>li");
const totalCount = await options.count();
console.log(totalCount);
for (let i = 0; i < totalCount; i++) {
  const suggestedText = await options.nth(i).innerText();
  if (suggestedText == "mobile under 7000") {
    await options.nth(i).click();
    break;
  }
}
```

## 10. Handle Static & Dynamic Tables

- [tests/StaticTables.spec.ts](./tests/StaticTables.spec.ts)
- [tests/DynamicTable.spec.ts](./tests/DynamicTable.spec.ts)

```js
const allRowData = await tableRows.all();
for (let rowdata of allRowData.slice(1)) {
  console.log(await rowdata.locator("td").allInnerTexts());
}
```

## 11. Handle Date Pickers

- Using Fill Method
- [./tests/jQueryDatePicker.spec.ts](./tests/jQueryDatePicker.spec.ts)

```js
await page.fill("#datepicker", "09/04/2025");
```

## 12. Handling Dialogs and Frames/iFrames

_Topics Covered:_

**Dialog**

- By default Playwright dimisses the Alert
  - [./tests/DialogsAlerts.spec.ts](./tests/DialogsAlerts.spec.ts)

```js
//Alert
page.on("dialog", (dialog) => {
  expect(dialog.message()).toContain("I am an alert box!");
  expect(dialog.type()).toBe("alert");
  dialog.accept();
});
```

**iFrames**
[./tests/Frame.spec.ts](./tests/Frame.spec.ts)

## 13. Playwright Browser Contexts, Handle Tabs and Popup Windows

_Topics Covered:_

- Browser Context

  - We can have multiple contexts for multiple users/apps for the same browser
  - A way to operate the multiple independent browser sessions
  - `page` is nothing but Tab, Window, Pop-up

  ```js
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page: Page = await context.newPage();
  await page.goto("https://testautomationpractice.blogspot.com/");
  ```

  - Files
  - [./tests/BrowserContext.spec.ts](./tests/BrowserContext.spec.ts)
  - [./tests/AuthenticationPopup.spec.ts](./tests/AuthenticationPopup.spec.ts)
  - [./tests/Popup.spec.ts](./tests/Popup.spec.ts)
  - [./tests/Tabs.spec.ts](./tests/Tabs.spec.ts)

## 14. Handling Mouse Actions and Scrolling in playwright

- [automaticScrolling.spec.ts](./tests/automaticScrolling.spec.ts)
- [infiniteScrolling.spec.ts](./tests/infiniteScrolling.spec.ts)
- [mouseActions.spec.ts](./tests/mouseActions.spec.ts)

## 15. Handling Keyboard Actions, File Upload and Download in Playwright

- page.keyboard
  - insertText
  - type
  - down
  - press
  - up
  - Control for windows
  - Meta for Mac
- File Uploads
  - `setInputFiles`('path of the files for single file upload')
  - setInputFiles(['file1','file2'])
- File Downloads

```js
const [download] = await Promise.all([
  page.waitForEvent("download"),
  page.locator("#txtDownloadLink").click(),
]);
const downLoadPath = "testFiles/downdloadedfile.txt";
await download.saveAs(downLoadPath);
await page.waitForTimeout(5000);
const fileDownloaded = fs.existsSync(downLoadPath);
expect(fileDownloaded).toBeTruthy();
fs.readFile("testFiles/downdloadedfile.txt", "utf8", (err, data) => {
  console.log("Message from file", data);
});
if (fileDownloaded) {
  fs.unlinkSync(downLoadPath);
}
```

- [DownloadFile.spec.ts](./tests/DownloadFile.spec.ts)
- [FileUpload.spec.ts](./tests/FileUpload.spec.ts)
- [KeyboardActions.spec.ts](./tests/KeyboardActions.spec.ts)
