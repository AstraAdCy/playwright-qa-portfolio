import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('user is on the products page', async function () {
  await this.page.goto('https://automationexercise.com/products');
});

When('user adds {string} to the cart', async function () {

  await this.page
    .locator('.product-overlay')
    .first()
    .click();

  await this.page
    .getByRole('button', { name: 'Add to cart' })
    .click();
});

Then('product should appear in the cart', async function () {

  await this.page
    .getByRole('link', { name: 'View Cart' })
    .click();

  await expect(
    this.page.getByText('Blue Top')
  ).toBeVisible();
});