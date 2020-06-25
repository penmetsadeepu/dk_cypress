describe('Login', () => {

    beforeEach('successfully loads', () => {
        //   cy.visit('http://localhost:4200/');
        cy.visit('http://159.89.169.89:8080/dataken');
        cy.wait(2000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
        cy.wait(4000);
    });
    it('Checking Nodes in Topology/linked', () => {
        //Clicking Monitor button
        cy.get('mat-icon.fa.fa-heartbeat.mat-icon.notranslate.material-icons.mat-icon-no-color').click();
        cy.wait(8000);
        cy.get('.mat-button-wrapper').contains('Topology').click();
        cy.wait(4000);
        cy.get('.mat-button-wrapper').contains('settings').click(); 
        cy.wait(4000);
        cy.get('.mat-menu-item').contains('Short-Path').click();
        cy.get('[placeholder = "source"]').type('192.168.70.177{enter}');
        cy.get('[placeholder = "target"]').type('192.168.70.176{enter}');
        cy.get('.mat-icon.notranslate.material-icons.mat-icon-no-color').contains('search').click();
         
        
        /*cy.get('.ui-button-text.ui-clickable.ng-star-inserted').contains('Network').click();
        cy.get('[mattooltip="Render"]').click();
        cy.wait(3000);
        cy.get('.ui-button-text.ui-clickable.ng-star-inserted').contains('Servers').click();
        cy.get('[mattooltip="Render"]').click();
        cy.wait(3000);
        cy.get('.ui-button-text.ui-clickable.ng-star-inserted').contains('Storage').click();
        cy.get('[mattooltip="Render"]').click();
        cy.wait(4000);
        cy.get('.ui-button-text.ui-clickable.ng-star-inserted').contains('Applications').click();
        cy.get('[mattooltip="Render"]').click();
        cy.wait(4000);
        cy.get('.ui-button-text.ui-clickable.ng-star-inserted').contains('Containers').click();
        cy.get('[mattooltip="Render"]').click();
        cy.wait(4000);
        cy.get('.ui-button-text.ui-clickable.ng-star-inserted').contains('Virtualization').click();
        cy.get('[mattooltip="Render"]').click();*/
        


    });
});