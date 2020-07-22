describe('Home page', () => {
    it('successfully loads', () => {
        cy.visit('http://192.168.70.19:8080/dataken');
        cy.wait(2000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
        cy.wait(10000);
    })

    
    it('checking Discovery Nodes are in Respective menus', () => {
        cy.get('[mattooltip="Monitor"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Inventory').click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Network').dblclick();
        cy.wait(10000);
        //cy.get('.fa.fa-filter').click();

        
    })
     /*it('checking server nodes', () => {
        cy.get('[mattooltip="Monitor"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Inventory').click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Compute').click();
        cy.wait(2000);
        cy.get('button.mat-menu-item').contains('Physical').click();
        cy.wait(10000);
        //cy.get('.fa-fa-filter').click();
        //cy.get('td').contains('192.168.70.175').click();*/


    })

