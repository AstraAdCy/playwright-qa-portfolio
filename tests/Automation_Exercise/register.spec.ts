import { test, expect } from '@playwright/test';

test('Verify user registration', async ({ page }) => {

  await page.goto('https://automationexercise.com');

await page.waitForLoadState('networkidle');

  // Accept consent popup
  await page.getByRole('button', { name: 'Consent' }).click();

  // Open Signup/Login page
  await page.getByRole('link', { name: 'Signup / Login' }).click();

  // New User Signup section
  await page.getByPlaceholder('Name').fill('Teddy');

  await page.locator('input[data-qa="signup-email"]')
    .fill('teddy3378@yopmail.com');

  await page.getByRole('button', { name: 'Signup' }).click();

  // Account Information

  await page.locator('#id_gender1').check();

  await page.locator('#password')
    .fill('Test@Yard19');

  await page.locator('#days')
    .selectOption('10');

  await page.locator('#months')
    .selectOption('5');

  await page.locator('#years')
    .selectOption('1998');

  await page.locator('#newsletter').check();

  await page.locator('#optin').check();

  // Address Information

  await page.locator('#first_name')
    .fill('Teddy');

  await page.locator('#last_name')
    .fill('Tester');

  await page.locator('#company')
    .fill('QA Portfolio');

  await page.locator('#address1')
    .fill('Bangalore');

  await page.locator('#address2')
    .fill('Karnataka');

  await page.locator('#country')
    .selectOption('India');

  await page.locator('#state')
    .fill('Karnataka');

  await page.locator('#city')
    .fill('Bangalore');

  await page.locator('#zipcode')
    .fill('560001');

  await page.locator('#mobile_number')
    .fill('9876543210');

  // Create Account

  await page.getByRole('button', {
    name: 'Create Account'
  }).click();

  // Verification

  await expect(
    page.getByText('Account Created!')
  ).toBeVisible();

});