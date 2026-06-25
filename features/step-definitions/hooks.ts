import { Before, After, World, setWorldConstructor } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';

class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
}

setWorldConstructor(CustomWorld);

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: false, slowMo: 1000 });
  this.page = await this.browser.newPage();
});

After(async function (this: CustomWorld) {
  await this.page.close();
  await this.browser.close();
});