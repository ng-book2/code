import { Angular2RedditPage } from './app.po';

describe('angular2-reddit App', function() {
  let page: Angular2RedditPage;

  beforeEach(() => {
    page = new Angular2RedditPage();
  });

  it('should have the header', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Angular 2 Simple Reddit');
  });

  it('should allow voting', () => {
    page.navigateTo();
    expect(page.getVoteScore(0)).toEqual('3');
    page.upvote(0);
    page.upvote(0);
    expect(page.getVoteScore(0)).toEqual('5');
  });

  it('should add a new link', () => {
    page.navigateTo();
    page.addLink('ng-book 2', 'https://ng-book.com');
    expect(page.getVoteScore(3)).toEqual('0');
  });
 
  

});
