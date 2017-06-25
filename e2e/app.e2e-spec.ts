import { PhillstackPage } from './app.po';

describe('phillstack App', () => {
  let page: PhillstackPage;

  beforeEach(() => {
    page = new PhillstackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
