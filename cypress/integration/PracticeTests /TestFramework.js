/// <reference types="Cypress" />
describe('My First test', function()
{
    //It in this situation is the same as @Test so when the test case is starting
    it('My First Test Case', function () {

        
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get(':nth-child(1) > .form-control').type('Test');
        cy.get(':nth-child(2) > .form-control').type('Test1');
        cy.get('#exampleInputPassword1').type('Test2');
        cy.get('#exampleCheck1').click();
        cy.get('select').select("Female");
        cy.get('#inlineRadio2').click();
        cy.get(':nth-child(8) > .form-control').click();
        // cy.get(':nth-child(8) > .form-control').type('YYYY-MM-DD');
        // cy.get('.btn').click();
       
        //Go to Shop
        cy.get(':nth-child(2) > .nav-link').click();
        //Add Iphone to cart
       cy.selectIphone();
        // //Add Samsung Note 8
         cy.get(':nth-child(2) > .card > .card-footer > .btn').click();
        //Add Nokia Edge
        cy.get(':nth-child(3) > .card > .card-footer > .btn').click();
        //Add Blackberry
        cy.get(':nth-child(4) > .card > .card-footer > .btn').click();

        // //Click Checkout
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();

        // //Clear the Amount for Iphone
        cy.get(':nth-child(1) > [style="text-align: center"] > #exampleInputEmail1').clear();
        cy.get(':nth-child(1) > [style="text-align: center"] > #exampleInputEmail1').type('45');

        // //Remove the Iphone
        cy.get(':nth-child(1) > :nth-child(5) > .btn').click();

        // //Click Continue Shopping & Readd Iphone
        cy.get(':nth-child(4) > .btn').click();
        cy.get(':nth-child(1) > .card > .card-footer > .btn').click();

    })

})