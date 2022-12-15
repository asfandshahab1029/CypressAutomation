/// <reference types="Cypress" />

describe('My First test', function()
{
    //It in this situation is the same as @Test so when the test case is starting
    it('My First Test Case', function () {

        //Test Steps, cy is like driver in selenium (driver.findElement), get is like Find Element
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.wait(2000)
        cy.get('[for="radio1"] > .radioButton').click(); 
        cy.wait(2000)
        cy.get('[for="radio2"] > .radioButton').click(); 
        cy.wait(2000)
        cy.get('#name').type('abc');
        cy.wait(2000)
        cy.get('#name').clear();
        cy.wait(2000)
        cy.get('#hide-textbox').click()
        cy.wait(2000)
        cy.get('#show-textbox').click()
        


        
        
    })

})