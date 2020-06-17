describe('Reports Creation', () => {

    beforeEach('successfully loads', () => {
        cy.visit('http://192.168.70.19:8080/dataken');
        cy.wait(8000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
        cy.wait(8000);
    });



    it('create a bar chart with string tag filter', () => {
        cy.get('[mattooltip="Visualize"]').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('button.mat-menu-item').contains('Charts').click();
        cy.get('button.mat-menu-item').contains('Bar').click();
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
        cy.wait(5000);
        cy.get('svg')
            .should('be.visible')
            .and(rect => {
                expect(rect.height()).to.be.greaterThan(200)
            })
        cy.get('rect').should('have.class', 'bar');
        cy.get('text').should('include.text', 'Low');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.get('[placeholder="Report Name"]').type('tagfilter');
        cy.get('span.mat-button-wrapper').contains('SAVE').click();
        cy.wait(8000);
    })
    it('create a scatter chart with tagfilter', () => {
        cy.get('[mattooltip="Visualize"]').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('button.mat-menu-item').contains('Charts').click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Scatter').click();
        cy.wait(5000);
        cy.contains('SALES').click();
        cy.wait(4000);
        cy.get('mat-list-item').contains('RowID').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (X-Axis)"]').trigger('drop');
        cy.get('mat-list-item').contains('Profit').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Y-Axis)"]').trigger('drop');
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(5000);
        cy.get('mat-list-item').contains('RowID').rightclick();
        cy.get('a').contains(' Create TagFilter ').click();
        cy.get('[mattooltip="Apply Filter"]').click();
        cy.get('svg').should('be.visible')
        .and(rect => {
            expect(rect.height()).to.be.greaterThan(200)
        })
        cy.get('rect').should('include.class', 'background');
        cy.get('path').should('include.class', 'symbol');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.get('[placeholder="Report Name"]').type('tagfilter1');
        cy.get('span.mat-button-wrapper').contains('SAVE').click();
    })
    
    
})