// download event

import test from "@playwright/test";
//
test(`download`,async({page})=>{
    await page.goto('https://www.leafground.com/file.xhtml');
    page.on('download',download => download.path().then(console.log ));
    await page.waitForTimeout(3000);

})