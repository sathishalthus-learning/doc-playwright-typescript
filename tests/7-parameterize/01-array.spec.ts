//  parameterizing using array
import { expect } from "@playwright/test";
import test from "@playwright/test";
[
    { username: 'standard_user',password:'secret_sauce', expected: 'Products' },
    { username: 'problem_user',password:'secret_sauce', expected: 'Products' },
  ].forEach(({ username,password, expected }) => {
    // You can also do it with test.describe() or with multiple tests as long the test name is unique.
    test(`testing with ${username}`, async ({ page }) => {
      await page.goto(`https://www.saucedemo.com/v1/index.html`);
      //
        await page.locator('[data-test="username"]').fill(username);
        await page.locator('[data-test="password"]').fill(password);
        await page.getByRole('button', { name: 'LOGIN' }).click();
        //
        await expect(page.locator('#inventory_filter_container')).toContainText('Products');
    });
  });
