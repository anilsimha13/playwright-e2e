import { test, Locator, expect } from "@playwright/test";

test("iFrames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  //total number of frames present in the webpage
  const frames = page.frames();
  console.log(frames.length);

  //using page.frame()
  const firstFrame = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });
  if (firstFrame) {
    await firstFrame.locator('[name="mytext1"]').fill("Anil Simha");
  } else {
    console.log("Frame is not present");
  }
  await page.waitForTimeout(5000);
});

test("frameLocator Demo", async ({ page }) => {
  //using frameLocator

  await page.goto("https://ui.vision/demo/webtest/frames/");
  await page
    .frameLocator("[src='frame_1.html']")
    .locator('[name="mytext1"]')
    .fill("OMG");
});

test("child/inner frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  const frame3 = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });
  await frame3?.locator('[name="mytext3"]').fill("Frame3 input filed");

  const totalChildFrame = frame3?.childFrames() ?? [];
  console.log(totalChildFrame.length);
  const radioLocator = totalChildFrame[0]?.getByLabel("I am a human");
  await radioLocator?.check();
  await expect(radioLocator).toBeChecked();
  await page.waitForTimeout(10000);
});
