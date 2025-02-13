import { test, expect } from '@playwright/test';

test.only("Learning selectors", async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/clickMe.html')

  // 1. Select by Id
  await page.locator('#clickButton').click();

  // 2. Select by Class
  await page.locator('.button-style').click();

  // 3. Select by Tag
  await page.locator('button').click();

  // 5. Select by Role
  await page.locator('button[role="button"]').click();

  // 6. Select by Attribute
  await page.locator('[data-action="increment"]').click();

  // 7. Select by Css
  await page.locator('div[data-counter="number"]').click();

  // 8. Select by Text
  await page.locator('text=Click me').click();

  await page.pause();


});