// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

//locating single ele   await page.locator('').click();  // await page.click('locator') //

//input box  await page.locator('locator').fill('value')
//await page.locator('').type('value')
// await page.fill('locator', 'value')
//await page.type('locator', 'value')