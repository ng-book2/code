import { browser, element, by } from 'protractor';

export class Angular2RedditPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('h1.header')).getText();
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getVoteScore(i) {
    return element.all(by.css('.value')).get(i).getText();
  }

  upvote(i) {
    return element.all(by.cssContainingText('.item a', 'upvote')).get(i).click();
  }

  addLink(title, url) {
    element(by.css('input[name=title]')).sendKeys(title);
    element(by.css('input[name=link]')).sendKeys(url);
    return element(by.buttonText('Submit link')).click();
  }
}
