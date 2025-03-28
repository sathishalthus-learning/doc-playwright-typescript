// check boxes and radio buttons
import {test, expect} from "@playwright/test";
//
test(`check boxes`,async ({page}) => {
    page.goto('https://www.selenium.dev/selenium/web/web-form.html');
    await page.getByLabel('Default checkbox').check();
    await page.getByLabel('Checked checkbox').uncheck();
    await expect (page.getByLabel('Default checkbox')).toBeChecked();
})

test(`radio buttons`,async ({page}) => {
    page.goto('https://www.selenium.dev/selenium/web/web-form.html');
    await page.getByLabel('Default radio').check();
    await page.getByLabel('Checked radio').check();
    await expect(page.getByLabel('Checked radio')).toBeChecked();
})