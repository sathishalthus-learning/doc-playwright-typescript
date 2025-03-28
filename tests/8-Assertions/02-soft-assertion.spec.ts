// soft assertions
import {test, expect} from "@playwright/test";
//
test(`soft assertions`,async ({page}) => {
    page.goto('https://www.selenium.dev/selenium/web/dynamic.html');
    await expect.soft(page.locator('#adder')).toContainText('Add a box!');
    await expect.soft(page.getByRole('button', { name: 'Reveal a new input' })).toBeVisible();
    // 
    expect(test.info().errors).toHaveLength(0);
})