import { Formula1StatsPage } from './app.po';

describe('formula1-stats App', () => {
  let page: Formula1StatsPage;

  beforeEach(() => {
    page = new Formula1StatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
