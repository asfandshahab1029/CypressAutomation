/// <reference types="Cypress" />
class AccountPage{

    insertFirstName(){
        cy.get('[data-test="user-settings-firstName-input"]').type("Test2");
    }
    insertLastName(){
        cy.get('[data-test="user-settings-lastName-input"]').type("Test2");
    }
    insertEmail(){
        cy.get('[data-test="user-settings-email-input"]').type("Test2@test.com");
    }
    insertPhoneNumnber(){
        cy.get('[data-test="user-settings-phoneNumber-input"]').type("1111111")
    }
    clickSave(){
        cy.get('[data-test="user-settings-submit"] > .MuiButton-label').click();
    }





}
export default AccountPage