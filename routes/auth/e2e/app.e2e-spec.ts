import 'jasmine';
import { Angular2AppPage } from './app.po';

describe('ng-book Auth Routing Example App', function() {
  let page: Angular2AppPage;

  beforeEach(() => {
    page = new Angular2AppPage();
  });

  it('should make a basic request', () => {
    page.navigateTo();
    expect(page.getPageHeaderText()).toMatch(`Router Sample`);
    
    page.clickLink(`Home`);
    expect(page.getHeaderText()).toMatch(`Welcome!`);

    page.clickLink(`About`);
    expect(page.getHeaderText()).toMatch(`About`);

    page.clickLink(`Contact Us`);
    expect(page.getHeaderText()).toMatch(`Contact Us`);

    // try protected while logged out
    page.clickLink(`Protected`);
    expect(page.getHeaderText()).toMatch(`Contact Us`); // didnt change

    page.clickLink(`Home`);
    page.login();

    page.clickLink(`Protected`);
    expect(page.getHeaderText()).toMatch(`Protected content`);
  });

});
