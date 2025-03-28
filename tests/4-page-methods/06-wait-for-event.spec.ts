//
import test from "@playwright/test";
//
test(`simple wait for event`,async ({page}) => {
    page.goto('https://the-internet.herokuapp.com/download');
    // dowload
    const downloadPromise = page.waitForEvent('download');
    await page.getByText('puppy.png').click();
    const download = await downloadPromise;

    //console
    // dialog, popup
    // domcontentloaded, load, pageerror, close, crash
    // filechooser
    // frameattahced, framedetached, framenavigated
    // request, response, requestfailed, websocket, requestfinished
    // worker


})

// DOWNLOAD
test(`download`,async ({page}) => {
    page.goto('https://the-internet.herokuapp.com/download');
    // dowload
    const downloadPromise = page.waitForEvent('download',{});
    await page.getByText('puppy.png').click();
    const download = await downloadPromise;
})


