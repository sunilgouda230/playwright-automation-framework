import BasePage from "./BasePage";

export default class LoginPage extends BasePage{

    constructor(page){
        super(page);
        this.loginLink = page.getByRole('link', { name: 'Signup / Login' });
        this.enterEmailInput = page.locator("//input[@data-qa='login-email']");
        this.passwordInput = page.locator("//input[@data-qa='login-password']");
        this.loginButton = page.getByRole('button', { name: 'Login' });

    }

    async navigateToSignUpPage(){
        await this.loginLink.click();
    }

    async enterLoginDetails(email, password){
        await this.enterEmailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}