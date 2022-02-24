import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    page.navigateTo();
    browser.sleep(1000)
    expect(await page.getTitleText()).toEqual("Angular-CRUD-Operations app is running!");
  });

  it('should click add user', async () => {
    await page.clickbutton();
    browser.sleep(1000)
  });

  it('should enter first and last user',async () =>{
    page.inputText('test');
    page.inputText('ln');
  });

  it('should click submit user', async () => {
    await page.clicksubmitbutton();
    browser.sleep(1000)
  });

  it('should click delete user', async () => {
    await page.clickdeletebutton();
    browser.sleep(1000)
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
