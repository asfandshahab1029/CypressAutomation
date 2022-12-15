/// <reference types="Cypress" />
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage"

describe('Login Tests', function()
{

    it('Login', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();


        homePage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
    })
    
    it('Dont Have an Account', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();

        homePage.vist();
        loginPage.selectDontHaveAccount();
        loginPage.insertAccountFirstName();
        loginPage.insertAccountLastName();
        loginPage.insertUserName();
        loginPage.insertAccountPassword();
        loginPage.insertAccountConfirmPassword();
        loginPage.clickSignUpButton();
        
    })




    

})
