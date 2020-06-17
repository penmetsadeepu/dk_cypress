describe('Creating bins', () => {
    
    beforeEach('successfully loads', () => {
        cy.visit('http://192.168.70.19:8080/dataken');
        cy.wait(8000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
        cy.wait(8000);
    });

    it('create bin for string columns ', () => {
        cy.get('[mattooltip="Visualize"]').click();
        cy.get('span.mat-button-wrapper').contains('Bin').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.wait(4000);
        cy.get('[placeholder="Name"]').type('bin1');
       cy.get('[placeholder="Description"]').type('data');
        cy.get('[placeholder="Table"]').click();
        cy.get('mat-option').contains('sales').click();
        cy.get('[placeholder="Column"]').click();
        cy.get('mat-option').contains('Order_Priority').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('mat-icon').contains('add').click();
        cy.wait(4000);
        cy.get('[placeholder="Bin Name"]').type('bin');
        cy.get('.ui-dropdown-label').click();
        cy.get('li').contains('Order_Priority').click();
        cy.get('.q-row > .mat-form-field-type-mat-input > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Low');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.get('span.mat-checkbox-label').contains('Create Outlier Bin : ').click();
        cy.get('[placeholder="Outlier"]').type('outlier');
        cy.get('span.mat-button-wrapper').contains('Apply').click();
        cy.wait(8000);
        cy.get('input[placeholder="Search & enter"]').type('bin').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','bin1')
        cy.wait(8000); 
    })
    it('create a bin for numeric column', () => {
        cy.get('[mattooltip="Visualize"]').click();
        cy.get('span.mat-button-wrapper').contains('Bin').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.wait(4000);
        cy.get('[placeholder="Name"]').type('bin2');
        cy.get('[placeholder="Description"]').type('data');
        cy.get('[placeholder="Table"]').click();
        cy.get('mat-option').contains('sales').click();
        cy.get('[placeholder="Column"]').click();
        cy.get('mat-option').contains('Order_ID').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('mat-icon').contains('add').click();
        cy.get('[placeholder="Bin Name"]').type('1');
        cy.get('.ui-dropdown-label').click();
        cy.get('li').contains('Order_ID').click();
        cy.get('.q-row > .mat-form-field-type-mat-input > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('1');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.get('span.mat-checkbox-label').contains('Create Outlier Bin : ').click();
        cy.get('[placeholder="Outlier"]').type('outlier');
        cy.get('span.mat-button-wrapper').contains('Apply').click();
        cy.wait(8000);
        cy.get('input[placeholder="Search & enter"]').type('bin').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','bin2')
        cy.wait(8000); 
    })
    it('create a bin for timestamp columns', () => {
        cy.get('[mattooltip="Visualize"]').click();
        cy.get('span.mat-button-wrapper').contains('Bin').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.wait(4000);
        cy.get('[placeholder="Name"]').type('bin3');
        cy.get('[placeholder="Description"]').type('data');
        cy.get('[placeholder="Table"]').click();
        cy.wait(4000);
        cy.get('mat-option').contains('salestimestamp').click();
        cy.get('[placeholder="Column"]').click();
        cy.wait(4000);
        cy.get('mat-option').contains('Order_Date').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.wait(4000);
        cy.get('mat-icon').contains('add').click();
        cy.get('[placeholder="Bin Name"]').type('bin3');
        cy.get('.ui-dropdown-label').click();
        cy.wait(4000);
        cy.get('li').contains('Order_Date').click();
        cy.get('.mat-select-value').contains('EQUALS').click();
        cy.wait(4000);
        cy.get('span.mat-option-text').contains('GREATER_THAN').click();
        cy.get('input[placeholder="Select Date"]').click();
        cy.wait(4000);
        cy.get('select.ui-datepicker-year').select('2016');
        cy.get('a').contains('20').click();
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.get('span.mat-checkbox-label').contains('Create Outlier Bin : ').click();
        cy.get('[placeholder="Outlier"]').type('outlier');
        cy.get('span.mat-button-wrapper').contains('Apply').click();
        cy.wait(8000);
        cy.get('input[placeholder="Search & enter"]').type('bin').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','bin3')
        cy.wait(8000); 
    })
    it('edit a bin', () => {
        cy.get('[mattooltip="Visualize"]').click();
        cy.get('span.mat-button-wrapper').contains('Bin').click();
        cy.wait(4000);
        cy.get('td.mat-cell').contains('bin3').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('Edit').click();
        cy.wait(5000);
        cy.get('mat-icon').contains('edit').click();
        cy.get('input[placeholder="Select Date"]').click();
        cy.get('select.ui-datepicker-year').select('2017');
        cy.get('a').contains('20').click();
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.get('span.mat-button-wrapper').contains('Apply').click();
        cy.wait(8000);
        cy.get('input[placeholder="Search & enter"]').type('bin').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','bin3')
        cy.wait(8000); 

    })
    it('Create a report with a bin', () => {
        cy.get('[mattooltip="Visualize"]').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.wait(4000);
        cy.get('button.mat-menu-item').contains('Charts').click();
        cy.wait(4000);
        cy.get('button.mat-menu-item').contains('Bar').click();
        cy.wait(4000);
        cy.contains('SALES').click();
        cy.get('mat-list-item').contains('Order_ID').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (X-Axis)"]').trigger('drop');
        cy.get('mat-chip').contains('Order_ID').dblclick();
        cy.get('span.mat-checkbox-label').contains('Show Bins').click();
        cy.wait(2000);
        cy.get('span.mat-select-placeholder').contains('Bucket').click();
        cy.get('span.mat-option-text').contains('bin2').click();
        cy.get('span.mat-button-wrapper').contains('APPLY').click();
        cy.get('mat-list-item').contains('Profit').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Y-Axis)"]').trigger('drop');
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.wait(4000);
        cy.get('[placeholder="Report Name"]').type('binsanity');
        cy.get('span.mat-button-wrapper').contains('SAVE').click();
        cy.wait(10000);
        cy.get('input[placeholder="Search & enter"]').type('sanity').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','binsanity')
        cy.wait(8000); 

    })

})