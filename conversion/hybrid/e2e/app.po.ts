import { browser, element, by } from 'protractor';

export class Angular2AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('h1')).getText();
  }

  clickNav(text) {
    return element(by.cssContainingText('.navLinks a', text)).click();
  }

  submitForm() {
    return element(by.buttonText('Submit')).click();
  }

  thumbnailText(i) {
    return element.all(by.css('.thumbnail')).get(i).getText();
  }

}
