describe('Generating vtable', () => {

    beforeEach('successfully loads', () => {
        cy.visit('http://192.168.70.19:8080/dataken');
        cy.wait(8000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
        cy.wait(8000);
        
    });

    it('Create a dtl script', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Intelligence').click();
        cy.get('span.mat-button-wrapper').contains('Transform').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('.ace_content').click();
        cy.get('.ace_content').type('VTable vtSales <- ${ANALYTICAL_WKSP:"sales"};',
            { parseSpecialCharSequences: false }).type('{enter}').type('vtSales[`Order_ID`] <- `Discount`+1;', { parseSpecialCharSequences: false }).type('{enter}').type('return vtSales;', { parseSpecialCharSequences: false });
        cy.get('span.mat-button-wrapper').contains('Validate').click();
        cy.wait(5000);
        cy.get('p').should('have.text', 'No errors...!')
        cy.get('span.mat-button-wrapper').contains('Run').click();
        cy.wait(5000);
        cy.get('p-table').should('have.class', 'prime-table');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.get('[placeholder="Name"]').type('vtsales');
        cy.get('span.mat-button-wrapper').contains('APPLY').click();
        cy.wait(8000);
        cy.get('input[placeholder="Search & enter"]').type('vtsales').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','vtsales');
        cy.wait(10000);
    })

    it('should create an ml with vtable', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Intelligence').click();
        cy.get('span.mat-button-wrapper').contains('Machine Learning').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('span.mat-button-wrapper').contains('Cancel').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('mat-panel-title').contains('VTSALES').click();
        cy.get('mat-list-item').contains('State').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Label)"]').trigger('drop');
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(3000);
        cy.get('span.mat-button-wrapper').contains('Next').click();
        cy.get('span.mat-button-wrapper').contains('Select Features').click();
        cy.get('td.ng-star-inserted').contains('Order_Priority').click();
        cy.get('td.ng-star-inserted').contains('Region').click();
        cy.get('[icon="pi pi-angle-right"] > .ui-button > .pi').click();
        cy.get('span.mat-button-wrapper').contains('Apply').click();
        cy.get('span.mat-button-wrapper').contains('Save Layout').click();
        cy.get('[placeholder = "Name"]').type('vtdecisiontree');
        cy.get('[placeholder = "Cross Validation"]').type('2');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.get('span.mat-button-wrapper').contains('Analyze').click();
        cy.wait(50000);
        cy.get('span.mat-button-wrapper').contains('View Analysis').click();
        cy.wait(20000);
        cy.get('.mat-tab-label').contains('Visualisation').click();
        cy.wait(5000);
        cy.get('svg').should('be.visible');
        cy.get('rect').should('be.visible');
        cy.get('p-table').should('have.class', 'p-table');
        cy.get('span.mat-button-wrapper').contains('Finish').click();
        cy.wait(10000);
        cy.get('input[placeholder="Search & enter"]').type('vt').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','vtdecisiontree');
        cy.wait(8000);

    });
    it('create an Area chart with vtable', () => {

        cy.wait(5000);
        cy.get('[mattooltip="Visualize"]').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('button.mat-menu-item').contains('Charts').click();
        cy.get('button.mat-menu-item').contains('Area').click();
        cy.contains('VTSALES').click();
        cy.get('mat-list-item').contains('Order_Priority').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (X-Axis)"]').trigger('drop');
        cy.get('mat-list-item').contains('RowID').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Y-Axis)"]').trigger('drop');
        cy.get('mat-list-item').contains('Order_Quantity').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (X-Dimension)"]').trigger('drop');
        cy.get('mat-list-item').contains('Profit').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Y-Dimension)"]').trigger('drop');
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(5000);
        cy.get('svg')
            .should('be.visible')
            .and(rect => {
                expect(rect.height()).to.be.greaterThan(200)
            })
        cy.get('rect').should('include.class', 'background');
        cy.get('span.mat-button-wrapper').contains('Cancel').click();
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.get('[placeholder="Report Name"]').type('vtreport');
        cy.get('span.mat-button-wrapper').contains('SAVE').click();
        cy.wait(8000);
        cy.get('input[placeholder="Search & enter"]').type('vt').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','vtreport');
        cy.wait(8000);

    })
})