// generic assertions
import {test, expect} from "@playwright/test"

// web first assertinos
// await should be used.
test(`auto retrying assertions`,async ({page}) => {
    page.goto('https://www.selenium.dev/selenium/web/web-form.html');
    await expect(page.locator('.display-6')).toBeVisible();
})

// await is not rquired
test(`non retrying assertions`,async ({page}) => {
    page.goto('https://www.selenium.dev/selenium/web/web-form.html');
    await expect(page.locator('.display-6')).toBeVisible();
    expect(page.getByRole('heading').allInnerTexts).toBe('Web form');
})

// not
test(`negative assertions`,async ({page}) => {
    page.goto('https://www.selenium.dev/selenium/web/web-form.html');
    await expect(page.locator('.display-6')).not.toBeVisible();
    expect(page.getByRole('heading').allInnerTexts).not.toBe('Webform');
})