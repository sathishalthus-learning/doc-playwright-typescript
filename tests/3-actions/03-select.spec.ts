// select option
import {test,expect} from "@playwright/test";
//
test(`select options`,async ({page}) => {
    page.goto('https://www.selenium.dev/selenium/web/web-form.html');
    await page.getByLabel('Dropdown (select) Open this').selectOption('1');
    await page.getByLabel('Dropdown (select) Open this').selectOption('Two');

})