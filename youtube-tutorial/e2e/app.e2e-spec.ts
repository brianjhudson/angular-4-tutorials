import { YoutubeTutorialPage } from './app.po';

describe('youtube-tutorial App', () => {
  let page: YoutubeTutorialPage;

  beforeEach(() => {
    page = new YoutubeTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
