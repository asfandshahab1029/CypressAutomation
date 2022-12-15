/// <reference types="Cypress" />
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage"
import AccountPage from "../Pages/AccountPage"

describe('Account Page Tests', function()
{

    it('Login', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const accountPage = new AccountPage();


        homePage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickMyAccount();
        //clearing the First Name
        cy.get('[data-test="user-settings-firstName-input"]').clear();
        accountPage.insertFirstName();
        //Clearing the Last Name
        cy.get('[data-test="user-settings-lastName-input"]').clear();
        accountPage.insertLastName();
        accountPage.insertEmail();
        accountPage.insertPhoneNumnber();
      
    })




})