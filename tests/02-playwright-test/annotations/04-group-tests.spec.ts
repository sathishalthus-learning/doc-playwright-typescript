import test from "@playwright/test";

test.describe('gropued tests',async () => {
  test('tests 1',async ({page}) => {
      await page.goto("/");
  })
  test("tests 2", async ({ page }) => {
    await page.goto("/");
  });
  test("tests 3", async ({ page }) => {
    await page.goto("/");
  });
});