import { test, expect } from '@playwright/test';

test('To Verify signup/login page loading', async ({ page }) => {
  await page.goto('https://automationexercise.com');

await page.waitForLoadState('networkidle');

await page.getByRole('button', {
  name: 'Consent'
}).click();
  await page.getByRole('link', {name: 'Signup / Login'}).click();
  await expect(page).toHaveURL('https://automationexercise.com/login');
  await expect(page.getByText('Login to your account')).toBeVisible();
});