import { browser, by, element, promise } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  clickbutton(): Promise<unknown> {
    return element(by.xpath('(//button)[5]')).click() as Promise<unknown>;
  }

  clicksubmitbutton(): Promise<unknown> {
    return element(by.xpath('//*[contains(text(),"Submit")]')).click() as Promise<unknown>;
  }

  inputText(fname: string | number | promise.Promise<string | number>): Promise<unknown> {
    return element(by.name('firstName')).sendKeys(fname) as Promise<unknown>;
  }

  inputlText(lname: string | number | promise.Promise<string | number>): Promise<unknown> {
    return element(by.name('firstName')).sendKeys(lname) as Promise<unknown>;
  }

  clickdeletebutton(): Promise<unknown> {
    return element(by.xpath('//*[contains(text(),"Delete")][last()]')).click() as Promise<unknown>;
  }

}
