// csv data
import { test, expect, Page } from "@playwright/test";
import fs from "fs";
import { parse } from "csv-parse/sync";
//
const creds = parse(fs.readFileSync("tests/7-parameterize/saucedemo.csv"), {
  columns: true,
  skip_empty_lines: true,
  skip_records_with_empty_values: true,
});

//

for (let cred of creds) {
  test(`csv as object ${cred.username}`, async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/index.html");

    await page.locator('[data-test="username"]').fill(cred.username);
    await page.locator('[data-test="password"]').fill(cred.password);
    await page.getByRole("button", { name: "LOGIN" }).click();
    //
    await expect(page.locator(".product_label")).toHaveText("Products", {
      timeout: 5000,
    });
  });
}
