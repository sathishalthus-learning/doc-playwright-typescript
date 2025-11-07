import test from "@playwright/test";

test(' test 1 runs',async ({page}) => {
    await page.goto("/");
})
test("test 2 runs", async ({ page }) => {
  await page.goto("/");
});
test("test 3 skipped", async ({ page, browserName }) => {
  test.skip(browserName==='chromium','still working');
  await page.goto("/");
});