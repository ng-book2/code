import { browser, element, by } from 'protractor';

export class Angular2AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css(`h1`)).getText();
  }

  clickLink(text) {
    return element(by.linkText(text)).click();
  }

}
