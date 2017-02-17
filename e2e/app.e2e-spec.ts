import { Ng2RouterExamplePage } from './app.po';

describe('ng2-router-example App', function() {
  let page: Ng2RouterExamplePage;

  beforeEach(() => {
    page = new Ng2RouterExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
