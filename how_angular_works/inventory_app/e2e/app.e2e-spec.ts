import { Angular2AppPage } from './app.po';

describe('angular2-inventory App', function() {
  let page: Angular2AppPage;

  beforeEach(() => {
    page = new Angular2AppPage();
  });

  it('should load the page', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual(`Angular 2 Inventory App`);
  });

  it('should have a blue jacket on the page', () => {
    page.navigateTo();
    expect(page.getItemName(1)).toEqual(`Blue Jacket`);
  });
});
