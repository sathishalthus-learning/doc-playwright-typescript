//
import{test} from "@playwright/test"

// get elements by pw locators
test(`getBy Locators`,async({page})=>{
    await page.goto('https://playwright.dev');

    //getByRole
    await page.getByRole('link',{name:'GET STARTED'}).click();

    //getByLabel
    await page.getByLabel('Home page').click();
    
    //getbytitile
    //getbyalttext
    //getplaceholde
    //getbytestid
    //getby text
})

// css locators
test(`locate by CSS`,async({page})=>{
    await page.goto('https://playwright.dev');
  // by class name
  await page.locator('.getStarted_Sjon').click();
  // by attribute
  await page.locator('[class=navbar__logo]').click();
  // by parant child
  // by pseudo classes -has-text,visible,has,is,nth-match
  await page.locator('a:has-text("API")').click();

})

// xpath locators
test(`locate by XPATH`,async({page})=>{
    await page.goto('https://playwright.dev');
    // by 
    await page.locator('//a[@class="getStarted_Sjon"]').click();
    //
    await page.locator('//div[@class="navbar__items"]').click();

})

// filetering
test(`filetering`,async({page})=>{
    await page.goto('https://playwright.dev');
    // filter by text
    await page.getByRole('link')
    .filter({hasText:'Docs'})
    .click();
    //
    await page.goto('https://playwright.dev');
    // filter by chile
    await page.getByRole('link')
    .filter({has:page.getByText('API')})
    .click();
})

// matching inside locator

// using two locators simultanously


//chaining filters

