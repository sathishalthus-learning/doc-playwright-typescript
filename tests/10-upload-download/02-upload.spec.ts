// uploading files
import {test, expect} from "@playwright/test"
//
test(``,async ({page}) => {
    page.goto('https://the-internet.herokuapp.com/upload');
    const filePromise = page.waitForEvent('filechooser');
    await page.locator('#file-upload').click();
    const filechooser = await filePromise ;
    await page.locator('#file-upload').setInputFiles('tests/10-upload-download/file_1.txt');
    await page.getByRole('button', { name: 'Upload' }).click();

})