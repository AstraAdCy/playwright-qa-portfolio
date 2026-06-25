import { test, expect } from '@playwright/test';

test('homepage visual comparison', async ({ page }) => {

  await page.goto('https://automationexercise.com');

  await page.getByRole('button', {
  name: 'Consent'
}).click();

  await expect(page).toHaveScreenshot('homepage.png');

});