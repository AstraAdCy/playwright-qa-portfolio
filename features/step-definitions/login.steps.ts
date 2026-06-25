import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given(
  'user is on login page',
  async function () {

    await this.page.goto(
      'https://automationexercise.com/login'
    );

  }
);

When(
  'user enters valid credentials',
  async function () {

    await this.page
      .locator('input[data-qa="login-email"]')
      .fill('teddy3377@yopmail.com');

    await this.page
      .locator('input[data-qa="login-password"]')
      .fill('Test@Yard19');

    await this.page
      .getByRole('button', { name: 'Login' })
      .click();

  }
);

Then(
  'user should be logged in successfully',
  async function () {

    await expect(
      this.page.getByText('Logged in as')
    ).toBeVisible();

  }
);