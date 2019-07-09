"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class HomePage {
    constructor() {
        this.searchBox = protractor_1.element(protractor_1.by.model('searchValue'));
        this.addUserLink = protractor_1.element(protractor_1.by.css("button[class*='pull-right']"));
        this.addUserPageText = protractor_1.element(protractor_1.by.css("div[class='modal-header'] h3"));
    }
    getSearchBox() {
        return this.searchBox;
    }
    getAddUserLink() {
        return this.addUserLink;
    }
    getAddUserPageText() {
        return this.addUserPageText;
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlX29iamVjdHMvaG9tZVBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBdUM7QUFFdkMsTUFBYSxRQUFRO0lBQXJCO1FBQ0ksY0FBUyxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzVDLGdCQUFXLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztRQUM1RCxvQkFBZSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7SUFhcEUsQ0FBQztJQVhHLFlBQVk7UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVELGNBQWM7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVELGtCQUFrQjtRQUNkLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxDQUFDO0NBQ0o7QUFoQkQsNEJBZ0JDIn0=