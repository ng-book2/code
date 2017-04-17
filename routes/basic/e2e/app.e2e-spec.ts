import { Angular2AppPage } from './app.po';

describe('ng-book Basic Routing Example App', function() {
  let page: Angular2AppPage;

  beforeEach(() => {
    page = new Angular2AppPage();
  });

  it('should make a basic request', () => {
    page.navigateTo();
    
    page.clickLink(`Home`);
    expect(page.getHeaderText()).toMatch(`Welcome!`);

    page.clickLink(`About`);
    expect(page.getHeaderText()).toMatch(`About`);

    page.clickLink(`Contact Us`);
    expect(page.getHeaderText()).toMatch(`Contact Us`);
  });

});
