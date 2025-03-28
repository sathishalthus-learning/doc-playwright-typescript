// frame related methods
import test from "@playwright/test";

//
test(`working with frames`,async({page})=>{
    await page.goto('https://leafground.com/frame.xhtml');

    //frame()
    // returns void or frame based on url or locator
    const frameOne = page.frame({url:'https://leafground.com/default.xhtml'});
    await frameOne?.getByRole('button',{name:'Click Me'}).click();
    const frameTwo = page.frame({url:'https://leafground.com/nested.xhtml'});
    await frameTwo?.getByRole('button',{name:'Count Frames'}).click();

    // frameLocator
    // returns frame based on selector
    const frameThree = page.frameLocator('(//iframe)[2]');
    await frameThree.getByText('Count Frames').click();

    // frames()
    // returns all frames
    console.log(page.frames().length);
    
})