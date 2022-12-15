/// <reference types="Cypress" />
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage"
import NewPage from "../Pages/NewPage";

describe('Home Page tests', function()
{
   
    it('Creating a Transaction with Request', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const newPage = new NewPage();


        loginPage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickFriends();
        homePage.clickFriendsCreateATransaction();
        newPage.selectPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickRequest();
        
    })
    it('Creating a Transaction and paying', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const newPage = new NewPage();


        loginPage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickFriends();
        homePage.clickFriendsCreateATransaction();
        newPage.selectPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickPay();
        
    })
    it('Creating a Multiple Transactions with Request', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const newPage = new NewPage();


        loginPage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickFriends();
        homePage.clickFriendsCreateATransaction();
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
    it('Creating a Multiple Transactions with Paying', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const newPage = new NewPage();


        loginPage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickFriends();
        homePage.clickFriendsCreateATransaction();
        newPage.selectPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickPay();
        newPage.clickCreateAnotherTransaction();
        newPage.selectPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickPay();

        
    })
    
    it('Creating a Transaction by clicking NEW and making request', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const newPage = new NewPage();


        loginPage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickFriends();
        homePage.clickFriendsCreateATransaction();
        newPage.selectPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickRequest();
        
    })
    it('Creating a Transaction by clicking NEW and making payment', function () {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const newPage = new NewPage();


        loginPage.vist();
        loginPage.insertUserName();
        loginPage.insertPassword();
        loginPage.clickSignIn();
        homePage.clickFriends();
        homePage.clickNew();
        newPage.selectPerson();
        newPage.insertAmmount();
        newPage.insertNote();
        newPage.clickPay();
        
    })

})