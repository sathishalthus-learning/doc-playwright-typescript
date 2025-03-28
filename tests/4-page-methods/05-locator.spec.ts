//
import test from "@playwright/test";
//
test(`tst`,async({page})=>{
    page.goto("https://playwright.dev/");

    // locator(selector)
    const getStarted = page.locator('.getStarted_Sjon');
    await getStarted.click();
    await page.waitForTimeout(3000);

    // locator(selector,options)
    await page.locator('.navbar__brand',{hasText:'Playwright'}).click();
    await page.waitForTimeout(3000);



})