import { Page, Locator } from '@playwright/test';

export class HomePage {

  page: Page;

  signupLoginLink: Locator;
  productsLink: Locator;

  constructor(page: Page) {

    this.page = page;

    this.signupLoginLink =
      page.getByRole('link', {
        name: 'Signup / Login'
      });

    this.productsLink =
      page.getByRole('link', {
        name: 'Products'
      });

  }

  async open() {

    await this.page.goto(
      'https://automationexercise.com'
    );

  }

  async goToLogin() {

    await this.signupLoginLink.click();

  }

  async goToProducts() {

    await this.productsLink.click();

  }

}