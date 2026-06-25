import { Page, Locator } from '@playwright/test';

export class LoginPage {

  page: Page;

  emailInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;

  constructor(page: Page) {

    this.page = page;

    this.emailInput = page.locator(
      'input[data-qa="login-email"]'
    );

    this.passwordInput = page.locator(
      'input[data-qa="login-password"]'
    );

    this.loginButton = page.getByRole('button', {
      name: 'Login'
    });

  }

  async login(email: string, password: string) {

    await this.emailInput.fill(email);

    await this.passwordInput.fill(password);

    await this.loginButton.click();

  }

}