import { TruckExpressPage } from './app.po';

describe('truck-express App', () => {
  let page: TruckExpressPage;

  beforeEach(() => {
    page = new TruckExpressPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
