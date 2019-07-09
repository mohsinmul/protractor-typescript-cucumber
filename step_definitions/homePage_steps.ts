import { Given, Then, When } from "cucumber";
import { browser } from "protractor";
import {HomePage} from '../page_objects/homePage';
import chai from 'chai';
import { async } from "q";
let expect=chai.expect;

let homePage= new HomePage();

Given('I navigate to WayAutomation homepage', async ()=> {
   await browser.get(browser.baseUrl);
   //await browser.sleep(2000);
  });

  Then('I could find Search box is displayed', async ()=> {
    console.log("Search box test");
    expect(await homePage.getSearchBox().isDisplayed()).to.equal(true);
  });

  Then('Add User link is displayed on Page', async ()=> {
    expect(await homePage.getAddUserLink().isDisplayed()).to.be.true;//equal(true);
    console.log("Add User link text : "+await homePage.getAddUserLink().getText());
  });

  When('I clicked on Add User link', async ()=> {
   await homePage.getAddUserLink().click();
  });

  Then('Add user page should pop up', async ()=> {
    expect(await homePage.getAddUserPageText().isDisplayed()).to.be.true;//equal(true);
    console.log("Add user page text : "+await homePage.getAddUserPageText().getText());
  });