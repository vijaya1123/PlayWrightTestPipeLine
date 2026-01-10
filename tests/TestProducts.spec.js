// @ts-check
import { test, expect } from '@playwright/test';

test(' @UI has title', async ({ page }) => {
 await page.goto('https://demoblaze.com/index.html');

// page.waitForSelector("//div[@id='tbodyid']//h4/a")

 const products =  await page.$$("//div[@id='tbodyid']//h4/a");

 for(const product of products){

    const productName = await product.textContent();
    console.log(productName);
 }


});
