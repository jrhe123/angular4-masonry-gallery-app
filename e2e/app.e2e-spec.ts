import { Ng4GalleryPage } from './app.po';

describe('ng4-gallery App', () => {
  let page: Ng4GalleryPage;

  beforeEach(() => {
    page = new Ng4GalleryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
