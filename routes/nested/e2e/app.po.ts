import { browser, element, by } from 'protractor';

export class Angular2AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css(`h1`)).getText();
  }

  getSubheaderText() {
    return element(by.css(`h2`)).getText();
  }

  clickLink(text) {
    return element(by.linkText(text)).click();
  }

  getProductsAreaText() {
    return element(by.css(`.products-area`)).getText();
  }


}
