import { Angular2AppPage } from './app.po';
import { browser } from 'protractor';

describe('ng-book Hybrid Example App', function() {
  let page: Angular2AppPage;

  beforeEach(() => {
    page = new Angular2AppPage();
  });

  it('should load the page', () => {
    browser.ignoreSynchronization = true;
    page.navigateTo();
    expect(page.getHeaderText()).toMatch(`Interest`);
    page.clickNav('Add');
    page.submitForm();

    // eventually we'll replace this with an expected condition
    browser.sleep(10000).then(function() {
      expect(page.thumbnailText(0)).toMatch(`Steampunk Cat`);
    });
  });

});
