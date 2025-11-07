import test from "@playwright/test";

test('test for tag 1',{tag:'@tag1'},async ({page}) => {
    await page.goto('/');

});

test("test for tag 2", { tag: "@tag2" }, async ({ page }) => {
  await page.goto("/");
});