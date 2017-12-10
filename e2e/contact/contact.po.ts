import { browser, by, element } from 'protractor';

export class Angular2ShopPage {
  navigateTo() {
    return browser.get('/contact');
  }

  getParagraphText() {
    return element(by.css('ag-root h1')).getText();
  }
}
