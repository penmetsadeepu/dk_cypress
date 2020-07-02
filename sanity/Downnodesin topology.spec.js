describe('Dataingest creation ', () => {
    beforeEach('successfully loads', () => {
      cy.visit('http://192.168.70.19:8080/dataken');
      cy.wait(5000);
      cy.get('#username').type('admin');
      cy.get('#password').type('admin123');
      cy.get('.submit').click();
      cy.wait(10000);
    });
    it('Checking Down nodes', () =>{
        // clicking visualize button
        cy.get('span.mat-button-wrapper').contains('Topology').click();
        cy.wait(10000);
        cy.get('#mat-chip-list-input-0', { timeout: 5000}).type('false');
        cy.get('#mat-optgroup-label-27.mat-optgroup-label', { timeout: 5000})
        cy.get('.mat-option-text:eq(2)', { timeout: 5000}).click({ multiple: true });
        //cy.get('.ui-button-text.ui-clickable.ng-star-inserted').contains('NETWORK').click();
        //cy.get('.ui-button-text.ui-clickable.ng-star-inserted').contains('Servers').click();
        cy.get('.ui-button-text.ui-clickable.ng-star-inserted').contains('Storage').click();
        cy.get('.ui-button-text.ui-clickable.ng-star-inserted').contains('Applications').click();
        cy.get('.ui-button-text.ui-clickable.ng-star-inserted').contains('Containers').click();
        cy.get('.ui-button-text.ui-clickable.ng-star-inserted').contains('Virtualization').click();
        cy.get('[mattooltip="Render"]').click();
        cy.wait(10000);
      });
});