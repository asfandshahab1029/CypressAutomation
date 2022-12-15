/// <reference types="Cypress" />
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage"
import AccountPage from "../Pages/BankAccountPage"
import BankAccountPage from "../Pages/BankAccountPage";

describe('Bank Account Page Tests', function()
{

    it('Create Bank Account', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const bankAccountPage = new BankAccountPage();


        homePage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickBankAccount();
        bankAccountPage.clickCreate();
        bankAccountPage.insertBankName();
        bankAccountPage.insertRoutingNumber();
        bankAccountPage.insertAccountNumber();
        bankAccountPage.clickSave();
    })
    it('Create Multiple Bank Account', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const bankAccountPage = new BankAccountPage();


        homePage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickBankAccount();
        bankAccountPage.clickCreate();
        bankAccountPage.insertBankName();
        bankAccountPage.insertRoutingNumber();
        bankAccountPage.insertAccountNumber();
        bankAccountPage.clickSave();
        bankAccountPage.clickNew();
        bankAccountPage.insertBankName();
        bankAccountPage.insertRoutingNumber();
        bankAccountPage.insertAccountNumber();
        bankAccountPage.clickSave();
        bankAccountPage.clickNew();
        bankAccountPage.insertBankName();
        bankAccountPage.insertRoutingNumber();
        bankAccountPage.insertAccountNumber();
        bankAccountPage.clickSave();
    })

    it('Delete Bank Account', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const bankAccountPage = new BankAccountPage();


        homePage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickBankAccount();
        bankAccountPage.clickCreate();
        bankAccountPage.insertBankName();
        bankAccountPage.insertRoutingNumber();
        bankAccountPage.insertAccountNumber();
        bankAccountPage.clickSave();
        bankAccountPage.clickDelete();
    
    })


})
