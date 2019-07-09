"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const addUserPage_1 = require("../page_objects/addUserPage");
const chai_1 = __importDefault(require("chai"));
const protractor_1 = require("protractor");
let expect = chai_1.default.expect;
let addUser = new addUserPage_1.AddUser();
cucumber_1.When('Entered first name as {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield addUser.getFirstName().sendKeys(string);
}));
cucumber_1.When('Entered last name as {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield addUser.getLastName().sendKeys(string);
}));
cucumber_1.When('Entered username as {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield addUser.getUserName().sendKeys(string);
}));
cucumber_1.When('Entered password as {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield addUser.getPassword().sendKeys(string);
}));
cucumber_1.When('Selected {int} radio button as customer', (int) => __awaiter(this, void 0, void 0, function* () {
    yield addUser.selectCustomerRadio(int).click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('Selected {string} as a role from dropdown', (string) => __awaiter(this, void 0, void 0, function* () {
    console.log("Selected role is  :  " + string);
    yield addUser.selectRoleName(string).click(); //.sendKeys(string);//click();
    //await addUser.roleName.click();
    // await browser.actions().sendKeys(protractor.Key.ARROW_DOWN).sendKeys(protractor.Key.ENTER).perform();
    yield protractor_1.browser.sleep(5000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVXNlclBhZ2Vfc3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwX2RlZmluaXRpb25zL2FkZFVzZXJQYWdlX3N0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBZ0M7QUFDaEMsNkRBQW9EO0FBQ3BELGdEQUF3QjtBQUN4QiwyQ0FBcUM7QUFFckMsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLE9BQU8sR0FBRSxJQUFJLHFCQUFPLEVBQUUsQ0FBQztBQUUzQixlQUFJLENBQUMsZ0NBQWdDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUNoRCxNQUFNLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQ2pELE1BQU0sT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDaEQsTUFBTSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUNwRCxNQUFNLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx5Q0FBeUMsRUFBRSxDQUFPLEdBQUcsRUFBRSxFQUFFO0lBQ3hELE1BQU0sT0FBTyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQy9DLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywyQ0FBMkMsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsTUFBTSxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUEsOEJBQThCO0lBRTNFLGlDQUFpQztJQUNsQyx3R0FBd0c7SUFDdkcsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=