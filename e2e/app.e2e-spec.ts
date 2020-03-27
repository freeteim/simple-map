import { SimpleMapPage } from './app.po';

describe('simple-map App', () => {
  let page: SimpleMapPage;

  beforeEach(() => {
    page = new SimpleMapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
