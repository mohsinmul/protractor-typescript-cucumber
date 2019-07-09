"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AddUser {
    constructor() {
        this.firstName = protractor_1.$("input[name='FirstName']");
        this.lastName = protractor_1.$("input[name='LastName']");
        this.userName = protractor_1.$("input[name='UserName']");
        this.password = protractor_1.$("input[name='Password']");
        this.customerRadio = protractor_1.element.all(protractor_1.by.css("td[class='ng-scope'] label"));
        this.roleName = protractor_1.$("select[name='RoleId']");
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getUserName() {
        return this.userName;
    }
    getPassword() {
        return this.password;
    }
    selectCustomerRadio(first) {
        return this.customerRadio.get(first);
    }
    selectRoleName(roles) {
        return this.roleName.element(protractor_1.by.cssContainingText('option', roles)); //$("option[value='2']");
    }
}
exports.AddUser = AddUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVXNlclBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlX29iamVjdHMvYWRkVXNlclBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMEM7QUFDMUMsTUFBYSxPQUFPO0lBQXBCO1FBRUksY0FBUyxHQUFFLGNBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3hDLGFBQVEsR0FBRSxjQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN0QyxhQUFRLEdBQUUsY0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEMsYUFBUSxHQUFFLGNBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RDLGtCQUFhLEdBQUUsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDakUsYUFBUSxHQUFFLGNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBeUJ6QyxDQUFDO0lBdkJHLFlBQVk7UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVc7UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVc7UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVc7UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQVk7UUFDNUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQVk7UUFDdkIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQSx5QkFBeUI7SUFDakcsQ0FBQztDQUNKO0FBaENELDBCQWdDQyJ9