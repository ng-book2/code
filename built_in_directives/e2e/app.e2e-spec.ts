import { Angular2AppPage } from './app.po';

describe('ng-book Built-in Directives App', function() {
  let page: Angular2AppPage;

  beforeEach(() => {
    page = new Angular2AppPage();
  });

  it('should load the page', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual(`Angular 2 Built-in Directives`);
    expect(page.getIntroText()).toContain(`The ng-book team`);
  });

  it('should have tabs', () => {
    page.navigateTo();
    page.clickTab('NgFor');
    page.clickTab('NgSwitch');
    page.clickTab('NgStyle');
    page.clickTab('NgClass');
    page.clickTab('NgNonBindable');
  });
});
