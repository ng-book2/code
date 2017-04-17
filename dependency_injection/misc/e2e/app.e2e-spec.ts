import { Angular2AppPage } from './app.po';
import { browser } from 'protractor';

describe('ng-book Misc Dependency Injection Example App', function() {
  let page: Angular2AppPage;

  beforeEach(() => {
    page = new Angular2AppPage();
  });

  it('should make a basic request', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual(`Dependency Injection`);
    page.clickButton(`Get Value`);

    browser.sleep(0);
    browser.manage().logs().get('browser').then(function(browserLog) {
      let logs = browserLog.map(e => e.message).join(' ');
      expect(logs).toMatch('SimpleService returned');
      expect(logs).toMatch('ParamService returned');
    });
  });

});
