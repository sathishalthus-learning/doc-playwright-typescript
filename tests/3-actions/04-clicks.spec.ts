// mouse clicks
import {test, expect} from "@playwright/test";
//
test(`mouse clicks`,async ({page}) => {
    page.goto('https://www.selenium.dev/selenium/web/web-form.html');
    await page.locator('body').click();
    await page.locator('body').click({modifiers: ['ControlOrMeta']});
    await page.locator('body').click({button: 'right' });
    await page.locator('body').click({ modifiers: ['Shift']});
    await page.locator('body').click({ modifiers: ['Alt']});
})