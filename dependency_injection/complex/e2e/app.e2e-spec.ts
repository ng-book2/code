import { Angular2AppPage } from './app.po';
import { browser } from 'protractor';

describe('ng-book Simple Dependency Injection Example App', function() {
  let page: Angular2AppPage;

  beforeEach(() => {
    page = new Angular2AppPage();
  });

  it('should make a basic request', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual(`Dependency Injection`);

    page.clickButton(`Invoke API`);
    page.clickButton(`Use Injectors`);

    browser.sleep(0);
    browser.manage().logs().get('browser').then(function(browserLog) {
      let logs = browserLog.map(e => e.message).join(' ');
      expect(logs).toMatch('Large service');
    });

 
  });

});
