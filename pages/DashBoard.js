import BasePage  from "./BasePage";

export default class DashBoard extends BasePage{

    constructor(page){
        super(page);
        this.loggedInUser = page.locator("//i[@class='fa fa-user']//following-sibling::b");
        this.deleteAccountButton = page.getByRole('link', { name: 'Delete Account' });
    }

    async getLoggedInUserName(){
        const userName = await this.getText(this.loggedInUser);
        console.log('Logged in user is:', userName);    
        return userName;
    }

    async clickDeleteAccount(){
        await this.deleteAccountButton.click();
    }
}