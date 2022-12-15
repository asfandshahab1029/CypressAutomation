/// <reference types="Cypress" />
class NewPage{
    selectPerson(){
        cy.get('[data-test="user-list-search-input"]').type("Edgar Johns")
        cy.wait(2000)
        cy.get('[data-test="user-list-item-t45AiwidW"]').click();
    }
    selectDifferentPerson(){
        cy.get('[data-test="user-list-search-input"]').type("Arely Kertzmann")
        cy.wait(2000)
        cy.get('[data-test="user-list-item-qywYp6hS0U"]').click();
    }
    insertAmmount(){
        cy.wait(2000)
        cy.get('#amount').type("100");
    }
    insertNote(){
        cy.wait(2000)
        cy.get('#transaction-create-description-input').type("test");
    }
    clickRequest(){
        cy.wait(2000)
        cy.get('[data-test="transaction-create-submit-request"]').click();

    }
    clickPay(){
        cy.wait(2000)
        cy.get('[data-test="transaction-create-submit-payment"]').click();
    }
    clickCreateAnotherTransaction(){
        cy.wait(2000)
        cy.get('[data-test="new-transaction-create-another-transaction"] > .MuiButton-label').click();
    }
    clickReturnToTransactions(){
        cy.wait(2000)
        cy.get('[data-test="new-transaction-return-to-transactions"] > .MuiButton-label').click();
    }


}
export default NewPage;