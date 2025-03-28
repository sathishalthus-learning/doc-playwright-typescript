// dialog
import test from "@playwright/test";
//
test(`simple alert`,async({page})=>{
    await page.goto('https://www.leafground.com/alert.xhtml');
    // simple alert
    page.on('dialog', async dialog =>{
        dialog.accept();
    });
    await page.locator('//button[@id="j_idt88:j_idt91"]').click();

})

test(`confirm alert`,async({page})=>{
    await page.goto('https://www.leafground.com/alert.xhtml');
    // confirm alert
    page.on('dialog', async dialog =>{
        dialog.dismiss();
    });
    await page.locator('//button[@id="j_idt88:j_idt93"]').click();

})

test(`prompt alert`,async({page})=>{
    await page.goto('https://www.leafground.com/alert.xhtml');
    // modal alert
    page.on('dialog', async dialog =>{
        console.log(dialog.type());
        console.log(dialog.message());
        dialog.accept("hello");
        
    });
    await page.locator('//button[@id="j_idt88:j_idt93"]').click();

})
