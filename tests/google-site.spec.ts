import { test, expect } from '@playwright/test';

test('Check google.com page title', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});