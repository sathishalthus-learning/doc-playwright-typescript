// env reading file
import dotenv from "dotenv";
import {test,expect} from "@playwright/test";
//

dotenv.config({path:'tests/07-parameterize/saucedemo.env'});

const uname = process.env.uname as string
const pword = process.env.pass as string
console.log(uname);


//
test('reading env',async ({page}) => {
    await page.goto('https://www.saucedemo.com/v1/index.html');

        await page.locator('[data-test="username"]').fill(uname);
        await page.locator('[data-test="password"]').fill(pword);
        await page.getByRole('button', { name: 'LOGIN' }).click();
        //
        await expect(page.locator('#inventory_filter_container')).toContainText('Products');
});