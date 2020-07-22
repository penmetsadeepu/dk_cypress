describe('Reports Creation', () => {

    beforeEach('successfully loads', () => {
        //   cy.visit('http://localhost:4200/');
        cy.visit('http://192.168.70.13:8080/dataken');
        cy.wait(1000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
        cy.wait(2000);
    });
    it('Create a table Report', () => {
        cy.get('[mattooltip="Visualize"]').click();
        cy.wait(2000);
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.wait(2000);
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.wait(2000);
        cy.get('button.mat-menu-item').contains('Charts').click();
        cy.wait(1000);
        cy.get('button.mat-menu-item').contains('HeatMap').click();
        cy.wait(1000);
        cy.contains('SALES').click();
        cy.get('mat-list-item').contains('Order_Priority').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (X-Axis)"]').trigger('drop');
        cy.get('mat-list-item').contains('State').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Y-Axis)"]').trigger('drop');
        cy.get('mat-list-item').contains('Order_Quantity').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Value)"]').trigger('drop');
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.get('svg').should('be.visible');
        cy.get('rect').should('be.visible');
        cy.wait(2000);
        //cy.get('span.mat-button-wrapper').contains('Chart Data').click();
        //cy.get('button.mat-stroked-button.mat-primary').contains('Cancel').click({force:true});
        //cy.wait(5000);
        cy.get('span.mat-button-wrapper').contains('Save').click({force:true});
        cy.wait(2000);
        cy.get('[placeholder="Report Name"]').type('heatmap.sanity');
        cy.get('span.mat-button-wrapper').contains('SAVE').click();
       
    })
})