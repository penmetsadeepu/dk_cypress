describe('Home page', () => {

    beforeEach('successfully loads', () => {
        cy.visit('http://192.168.70.19:8080/dataken');
        cy.wait(8000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
        cy.wait(8000);
    });

    it('create a decision tree algorithm', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Intelligence').click();
        cy.get('span.mat-button-wrapper').contains('Machine Learning').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('span.mat-button-wrapper').contains('Cancel').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('mat-panel-title').contains('SALES').click();
        cy.get('mat-list-item').contains('State').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Label)"]').trigger('drop');
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(7000);
        cy.get('svg').should('be.visible');
        cy.get('span.mat-button-wrapper').contains('Next').click();
        cy.get('span.mat-button-wrapper').contains('Select Features').click();
        cy.get('td.ng-star-inserted').contains('Order_Priority').click();
        cy.get('td.ng-star-inserted').contains('Region').click();
        cy.get('[icon="pi pi-angle-right"] > .ui-button > .pi').click();
        cy.get('span.mat-button-wrapper').contains('Apply').click();
        cy.get('span.mat-button-wrapper').contains('Save Layout').click();
        cy.get('[placeholder = "Name"]').type('decisiontree');
        cy.get('[placeholder = "Cross Validation"]').type('2');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.get('span.mat-button-wrapper').contains('Analyze').click();
        cy.wait(30000);
        cy.get('span.mat-button-wrapper').contains('View Analysis').click();
        cy.wait(8000);
        cy.get('.mat-tab-label').contains('Visualisation').click();
        cy.wait(50000);
        cy.get('svg').should('be.visible');
        cy.get('rect').should('be.visible');
        cy.get('text').should('include.text','Predict: Texas');
        cy.get('p-table').should('have.class','p-table');
        cy.get('span.mat-button-wrapper').contains('Finish').click();
        cy.wait(10000);
        cy.get('input[placeholder="Search & enter"]').type('decisiontree').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','decisiontree')
        cy.wait(8000);
    })
    it('create a regression algorithm', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Intelligence').click();
        cy.get('span.mat-button-wrapper').contains('Machine Learning').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('span.mat-button-wrapper').contains('Cancel').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('mat-panel-title').contains('SALES').click();
        cy.get('mat-list-item').contains('Sales').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Label)"]').trigger('drop');
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(10000);
        cy.get('svg').should('be.visible');
        cy.get('rect').should('include.class','background');
        cy.get('span.mat-button-wrapper').contains('Next').click();
        cy.get('span.mat-button-wrapper').contains('Select Features').click();
        cy.get('td.ng-star-inserted').contains('Profit').click();
        cy.get('td.ng-star-inserted').contains('Discount').click();
        cy.get('[icon="pi pi-angle-right"] > .ui-button > .pi').click();
        cy.get('span.mat-button-wrapper').contains('Apply').click();
        cy.get('span.mat-button-wrapper').contains('Save Layout').click();
        cy.get('[placeholder = "Name"]').type('decisionReg');
        cy.get('[placeholder = "Cross Validation"]').type('2');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.get('span.mat-button-wrapper').contains('Analyze').click();
        cy.wait(50000);
        cy.get('span.mat-button-wrapper').contains('View Analysis').click();
        cy.wait(10000);
        cy.get('.mat-tab-label').contains('Feature importance').click();
        cy.wait(5000);
        cy.get('td').should('include.text','Discount')
        cy.get('td').should('include.text','Profit')
        cy.contains('Finish').click();
        cy.wait(10000);
        cy.get('input[placeholder="Search & enter"]').type('decisionReg').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','decisionReg')
        cy.wait(8000);
    })
    it('create a Clustering algorithm', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Intelligence').click();
        cy.get('span.mat-button-wrapper').contains('Machine Learning').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('span.mat-button-wrapper').contains('Cancel').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.wait(5000);
        cy.get('span.mat-button-wrapper').contains('Next').click();
        cy.wait(8000);
        cy.get('.mat-select-placeholder').click();
        cy.get('mat-option').contains('sales').click();
        cy.get('span.mat-button-wrapper').contains('YES').click();
        cy.wait(3000);
        cy.get('span.mat-button-wrapper').contains('Select Features').click();
        cy.get('td.ng-star-inserted').contains('Order_Quantity').click();
        cy.get('td.ng-star-inserted').contains('Sales').click();
        cy.get('[icon="pi pi-angle-right"] > .ui-button > .pi').click();
        cy.get('span.mat-button-wrapper').contains('Apply').click();
        cy.get('span.mat-button-wrapper').contains('Save Layout').click();
        cy.get('[placeholder = "Name"]').type('clustering');
        cy.get('[placeholder = "Cross Validation"]').type('2');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.get('span.mat-button-wrapper').contains('Analyze').click();
        cy.wait(30000);
        cy.get('span.mat-button-wrapper').contains('View Analysis').click();
        cy.wait(10000);
        cy.get('.mat-tab-label').contains('Visualisation').click();
        cy.wait(5000);
        cy.get('.mat-tab-label').contains('Summary').click();
        cy.wait(10000);
        cy.get('.mat-tab-label').contains('Visualisation').click();
        cy.wait(10000);
        cy.get('svg').should('be.visible');
        cy.get('circle').should('include.class','circle');
        cy.get('span.mat-button-wrapper').contains('Finish').click();
        cy.wait(10000);
        cy.get('input[placeholder="Search & enter"]').type('cluster').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','clustering');
        cy.wait(8000);
    })
    it('should edit an algorithm', () =>{
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Intelligence').click();
        cy.get('span.mat-button-wrapper').contains('Machine Learning').click();
        cy.wait(4000);
        cy.get('input[placeholder="Search & enter"]').type('decisiontree').type('{enter}');
        cy.wait(5000);
        cy.get('td.mat-cell').contains('decisiontree').click();
        cy.get('span.mat-button-wrapper').contains('Edit').click();
        cy.wait(10000);
        cy.get('.mat-tab-label').contains('Visualisation').click();
        cy.wait(5000);
        cy.get('svg').should('be.visible');
        cy.get('rect').should('be.visible');
        cy.get('text').should('include.text','Predict: Texas');
        cy.get('p-table').should('have.class','p-table');
        cy.get('span.mat-button-wrapper').contains('Back').click();
        cy.get('span.mat-button-wrapper').contains('Save Layout').click();
        cy.get('[placeholder = "Cross Validation"]').type('3');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.get('span.mat-button-wrapper').contains('Analyze').click();
        cy.wait(50000);
        cy.get('span.mat-button-wrapper').contains('View Analysis').click();
        cy.wait(10000);
        cy.get('.mat-tab-label').contains('Visualisation').click();
        cy.wait(5000);
        cy.get('svg').should('be.visible');
        cy.get('rect').should('be.visible');
        cy.get('p-table').should('have.class','p-table');
        cy.wait(5000);
        cy.get('span.mat-button-wrapper').contains('Finish').click();
        cy.wait(4000);
        cy.get('input[placeholder="Search & enter"]').type('decisiontree').type('{enter}');
        cy.wait(5000);
        cy.get('td.mat-cell').contains('decisiontree').click();
        cy.wait(8000);
    })
    it('should create workspace with predict', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Intelligence').click();
        cy.get('span.mat-button-wrapper').contains('Workspace').click();
        cy.get('mat-expansion-panel-header').contains('File Datasources').click();
        cy.wait(4000);
        cy.get('.mat-list-item-content').contains('csvtest').rightclick();
        cy.get('a.ng-star-inserted').contains(' Add to Workspace').click();
        cy.get('#play').click({ force: true });
        cy.get('#csvtest').click();
        cy.wait(5000);
        cy.get('#select').click();
        cy.get('#select_0 > .fa-check-square').dblclick();
        cy.get('span.mat-button-wrapper').contains('Apply').click();
        cy.get('#select_0 > .fa-check-square').trigger('mouseover');
        cy.wait(5000);
        cy.get('#select_0 > .options > #play').click({ force: true });
        cy.wait(5000);
        cy.get('#select_0 > .fa-check-square').click();
        // cy.get('#select_0 > .fa-check-square').click();
        cy.wait(4000);
        cy.get('#predict').click();
        cy.get('#predict_1').dblclick();
        cy.wait(5000);
        cy.contains('decisiontree')
            .parent()
            .find('mat-checkbox')
            .click({ multiple: true });
        cy.contains('decisiontree')
            .parent()
            .find('[placeholder="Predicted Label"]').type('dtc');
        cy.wait(2000);
        cy.get('span.mat-button-wrapper').contains('Apply').click();
        cy.wait(5000);
        cy.get('#predict_1 > .options > #play').click({ force: true });
        cy.wait(5000);
        cy.get('#predict_1 > .fa-cogs').click();
        cy.wait(8000);
        cy.get('#save').click();
        cy.get('#save_2 > .fa-save').dblclick();
        cy.get('[placeholder="Name"]').type('salespredictwksp');
        cy.get('span.mat-checkbox-label').contains('Generated Key').click();
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.wait(10000);
        cy.get('mat-panel-title').contains('Workspace').click();
        cy.wait(5000);
        cy.get('.mat-list-item-content').should('include.text', 'salespredictwksp');
        cy.wait(8000);
    })
    it('should create a report with predict workspace', () =>{
        cy.get('[mattooltip="Visualize"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('button.mat-menu-item').contains('Charts').click({force:true});
        cy.get('button.mat-menu-item').contains('Pie').click({force:true});
        cy.contains('SALESPREDICTWKSP').click();
        cy.get('mat-list-item').contains('Region').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (X-Axis)"]').trigger('drop');
        cy.get('mat-list-item').contains('Sales').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Y-Axis)"]').trigger('drop');
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(5000);
        cy.get('svg').should('be.visible');
        cy.get('.left-label').should('include.text', 'sales');
        cy.get('.bottom-label').should('include.text', 'Region');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.get('[placeholder="Report Name"]').type('predict');
        cy.get('span.mat-button-wrapper').contains('SAVE').click();
        cy.wait(4000);
        cy.get('input[placeholder="Search & enter"]').type('predict').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','predict');
        cy.wait(8000);   
    })
})