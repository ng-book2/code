import { Angular2AppPage } from './app.po';

describe('ng-book HTTP Example App', function() {
  let page: Angular2AppPage;

  beforeEach(() => {
    page = new Angular2AppPage();
  });

  it('should make a basic request', () => {
    page.navigateTo();
    
    expect(page.getResultsText('simple-http')).toEqual(``);
    page.pushButton('Make Request');
    expect(page.getResultsText('simple-http')).toMatch(`userId`);
  });

  it('should make more requests', () => {
    page.navigateTo();
    
    expect(page.getResultsText('more-http')).toEqual(``);
    page.pushButton('Make Post');
    expect(page.getResultsText('more-http')).toMatch(`id`);
    page.pushButton('Make Delete');
    expect(page.getResultsText('more-http')).toMatch(`{}`);
    page.pushButton('Make Headers');
    expect(page.getResultsText('more-http')).toMatch(`body`);
  });

  it('should search Youtube', () => {
    page.navigateTo();

    page.search('cats');
    expect(page.getSearchText()).toMatch(`Funny Cats`);
  });

});
