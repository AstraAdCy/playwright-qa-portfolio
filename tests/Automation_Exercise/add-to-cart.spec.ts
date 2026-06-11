import { test, expect } from '@playwright/test';

test('Verify add to cart', async ({ page }) => {

  await page.goto('https://automationexercise.com');

  await page.getByRole('button', {
    name: 'Consent'
  }).click();

  await page.getByRole('link', {
    name: 'Products'
  }).click();

  await page.getByRole('link', {
    name: 'View Product'
  }).first().click();

  await page.getByRole('button', {
    name: 'Add to cart'
  }).click();

  await page.getByRole('link', {
    name: 'View Cart'
  }).click();

  await expect(
    page.getByText('Blue Top')
  ).toContainText('Blue Top');

});