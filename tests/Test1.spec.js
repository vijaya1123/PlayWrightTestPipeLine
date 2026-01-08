// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.redbus.in');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);

  await page.locator('.inputAndSwapWrapper___e7dc96').fill('Australia');
});


