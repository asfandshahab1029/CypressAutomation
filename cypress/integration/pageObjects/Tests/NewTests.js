/// <reference types="Cypress" />
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage"
import NewPage from "../Pages/NewPage";

describe('New Page Tests', function()
{

    it('Select a user', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const newPage = new NewPage();


        homePage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickNew();
        newPage.selectPerson();
        
      
    })
    it('Request Money from a user', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const newPage = new NewPage();


        homePage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickNew();
        newPage.selectDifferentPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickRequest();
        
      
    })
    it('Request Money from multiple users', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const newPage = new NewPage();


        homePage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickNew();
        newPage.selectDifferentPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickRequest();
        newPage.clickCreateAnotherTransaction();
        newPage.selectPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickRequest();
        
      
    })
    it('Multiple Money requests from user', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const newPage = new NewPage();


        homePage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickNew();
        newPage.selectPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickRequest();
        newPage.clickCreateAnotherTransaction();
        newPage.selectPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickRequest();
        
      
    })
    it('Click Return to Transactions after request', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const newPage = new NewPage();


        homePage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickNew();
        newPage.selectDifferentPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickRequest();
        newPage.clickReturnToTransactions();
      
    })
    it('Click Return to Transactions after multiple requests', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const newPage = new NewPage();


        homePage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickNew();
        newPage.selectPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickRequest();
        newPage.clickCreateAnotherTransaction();
        newPage.selectPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickRequest();
        newPage.clickReturnToTransactions();
        
      
    })
    it('Pay a user', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const newPage = new NewPage();


        homePage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickNew();
        newPage.selectPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickPay();
        
      
    })
    it('Pay multiple users', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const newPage = new NewPage();


        homePage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickNew();
        newPage.selectDifferentPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickPay();
        newPage.clickCreateAnotherTransaction();
        newPage.selectPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickPay();
        
      
    })
    it('Multiple Payments to a user', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const newPage = new NewPage();


        homePage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickNew();
        newPage.selectDifferentPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickPay();
        newPage.clickCreateAnotherTransaction();
        newPage.selectDifferentPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickPay();
        
      
    })
    it('Click Return to Transactions after making payment', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const newPage = new NewPage();


        homePage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickNew();
        newPage.selectDifferentPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickPay();
        newPage.clickReturnToTransactions();
      
    })
    it('Click Return to Transactions after making multiple payments', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const newPage = new NewPage();


        homePage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickNew();
        newPage.selectDifferentPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickPay();
        newPage.clickCreateAnotherTransaction();
        newPage.selectDifferentPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickPay();
        newPage.clickReturnToTransactions();
        
      
    })



})