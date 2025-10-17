# Playwright Framework - Typescript

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
