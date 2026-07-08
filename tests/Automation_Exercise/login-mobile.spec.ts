import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 12']
});

test('Verify login on iPhone 12', async ({ page }) => {

  await page.goto('https://automationexercise.com');

await page.waitForLoadState('networkidle');

await page.getByRole('button', {
  name: 'Consent'
}).click();

  await page.getByRole('link', {
    name: 'Signup / Login'
  }).click();

  await page.locator('input[data-qa="login-email"]')
    .fill('teddy3377@yopmail.com');

  await page.locator('input[data-qa="login-password"]')
    .fill('Test@Yard19');

  await page.getByRole('button', {
    name: 'Login'
  }).click();

  await expect(
    page.getByText('Logged in as')
  ).toBeVisible();

});