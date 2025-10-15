import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ContactPage extends BasePage {
  readonly privacyPolicy: Locator;

  constructor(page: Page) {
    super(page);
    this.privacyPolicy = page.locator('input[name="use_label_element"]');
  }

  async selectPrivacyPolicy() {
    this.privacyPolicy.check();
  }

}