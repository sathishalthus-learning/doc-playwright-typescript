// scroll, drag and drop , focus
import {test,expect} from "@playwright/test";
//
test(`focus`,async ({page}) => {
    page.goto('https://www.selenium.dev/selenium/web/web-form.html');
    await page.getByLabel('Text input').focus();
})

test(`drag and drop`,async ({page}) => {
    page.goto('https://www.selenium.dev/selenium/web/web-form.html');
   //element.dragto(element2)
})

test(`scroll`,async ({page}) => {
    page.goto('https://www.selenium.dev/selenium/web/web-form.html');
    await page.getByLabel('Text input').hover();
    await page.getByLabel('Text input').scrollIntoViewIfNeeded();
    await page.mouse.wheel(0, 10);
})