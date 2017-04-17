import { browser, element, by } from 'protractor';

export class Angular2AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('h1.header')).getText();
  }

  getItemName(i) {
    return element.all(by.css('.item .content .header')).get(i).getText();
  }
}
