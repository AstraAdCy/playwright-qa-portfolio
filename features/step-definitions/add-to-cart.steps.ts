import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

// Known flaky issue: third-party ad sometimes overlaps Add to Cart button on automationexercise.com

When('user adds {string} to the cart', async function (productName: string) {
  const product = this.page.locator('.product-image-wrapper').first();
  
  await product.scrollIntoViewIfNeeded();
  await product.hover();

  await this.page
    .locator('.product-overlay')
    .first()
    .getByRole('button', { name: 'Add to cart' })
    .click({ force: true, timeout: 10000 });
});

When('navigates to the Cart page', async function () {
  await this.page
    .getByRole('link', { name: 'View Cart' })
    .click();
});

Then('Blue Top should be displayed in the cart', async function () {
  await expect(
    this.page.getByText('Blue Top')
  ).toBeVisible();
});