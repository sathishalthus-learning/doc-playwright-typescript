// playwright test structure
//
import{test} from "@playwright/test";

// describe
// declares group of tests
// args: callback; title, callback; tiltle, details, callback.
test.describe("describe detailing",
    {annotation:{type:'suite',description:'describe detailing'},tag:['@describe']},
    () => {
    test(`test1`,()=>{
        console.log('suite1 - test 1');
    })
    test(`test2`,()=>{
        console.log('suite1 - test 2');
    })
})

// test.describe.configure
// Run all the tests in the file concurrently using parallel workers.
// args: mode, retries, timeout
// one file one test.configure
test.describe.configure({ mode: 'parallel' });
test('runs in parallel 1', async ({ page }) => {});
test('runs in parallel 2', async ({ page }) => {});

// test.describe.fixme
// will not be executed
test.describe.fixme('broken tests that should be fixed', () => {
    test('example', async ({ page }) => {
      // This test will not run
    });
  });

// test.descibe.only
// focused group executed
test.describe.only('focused group', () => {
    test('in the focused group', async ({ page }) => {
      // This test will run
    });
  });
  test('not in the focused group', async ({ page }) => {
    // This test will not run
  });


// test.describe.skip
// skipped test group - never run
test.describe.skip('skipped group', () => {
    test('example', async ({ page }) => {
      // This test will not run
    });
  });

  