import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: "tests",

  // Run all tests in parallel.
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: "html",

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: "https://www.saucedemo.com/",

    // Collect trace when retrying the failed test.
    trace: "on-first-retry",

    // Populates context with given storage state.
    storageState: "state.json",
    // Emulates `'prefers-colors-scheme'` media feature.
    colorScheme: "dark",

    // Context geolocation.
    geolocation: { longitude: 12.492507, latitude: 41.889938 },

    // Emulates the user locale.
    locale: "en-GB",

    // Grants specified permissions to the browser context.
    permissions: ["geolocation"],

    // Emulates the user timezone.
    timezoneId: "Europe/Paris",

    // Viewport used for all pages in the context.
    viewport: { width: 1280, height: 720 },

    // Whether to automatically download all the attachments.
    acceptDownloads: false,

    // An object containing additional HTTP headers to be sent with every request.
    extraHTTPHeaders: {
      "X-My-Header": "value",
    },

    // Credentials for HTTP authentication.
    httpCredentials: {
      username: "user",
      password: "pass",
    },

    // Whether to ignore HTTPS errors during navigation.
    ignoreHTTPSErrors: true,

    // Whether to emulate network being offline.
    offline: true,

    // Capture screenshot after each test failure.
    screenshot: "only-on-failure",

    // Record trace only when retrying a test for the first time.
    trace: "on-first-retry",

    // Record video only when retrying a test for the first time.
    video: "on-first-retry",

    // Maximum time each action such as `click()` can take. Defaults to 0 (no limit).
    actionTimeout: 0,

    // Name of the browser that runs tests. For example `chromium`, `firefox`, `webkit`.
    browserName: "chromium",

    // Toggles bypassing Content-Security-Policy.
    bypassCSP: true,

    // Channel to use, for example "chrome", "chrome-beta", "msedge", "msedge-beta".
    channel: "chrome",

    // Run browser in headless mode.
    headless: false,

    // Change the default data-testid attribute.
    testIdAttribute: "pw-test-id",
    launchOptions: {
      slowMo: 50,
    },
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  // Run your local dev server before starting the tests.
  //   webServer: {
  //     command: "npm run start",
  //     url: "http://localhost:3000",
  //     reuseExistingServer: !process.env.CI,
  //   },
});
