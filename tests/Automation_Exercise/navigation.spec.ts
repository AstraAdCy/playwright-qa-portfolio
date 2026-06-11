import { test, expect } from '@playwright/test';

test('Verify navigation between pages', async ({ page }) => {

  // Open website
  await page.goto('https://automationexercise.com');

  // Accept consent popup
  await page.getByRole('button', { name: 'Consent' }).click();

  // Navigate to Products
  await page.getByRole('link', { name: 'Products' }).click();

  // Verify Products page
  await expect(page).toHaveURL(/products/);
  await expect(page.getByText('All Products')).toBeVisible();

  // Navigate to Cart
  await page.getByRole('link', { name: 'Cart' }).click();

  // Verify Cart page
  await expect(page).toHaveURL(/view_cart/);
  await expect(page.getByText('Shopping Cart')).toBeVisible();

  // Navigate to Signup / Login
  await page.getByRole('link', { name: 'Signup / Login' }).click();

  // Verify Login page
  await expect(page).toHaveURL(/login/);
  await expect(
    page.getByText('Login to your account')
  ).toBeVisible();

});