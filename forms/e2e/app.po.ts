import { browser, element, by } from 'protractor';

export class Angular2AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('h1.header')).getText();
  }

  getCardHeaderText(i) {
    return element.all(by.css('.segment .header')).get(i).getText();
  }

}
