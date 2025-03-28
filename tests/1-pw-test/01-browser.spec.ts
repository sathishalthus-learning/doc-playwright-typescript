import { test} from '@playwright/test';
import { firefox, chromium } from 'playwright';
// Or 'chromium' or 'webkit'.

test('browser test',async ()=>{
  const browser = await firefox.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  // browserType
//   console.log(browser.browserType());
  // contexts
//   console.log(browser.contexts());  
  // close
  await browser.close();
});

