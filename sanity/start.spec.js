

   describe('Workspace creation', () => {
    it('successfully loads', () => {
        cy.visit('http://192.168.70.19:8080/dataken');
        cy.wait(8000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
        cy.wait(8000);
    });




 /*it('starting the workspace', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Intelligence').click();
        cy.get('span.mat-button-wrapper').contains('Workspace').click();
        cy.get('mat-expansion-panel-header').contains('Workspace').click();
        cy.wait(5000);
        cy.get('.mat-list-text').contains('hadoopwksp').rightclick();*/




       /* cy.get('span.mattooltip').contains('Workspace').click();
        cy.get('mat-expansion-indicator').contains('Employee').click();
        cy.wait(4000);
        cy.get('button').contains('Workspace').click();
        cy.wait(4000);
        cy.get('button').contains('Employee').rightclick();
        cy.get('button').contains('start').click();*/
    })
