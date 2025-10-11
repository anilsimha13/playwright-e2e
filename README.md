# Playwright Framework - Typescript

## Interview POV

1. ### What is Playwright?

   - Playwright is an open-source tool by Microsoft for automating web browser testing. <br>
   - Playwright is a framework for automating web browsers, enabling end-to-end testing
     <br>
   - Beyound browser testing, Playwright offers a dedicated API for testing and interacting with Web APIs
   - Released in 2020
   - Playwright is an Open-source Node.js library

2. ### Major Features

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

3. ### Javascript vs Typescript

   | Feature        | JavaScript              | TypeScript                         |
   | -------------- | ----------------------- | ---------------------------------- |
   | Type System    | Dynamic                 | Static (with type annotations)     |
   | Compilation    | Interpreted             | Compiled to JavaScript             |
   | Error Checking | Runtime                 | Compile-time                       |
   | IDE Support    | Good                    | Excellent (with type info)         |
   | Learning Curve | Easier                  | Slightly harder (types, config)    |
   | Popularity     | Very High               | Growing fast                       |
   | Use Case       | Web, Node.js, scripting | Large apps, maintainable codebases |

4. ### Playwright Kick start

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
