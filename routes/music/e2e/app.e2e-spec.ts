import { Angular2AppPage } from './app.po';

describe('ng-book Routes Music App', function() {
  let page: Angular2AppPage;

  beforeEach(() => {
    page = new Angular2AppPage();
  });

  it('should make a basic request', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toMatch(`Sportify`);
    page.searchFor(`Miles Davis Kind of Blue`);

    // track
    page.clickLinkText(`So What`);
    expect(page.getTrackHeaderText()).toMatch(`So What`);
    page.clickLinkText(`Back`);

    // artist
    page.clickLinkText(`Miles Davis`);
    expect(page.getArtistHeaderText()).toMatch(`Miles Davis`);
    page.clickLinkText(`Back`);

    // album 
    page.clickLinkText(`Kind Of Blue`);
    expect(page.getAlbumHeaderText()).toMatch(`Kind Of Blue`);
    page.clickLinkText(`Back`);
  });

});
