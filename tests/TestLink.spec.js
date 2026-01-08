// @ts-check
import { test, expect } from '@playwright/test';

test('@UI has title', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');

  const links = await page.$$('a');

  for(const link of links){

    const linktext= await link.textContent();
    console.log(linktext)

  }
  
});