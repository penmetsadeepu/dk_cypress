describe('Reports Creation', () => {

    beforeEach('successfully loads', () => {
        //   cy.visit('http://localhost:4200/');
        cy.visit('http://192.168.70.19:8080/dataken');
        cy.wait(2000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
      //  cy.wait(4000);
    });


    it('create Dashboard', () => {
        // clicking visualize button
        cy.get('.fa.fa-bar-chart.mat-icon.notranslate.material-icons.mat-icon-no-color').click();
        cy.wait(2000)
        // Clicking Search and Enter field and searching for lineTF
        cy.get('[placeholder = "Search & enter"]').type('LineTF');
        cy.get('.ui-button-icon-left.ui-clickable.pi.pi-refresh').click();
        cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin').click();
        cy.wait(4000);
        cy.get('.mat-button-wrapper').contains('View').click();
        cy.wait(4000);
        cy.get('.mat-button-wrapper').contains('TAG FILTERS').click();
        cy.wait(4000);
        // view tag filters
        cy.get('.mat-menu-item.ng-star-inserted').contains('Show').click();
    })
});

       

//creating Dashboard
    // cy.get('span.mat-button-wrapper').contains('Dashboard').click();
     //   cy.wait(4000)
        //cy.get('span.mat-button-wrapper').contains('Create').click();
        //cy.wait(4000);
        // cy.get('span.mat-button-wrapper').contains('REPORTS').click();
        // cy.wait(4000);
        // cy.get('.fa.fa-filter').click();
        // cy.get('.ui-inputtext.ui-corner-all.ui-state-default.ui-widget.ng-star-inserted').eq(0).type('lineTF');
        // cy.wait(1000);
        // cy.get('.ui-resizable-column.ng-star-inserted').contains('lineTF').doubleclick();
        // cy.get('.span.mat-button-wrapper').contains('save').click();
        // cy.get('[placeholder = "Name"]').type('lineTF');
        // cy.get('[placeholder = "Description"]').type('TagFilter');
        // cy.get('.span.mat-button-wrapper').contains('save').click();
        // cy.get('.span.mat-button-wrapper').contains('TagFilters').click();
        // cy.get('.mat-menu-content').contain('show').click();
    

//creating Report
      /* cy.get('button.mat-menu-item').contains('line').click();
        cy.wait(5000);
        cy.contains('SALES').click();
        cy.wait(4000);
        cy.get('mat-list-item').contains('Order_Priority').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (X-Axis)"]').trigger('drop');
        cy.get('mat-list-item').contains('Profit').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Y-Axis)"]').trigger('drop');
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(5000);
        cy.get('mat-list-item').contains('Order_Priority').rightclick();
        cy.get('a').contains(' Create TagFilter ').click();
        cy.get('[placeholder ="value"]').type('Low');
        cy.get('[mattooltip="Apply Filter"]').click();
        cy.wait(5000);*/



