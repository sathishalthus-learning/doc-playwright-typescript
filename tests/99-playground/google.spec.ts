import test, { expect } from "@playwright/test";

test('google apps',async ({page}) => {
    await page.goto("https://www.google.com/");
    // const appsFrame = await page.frame("app");
    // const names = await appsFrame?.locator("//span[@data-text]").allTextContents();
    await page.click(`//a[@aria-label="Google apps"]`);
    const frame = page.frameLocator(`//iframe[@name="app"]`);
    await expect(frame.locator(`//div[@aria-label="Google apps"]//li/a/span`).nth(0)).toBeVisible();
    const text= await frame.locator(`//div[@aria-label="Google apps"]//li/a/span`).allTextContents();
    console.log(text);
    text.forEach(ele=> console.log(ele));
          
})