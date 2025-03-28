// text input actions
import {test,expect} from "@playwright/test";
//
test(`text inputs`,async ({page}) => {
    page.goto('https://www.selenium.dev/selenium/web/web-form.html');
    await page.getByLabel('Text input').fill('Harry Potter');
    await page.getByLabel('Password').fill("JennyWeasly");
    await page.getByLabel('Textarea').fill("Deathly Hollows");

})