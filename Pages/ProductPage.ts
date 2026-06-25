import { Page, Locator } from '@playwright/test';

export class ProductPage {

  page: Page;

  searchBox: Locator;
  searchButton: Locator;

  constructor(page: Page) {

    this.page = page;

    this.searchBox =
      page.locator('#search_product');

    this.searchButton =
      page.locator('#submit_search');

  }

  async searchProduct(
    productName: string
  ) {

    await this.searchBox.fill(
      productName
    );

    await this.searchButton.click();

  }

}