import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('user is on the login page', async function () {
  await this.page.goto('https://automationexercise.com/login');
  
  const consentButton = this.page.getByRole('button', { name: 'Consent' });
  if (await consentButton.isVisible({ timeout: 3000 }).catch(() => false)) {
    await consentButton.click();
  }
});

When('user enters a valid email and password', async function () {
  await this.page
    .locator('input[data-qa="login-email"]')
    .fill('teddy3378@yopmail.com');

  await this.page
    .locator('input[data-qa="login-password"]')
    .fill('Test@Yard19');
});

When('user enters an invalid email and password', async function () {
  await this.page
    .locator('input[data-qa="login-email"]')
    .fill('wronguser@yopmail.com');

  await this.page
    .locator('input[data-qa="login-password"]')
    .fill('WrongPassword123');
});

When('clicks the Login button', async function () {
  await this.page
    .getByRole('button', { name: 'Login' })
    .click();
});

Then('user should be logged in successfully', async function () {
  await expect(
    this.page.getByText('Logged in as')
  ).toBeVisible();
});

Then('an error message should be displayed', async function () {
  await expect(
    this.page.getByText('Your email or password is incorrect!')
  ).toBeVisible();
});