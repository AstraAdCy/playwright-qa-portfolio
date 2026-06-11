import { test, expect } from '@playwright/test';

test('Verify product search', async ({ page }) => {

  await page.goto('https://automationexercise.com');

  await page.getByRole('button', {
    name: 'Consent'
  }).click();

  await page.getByRole('link', {
    name: 'Products'
  }).click();

  await page.locator('#search_product')
    .fill('Blue Top');

  await page.locator('#submit_search')
    .click();

  await expect(
    page.getByText('Blue Top').first()
  ).toBeVisible();

});