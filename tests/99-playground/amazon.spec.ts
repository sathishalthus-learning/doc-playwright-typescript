import { test, expect, Page } from "@playwright/test";

test("Search ASUS laptops and print Intel Core i7 models", async ({ page}) => {
    await page.goto('https://www.amazon.in');
    await page.getByPlaceholder("Search Amazon.in").fill('laptop');
    await page.getByPlaceholder("Search Amazon.in").press('Enter');
    await page.waitForLoadState('domcontentloaded');
});
