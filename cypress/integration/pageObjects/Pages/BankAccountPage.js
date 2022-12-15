/// <reference types="Cypress" />
class BankAccountPage{

    clickCreate(){
        cy.wait(2000)
        cy.get('[data-test="bankaccount-new"] > .MuiButton-label').click();
    }
    insertBankName(){
        cy.wait(2000)
        cy.get('#bankaccount-bankName-input').type("Test Bank");
    }
    insertRoutingNumber(){
        cy.wait(2000)
        cy.get('#bankaccount-routingNumber-input').type("111111111");

    }
    insertAccountNumber(){
        cy.wait(2000)
        cy.get('#bankaccount-accountNumber-input').type("111111111");
    }
    clickSave(){
        cy.wait(2000)
        cy.get('[data-test="bankaccount-submit"] > .MuiButton-label').click();
    }
    clickDelete(){
        cy.wait(2000)
        cy.get('[data-test="bankaccount-delete"] > .MuiButton-label').click();
    }
    clickNew(){
        cy.wait(2000)
        cy.get('[data-test="bankaccount-new"] > .MuiButton-label').click();

    }





}
export default BankAccountPage