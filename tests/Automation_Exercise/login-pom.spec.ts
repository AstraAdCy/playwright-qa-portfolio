import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/LoginPage';

test('Verify user login using POM', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await page.goto('https://automationexercise.com');

await page.waitForLoadState('networkidle');

await page.getByRole('button', {
  name: 'Consent'
}).click();

  await page.getByRole('link', {
    name: 'Signup / Login'
  }).click();

  await loginPage.login(
    'teddy3378@yopmail.com',
    'Test@Yard19'
  );

  await expect(
    page.getByText('Logged in as')
  ).toBeVisible();

});