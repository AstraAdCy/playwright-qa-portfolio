import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('user is on the products page', async function () {
  await this.page.goto('https://automationexercise.com/products');
});

When('user searches for {string}', async function (productName) {
  await this.page.locator('#search_product').fill(productName);

  await this.page.locator('#submit_search').click();
});

Then('matching products should be displayed', async function () {
  await expect(
    this.page.getByText('Blue Top')
  ).toBeVisible();
});