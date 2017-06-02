import { HomeCenterFrontendPage } from './app.po';

describe('home-center-frontend App', () => {
  let page: HomeCenterFrontendPage;

  beforeEach(() => {
    page = new HomeCenterFrontendPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
