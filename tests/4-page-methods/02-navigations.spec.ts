// 
import {test,expect} from "@playwright/test";

// page navigations
test(`page navigations`,async({page})=>{
    await page.goto('https://playwright.dev/docs/intro');
    await page.goto('https://playwright.dev/docs/api/class-playwright');
    await page.goBack();
    await page.goForward();
    await page.reload();
    await page.close()
})