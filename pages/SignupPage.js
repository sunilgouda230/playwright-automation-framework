import BasePage from "./BasePage";

export default class SignupPage extends BasePage{

    constructor(page){
        super(page);
        this.signupButtonName = page.getByRole('button', { name: 'Signup' });
        this.nameInput = page.getByRole('textbox', { name: 'Name' });
        this.emailInput = page.locator("//input[@data-qa='signup-email']");
        this.userNameInput = page.getByLabel('Name');
        this.checkSalutoryMr = page.locator('#uniform-id_gender1');
        this.emailInputField = page.locator('#email');
        this.passwordInputField = page.locator('#password');
        this.firstNameInputField = page.locator('#first_name');
        this.lastNameInputField = page.locator("#last_name");
        this.stateInputField = page.locator('#state');
        this.countrySelectField = page.locator("#country");
        this.cityInputField = page.locator('#city');
        this.zipcodeInputField = page.locator('#zipcode');
        this.mobileNumberInputField = page.locator('#mobile_number');
        this.addressInputField = page.locator('#address1');
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    }


    async enterUserDetails(name, email){
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.signupButtonName.click();
    }
    
    async enterAccountInformation(password, firstName, lastName, state, city, zipcode, mobileNumber, countrySelectField, addressInputField){
        await this.checkSalutoryMr.click();
        await this.passwordInputField.fill(password);
        await this.firstNameInputField.fill(firstName);
        await this.lastNameInputField.fill(lastName);
        await this.stateInputField.fill(state);
        await this.countrySelectField.selectOption(countrySelectField);
        await this.cityInputField.fill(city);
        await this.zipcodeInputField.fill(zipcode);
        await this.mobileNumberInputField.fill(mobileNumber);
        await this.addressInputField.fill(addressInputField);
        await this.createAccountButton.click();
    }
}