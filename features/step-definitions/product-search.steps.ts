import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('user enters {string} in the search box', async function (productName: string) {
  await this.page.locator('#search_product').fill(productName);
});

When('clicks the Search button', async function () {
  await this.page.locator('#submit_search').click();
});

Then('Blue Top should be displayed in the search results', async function () {
  await expect(
    this.page.getByText('Blue Top').first()
  ).toBeVisible();
});