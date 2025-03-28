// typeing characters
import {test,expect} from "@playwright/test";
//
test(`typing actions`,async ({page}) => {
    page.goto('https://www.selenium.dev/selenium/web/web-form.html');
    await page.getByLabel('Text input').pressSequentially("hello world",{delay:100});
})

test(`keyboard shortcuts`,async ({page}) => {
    page.goto('https://www.selenium.dev/selenium/web/web-form.html');
    await page.getByLabel('Text input').press('$');
    await page.getByLabel('Text input').press('Shift+A');
    await page.getByLabel('Text input').press('Shift+ArrowLeft');
    
})