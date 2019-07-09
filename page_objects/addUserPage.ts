import {$, element, by} from 'protractor';
export class AddUser{

    firstName= $("input[name='FirstName']");
    lastName= $("input[name='LastName']");
    userName= $("input[name='UserName']");
    password= $("input[name='Password']");
    customerRadio= element.all(by.css("td[class='ng-scope'] label"));
    roleName= $("select[name='RoleId']");

    getFirstName(){
        return this.firstName;
    }

    getLastName(){
        return this.lastName;
    }

    getUserName(){
        return this.userName;
    }

    getPassword(){
        return this.password;
    }

    selectCustomerRadio(first:number){
        return this.customerRadio.get(first);
    }

    selectRoleName(roles:string){
        return this.roleName.element(by.cssContainingText('option', roles));//$("option[value='2']");
    }
}