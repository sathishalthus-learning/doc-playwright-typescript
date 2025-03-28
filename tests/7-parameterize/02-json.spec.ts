//  parameterizing using array
import { test,expect } from "@playwright/test";
import creds from "./saucedemo.json";
import fs from "fs";

// using foreach 
creds.forEach(({ username,password, expected }) => {
    // You can also do it with test.describe() or with multiple tests as long the test name is unique.
    test(`testing with array ${username}`, async ({ page }) => {
      await page.goto(`https://www.saucedemo.com/v1/index.html`);
      //
        await page.locator('[data-test="username"]').fill(username);
        await page.locator('[data-test="password"]').fill(password);
        await page.getByRole('button', { name: 'LOGIN' }).click();
        //
        await expect(page.locator('#inventory_filter_container')).toContainText('Products');
    });
  });

// using array
  test(`testing with json ${creds[0].username}`, async ({ page }) => {
    await page.goto(`https://www.saucedemo.com/v1/index.html`);
    //
      await page.locator('[data-test="username"]').fill(creds[0].username);
      await page.locator('[data-test="password"]').fill(creds[0].password);
      await page.getByRole('button', { name: 'LOGIN' }).click();
      //
      await expect(page.locator('#inventory_filter_container')).toContainText(creds[0].expected);
  });

// using fs
const credents = JSON.parse(fs.readFileSync('tests/7-parameterize/saucedemo.json','utf-8'));
for ( let creds of credents){
test(`testing with fs ${creds.username}`, async ({ page }) => {
  await page.goto(`https://www.saucedemo.com/v1/index.html`);
  //
    await page.locator('[data-test="username"]').fill(creds.username);
    await page.locator('[data-test="password"]').fill(creds.password);
    await page.getByRole('button', { name: 'LOGIN' }).click();
    //
    await expect(page.locator('#inventory_filter_container')).toContainText(creds.expected);
});
}
