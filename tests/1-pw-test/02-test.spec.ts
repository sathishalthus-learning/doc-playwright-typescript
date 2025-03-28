// test options
import {test} from "@playwright/test";
//
//test
// declares a test
// args: title,body and title details body
test(`test title`,()=>{
    console.log('test title');
});

// tags, annotations
test('basic test', {
  annotation: {
    type: 'issue',
    description: 'https://github.com/microsoft/playwright/issues/23180',
  },
}, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // ...
});

// test.info
// informs about current test

// test.only
// sets focused test, runs only 

// test.skip
// skips test

// test.fail
// fails the test and 

// test.fixme
// will not run, marked as no execution

// test.slow
// given triple timeout

//test.setTimeout
// sets timeout

//test.step
// adds test step reported in report

// test.use
// adds test options


