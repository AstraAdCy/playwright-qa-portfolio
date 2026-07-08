import { test, expect } from '@playwright/test';

test('Verify user login', async ({ page }) => {

  await page.goto('https://automationexercise.com');

await page.waitForLoadState('networkidle');

await page.getByRole('button', {
  name: 'Consent'
}).click();

  await page.getByRole('link', {
    name: 'Signup / Login'
  }).click();

  await page.locator('input[data-qa="login-email"]')
    .fill('teddy3378@yopmail.com');

  await page.locator('input[data-qa="login-password"]')
    .fill('Test@Yard19');

  await page.getByRole('button', {
    name: 'Login'
  }).click();

  await expect(
    page.getByText('Logged in as Teddy')
  ).toBeVisible();

})