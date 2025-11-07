import test from "@playwright/test";

test('test annotation sample',{annotation:{type:'issue',description:'annotation description'}},async ({page}) => {
    await page.goto("/");
})