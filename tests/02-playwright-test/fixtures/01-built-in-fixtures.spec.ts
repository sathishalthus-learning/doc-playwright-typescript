import test from "@playwright/test";

test('built in fixtures',async ({page,context,browser,browserName, request}) => {
    // to saucedemo.com
    //page.goto('/');
    console.log(browser.browserType);
    console.log(context.browser);
    console.log(browserName);
    console.log(request.head);

})