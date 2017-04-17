import 'jasmine';
import { Angular2AppPage } from './app.po';

describe('ng-book Nested Routing Example App', function() {
  let page: Angular2AppPage;

  beforeEach(() => {
    page = new Angular2AppPage();
  });

  it('should make a basic request', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toMatch(`Router Sample`);
    
    page.clickLink(`Home`);
    expect(page.getSubheaderText()).toMatch(`Welcome!`);

    page.clickLink(`Products`);
    expect(page.getSubheaderText()).toMatch(`Products`);

    page.clickLink(`Main`);
    expect(page.getSubheaderText()).toMatch(`Products`);

    page.clickLink(`Interest`);
    expect(page.getProductsAreaText()).toMatch(`interest`);

    page.clickLink(`Sportify`);
    expect(page.getProductsAreaText()).toMatch(`sportify`);
  });

});
