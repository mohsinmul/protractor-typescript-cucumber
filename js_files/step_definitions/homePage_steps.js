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
const protractor_1 = require("protractor");
const homePage_1 = require("../page_objects/homePage");
const chai_1 = __importDefault(require("chai"));
let expect = chai_1.default.expect;
let homePage = new homePage_1.HomePage();
cucumber_1.Given('I navigate to WayAutomation homepage', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get(protractor_1.browser.baseUrl);
    //await browser.sleep(2000);
}));
cucumber_1.Then('I could find Search box is displayed', () => __awaiter(this, void 0, void 0, function* () {
    console.log("Search box test");
    expect(yield homePage.getSearchBox().isDisplayed()).to.equal(true);
}));
cucumber_1.Then('Add User link is displayed on Page', () => __awaiter(this, void 0, void 0, function* () {
    expect(yield homePage.getAddUserLink().isDisplayed()).to.be.true; //equal(true);
    console.log("Add User link text : " + (yield homePage.getAddUserLink().getText()));
}));
cucumber_1.When('I clicked on Add User link', () => __awaiter(this, void 0, void 0, function* () {
    yield homePage.getAddUserLink().click();
}));
cucumber_1.Then('Add user page should pop up', () => __awaiter(this, void 0, void 0, function* () {
    expect(yield homePage.getAddUserPageText().isDisplayed()).to.be.true; //equal(true);
    console.log("Add user page text : " + (yield homePage.getAddUserPageText().getText()));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2Vfc3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwX2RlZmluaXRpb25zL2hvbWVQYWdlX3N0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQXFDO0FBQ3JDLHVEQUFrRDtBQUNsRCxnREFBd0I7QUFFeEIsSUFBSSxNQUFNLEdBQUMsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV2QixJQUFJLFFBQVEsR0FBRSxJQUFJLG1CQUFRLEVBQUUsQ0FBQztBQUU3QixnQkFBSyxDQUFDLHNDQUFzQyxFQUFFLEdBQVEsRUFBRTtJQUNyRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsNEJBQTRCO0FBQzdCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsc0NBQXNDLEVBQUUsR0FBUSxFQUFFO0lBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMvQixNQUFNLENBQUMsTUFBTSxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsb0NBQW9DLEVBQUUsR0FBUSxFQUFFO0lBQ25ELE1BQU0sQ0FBQyxNQUFNLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUEsY0FBYztJQUMvRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixJQUFDLE1BQU0sUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFBLENBQUMsQ0FBQztBQUNqRixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRCQUE0QixFQUFFLEdBQVEsRUFBRTtJQUM1QyxNQUFNLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN6QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDZCQUE2QixFQUFFLEdBQVEsRUFBRTtJQUM1QyxNQUFNLENBQUMsTUFBTSxRQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUEsY0FBYztJQUNuRixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixJQUFDLE1BQU0sUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUMsT0FBTyxFQUFFLENBQUEsQ0FBQyxDQUFDO0FBQ3JGLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==