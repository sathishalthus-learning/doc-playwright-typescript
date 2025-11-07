import test from "@playwright/test";

test(' test 1 runs',async ({page}) => {
    await page.goto("/");
})
test("test 2 runs", async ({ page }) => {
  await page.goto("/");
});
test.skip("test 3 skipped", async ({ page }) => {
  await page.goto("/");
});