import { Given } from '@cucumber/cucumber';

Given('user is on the Products page', async function () {
  await this.page.goto('https://automationexercise.com/products');
  
  const consentButton = this.page.getByRole('button', { name: 'Consent' });
  if (await consentButton.isVisible({ timeout: 3000 }).catch(() => false)) {
    await consentButton.click();
  }
});