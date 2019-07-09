import { When } from "cucumber";
import {AddUser} from '../page_objects/addUserPage';
import chai from 'chai';
import { browser } from "protractor";
import { protractor } from "protractor/built/ptor";
let expect = chai.expect;
let addUser= new AddUser();

When('Entered first name as {string}', async (string) => {
        await addUser.getFirstName().sendKeys(string);
  });

  When('Entered last name as {string}', async (string) => {
        await addUser.getLastName().sendKeys(string);
  });

  When('Entered username as {string}', async (string) => {
        await addUser.getUserName().sendKeys(string);
  });

  When('Entered password as {string}', async (string) => {
    await addUser.getPassword().sendKeys(string); 
  });

  When('Selected {int} radio button as customer', async (int) => {
        await addUser.selectCustomerRadio(int).click();
        await browser.sleep(2000);
  });

  When('Selected {string} as a role from dropdown', async (string) => {
        console.log("Selected role is  :  "+string);    
        await addUser.selectRoleName(string).click();//.sendKeys(string);//click();
        
        //await addUser.roleName.click();
       // await browser.actions().sendKeys(protractor.Key.ARROW_DOWN).sendKeys(protractor.Key.ENTER).perform();
        await browser.sleep(5000);
  });