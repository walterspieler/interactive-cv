import { InteractiveCvPage } from './app.po';

describe('interactive-cv App', () => {
  let page: InteractiveCvPage;

  beforeEach(() => {
    page = new InteractiveCvPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
