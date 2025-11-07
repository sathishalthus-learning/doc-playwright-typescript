import test from "@playwright/test";

test("example test", async ({ page, browser }) => {
  test.info().annotations.push({
    type: "browser version",
    description: browser.version(),
  });

  await page.goto('/');
});
