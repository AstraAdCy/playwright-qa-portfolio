import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/LoginPage';

test('Verify user login using POM', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await page.goto('https://automationexercise.com');

  await page.getByRole('button', {
    name: 'Consent'
  }).click();

  await page.getByRole('link', {
    name: 'Signup / Login'
  }).click();

  await loginPage.login(
    'teddy33@yopmail.com',
    'Test@Yard199'
  );

  await expect(
    page.getByText('Your email or password is incorrect!')
  ).toBeVisible();

});