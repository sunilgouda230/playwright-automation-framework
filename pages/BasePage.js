export default class BasePage{

    constructor(page){
        this.page = page;
    }

    async navigateToURL(url){
        await this.page.goto(url);
    }

    async getPageTitle(){
        return await this.page.title();
    }

    async clickElementByRole(role, name){
        await this.page.getByRole(role, { name: name }).click();
    }

    async type(locator, text){
        await this.page.fill(locator, text);
    }

    async getText(locator) {
         return await locator.textContent();
        }
}