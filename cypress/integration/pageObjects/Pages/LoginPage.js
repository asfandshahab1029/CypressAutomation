/// <reference types="Cypress" />
class LoginPage{

    vist(){
        cy.wait(2000)
        cy.visit("https://metricsone-qa.lineageapps.com/");
    }
    
    insertUserName(){
        cy.wait(2000)
        cy.get('#username').type("Test");
    }

    insertPassword(){
        cy.wait(2000)
        cy.get('#password').type("Test");

    }
    clickRememberMe(){
        cy.wait(2000)
        cy.get('.PrivateSwitchBase-input-14').click();
    }
   clickSignIn(){
    cy.wait(2000)
    cy.get('.MuiButton-label').click();

   }
   selectDontHaveAccount(){
    cy.wait(2000)
    cy.get('.MuiGrid-root > a').click();
   }
   insertAccountFirstName(){
    cy.wait(2000)
    cy.get('#firstName').type("Test");
       
   }
   insertAccountLastName(){
    cy.wait(2000) 
    cy.get('#lastName').type("Test");
       
   }
   insertAccountUserName(){
    cy.wait(2000)
    cy.get('#username').type("Test123");
   }
   insertAccountPassword(){
    cy.wait(2000)
    cy.get('#password').type("Test123$");
   }
   insertAccountConfirmPassword(){
    cy.wait(2000)
    cy.get('#confirmPassword').type("Test123$")
   }
   clickSignUpButton(){
    cy.wait(2000)
    cy.get('.MuiButton-label').click();
   }


}
export default LoginPage;