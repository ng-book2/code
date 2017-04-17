import { browser, element, by } from 'protractor';

export class Angular2AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getPageHeaderText() {
    return element(by.css(`.page-header h1`)).getText();
  }

  getHeaderText() {
    return element(by.css(`#content h1`)).getText();
  }

  clickLink(text) {
    return element(by.linkText(text)).click();
  }

  login() {
    element(by.css(`input[name='username']`)).sendKeys('user');
    element(by.css(`input[name='password']`)).sendKeys('password');
    element(by.linkText(`Submit`)).click();
  }


}
