import test, { expect } from "@playwright/test";

test('flipkart',async ({page}) => {
    await page.goto("https://www.flipkart.com");
    await page.getByRole('textbox').fill('laptop');
    await page.getByRole('textbox').press('Enter');
    // await page.waitForURL("/.*search?q=laptop.*/");
    await page.locator("//*[(text()='Core i5')]").click();

    // const i5= await page.locator("//li[contains(text(),'Core i5')]").innerText();
    // await expect(i5).toContain("Core i5");
});