// downloading file
import {test, expect} from "@playwright/test";
//
test(``,async ({page}) => {
    page.goto('https://www.selenium.dev/selenium/web/downloads/download.html');
    //
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'File 1' }).click();
    const download = await downloadPromise;
    //
    await download.saveAs("/Downloads"+download.suggestedFilename());
    
})