import { browser, element, by } from 'protractor';

export class Angular2AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css(`h1`)).getText();
  }

  searchFor(text) {
    element(by.css(`search input`)).sendKeys(text);
    return element(by.buttonText(`Search`)).click();
  }

  clickLinkText(text) {
    return element(by.linkText(text)).click();
  }

  getTrackHeaderText() {
    return element(by.css(`thetrack h1`)).getText();
  }

  getArtistHeaderText() {
    return element(by.css(`artist h1`)).getText();
  }

  getAlbumHeaderText() {
    return element(by.css(`album h1`)).getText();
  }
}
