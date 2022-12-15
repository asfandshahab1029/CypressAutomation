/// <reference types="Cypress" />
class HomePage{

    vist(){
        cy.wait(2000)
        cy.visit("http://localhost:3000/signin");
    }
    clickHome(){
        cy.wait(2000)
        cy.get('[data-test="sidenav-home"] > .MuiListItemIcon-root > .MuiSvgIcon-root > path').click();
    }
    clickMyAccount(){
        cy.wait(2000)
        cy.get('[data-test="sidenav-user-settings"] > .MuiListItemIcon-root > .MuiSvgIcon-root > path').click();

    }
    clickBankAccount(){
        cy.wait(2000)
        cy.get('[data-test="sidenav-bankaccounts"] > .MuiListItemIcon-root > .MuiSvgIcon-root > path').click();

    }
    clickNotifications(){
        cy.wait(2000)
        cy.get('[data-test="sidenav-notifications"] > .MuiListItemIcon-root > .MuiSvgIcon-root > path').click();
    }
    clickNotificationBell(){
        cy.wait(2000)
        cy.get('[data-test="nav-top-notifications-count"] > .MuiSvgIcon-root > path').click();
    }
   selectEmployed(){
        cy.wait(2000)
        cy.get('#inlineRadio2').click();

   }
   clickLogOut(){
        cy.wait(2000)
        cy.get('[data-test="sidenav-signout"] > .MuiListItemIcon-root > .MuiSvgIcon-root').click();
   }
   clickEveryone(){
        cy.wait(2000)
        cy.get('[data-test="nav-public-tab"] > .MuiTab-wrapper').click();
}
    clickFriends(){
        cy.wait(2000)
        cy.get('[data-test="nav-contacts-tab"] > .MuiTab-wrapper').click();
    }
    clickMine(){
        cy.wait(2000)
        cy.get('[data-test="nav-personal-tab"] > .MuiTab-wrapper').click();
    }
    clickNew(){
        cy.wait(2000)
        cy.get('[data-test="nav-top-new-transaction"]').click();
    }
    clickFriendsCreateATransaction(){
        cy.wait(2000)
        cy.get('[data-test="transaction-list-empty-create-transaction-button"]').click();
    }

}
export default HomePage;