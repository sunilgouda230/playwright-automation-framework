import { test, expect } from '../fixtures/baseTest';
import  SignupPage  from '../../pages/SignupPage.js';
import  LoginPage  from '../../pages/LoginPage.js';
import DashBoard  from '../../pages/DashBoard.js';
import data from '../../testdata/userData.json';
import routes from '../../utils/routes.js';


test('Signup Page Test', async ({ page }) => {
    const userData = JSON.parse(JSON.stringify(data));
    const signupPage = new SignupPage(page);
    const loginPage = new LoginPage(page);
    await loginPage.navigateToSignUpPage();
    await signupPage.enterUserDetails(userData.name,userData.email)
    expect(page.url()).toContain('signup');
    await signupPage.enterAccountInformation(userData.password,userData.firstName,
        userData.lastName,userData.state,
        userData.city,userData.zipCode,
        userData.phone,userData.country,userData.address);
    });


test('@sanity Testing Base Test Fixture', async ({ page }) => {
    console.log('Base URL in test file:', process.env.BASE_URL);
    console.log('Current Page URL in test file:', page.url());
});

test('@sanity Test JOSN Data', async ({ page }) => {
    const userData = JSON.parse(JSON.stringify(data));
    console.log('User Data from JSON:', userData);
});

test('@sanity Login Page Test', async ({ page }) => {
    const userData = JSON.parse(JSON.stringify(data));
    const loginPage = new LoginPage(page);
    const dashBoard = new DashBoard(page);
    await loginPage.navigateToSignUpPage();
    expect(page.url()).toContain(routes.loginPage);
    await loginPage.enterLoginDetails(userData.email,userData.password);
    expect(await dashBoard.getLoggedInUserName()).toEqual(userData.firstName+' '+userData.lastName);    
});