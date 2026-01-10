// @ts-check
import { test, expect } from '@playwright/test';

test(' has title', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');

  await page.click('id=signin2');

  //await page.fill('#sign-username',)
//  await page.locator('#sign-username').fill('pavanol');
  await page.fill('#sign-username', 'pavanol')

  //await page.locator('#sign-password').fill('test@123');
  await page.fill('#sign-password','test@123');

  await page.click("//button[normalize-space()='Log in']");


  //await page.fill('#sign-password',)

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});