import { NgStorePage } from './app.po';

describe('ng-store App', () => {
  let page: NgStorePage;

  beforeEach(() => {
    page = new NgStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
