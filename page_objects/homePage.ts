import {element, by} from 'protractor';

export class HomePage{
    searchBox= element(by.model('searchValue'));
    addUserLink= element(by.css("button[class*='pull-right']"));
    addUserPageText=element(by.css("div[class='modal-header'] h3"));

    getSearchBox(){
        return this.searchBox;
    }

    getAddUserLink(){
        return this.addUserLink;
    }

    getAddUserPageText(){
        return this.addUserPageText;
    }
}