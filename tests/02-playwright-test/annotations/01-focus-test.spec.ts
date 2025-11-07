import test from "@playwright/test";

test.only('runs only tests 1',async ({page}) => {
    await page.goto("/");
})
test.only("runs only tests 2", async ({ page }) => {
  await page.goto("/");
});
test("runs only tests 3", async ({ page }) => {
  await page.goto("/");
});