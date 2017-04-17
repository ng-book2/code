import { browser, element, by } from 'protractor';

export class Angular2AppPage {
  navigateTo() {
    return browser.get('/');
  }

  pushButton(text) {
    return element(by.buttonText(text)).click();
  }

  getResultsText(exampleElemName) {
    return element(by.css(`${exampleElemName} pre`)).getText();
  }

  search(text) {
    return element(by.css(`youtube-search input`)).sendKeys(text);
  }

  getSearchText() {
    return element(by.css(`youtube-search`)).getText();
  }
}
