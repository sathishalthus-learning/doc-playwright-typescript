import {test} from "@playwright/test";

test('basic configuration',async ({page}) => {
    await page.goto('/');
});