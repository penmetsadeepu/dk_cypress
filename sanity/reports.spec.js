

describe('Reports Creation', () => {

    beforeEach('successfully loads', () => {
        //   cy.visit('http://localhost:4200/');
        cy.visit('http://192.168.70.19:8080/dataken');
        cy.wait(8000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
        cy.wait(8000);
    });
    it('Create a table Report', () => {
        cy.get('[mattooltip="Visualize"]').click();
        // comment
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.wait(4000);
        cy.get('button.mat-menu-item').contains('Table').click({force:true});
        cy.contains('SALES').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Table)"]').trigger('drop');
        cy.get('.mat-tab-label').contains('Tag Filters').click();
        cy.get('mat-chip').contains('sales').click();
        cy.get('td.ng-star-inserted').contains('Order_ID').click();
        cy.get('td.ng-star-inserted').contains('Profit').click();
        cy.get('td.ng-star-inserted').contains('Discount').click();
        cy.get('td.ng-star-inserted').contains('Sales').click();
        cy.get('td.ng-star-inserted').contains('Order_Priority').click();
        cy.get('[icon="pi pi-angle-right"] > .ui-button > .pi').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('APPLY').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(5000);
        cy.get('table').should('be.visible');
        cy.get('th').should('include.text', 'Order_Priority');
        cy.get('th').should('include.text', 'Profit');
        cy.get('span.mat-button-wrapper').contains('Chart Data').click();
        cy.wait(8000);
        cy.get('th').should('include.text', 'Order_Priority');
        cy.wait(2000);
        cy.get('span.mat-button-wrapper').contains('Cancel').click();
        cy.wait(5000);
        cy.get('span.mat-button-wrapper').contains('Save').click({force:true});
        cy.get('[placeholder="Report Name"]').type('tablesanity');
        cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
        cy.wait(20000);
        cy.get('input[placeholder="Search & enter"]').type('sanity').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','tablesanity');
        cy.wait(8000);

    });
    it('Create a table Report with transform', () => {
        cy.get('[mattooltip="Visualize"]').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.wait(4000);
        cy.get('button.mat-menu-item').contains('Table').click({force:true});
        cy.contains('SALES').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Table)"]').trigger('drop');
        cy.get('.mat-tab-label').contains('Tag Filters').click();
        cy.get('mat-chip').contains('sales').click();
        cy.get('td.ng-star-inserted').contains('Order_ID').click();
        cy.get('td.ng-star-inserted').contains('Profit').click();
        cy.get('td.ng-star-inserted').contains('Discount').click();
        cy.get('td.ng-star-inserted').contains('State').click();
        cy.get('td.ng-star-inserted').contains('Order_Priority').click();
        cy.get('[icon="pi pi-angle-right"] > .ui-button > .pi').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('APPLY').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(5000);
        cy.get('mat-chip').contains('sales').click();
        cy.get('a').contains('Order_ID').click();
        cy.get('span.mat-checkbox-label').contains('Enable Transform').click();
        cy.get('span.mat-button-wrapper').contains('Transform').click();
        cy.get('.ace_content').type('{enter}')
            .type('input[`Order_ID`] <- `Discount`+1;', { parseSpecialCharSequences: false })
            .type('{enter}')
            .type('return input[Order_ID];', { parseSpecialCharSequences: false });
        cy.get('span.mat-button-wrapper').contains('Validate').click();
        cy.wait(5000);
        cy.get('span.mat-button-wrapper').contains('Run').click();
        cy.wait(5000);
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.wait(5000);
        cy.get('span.mat-button-wrapper').contains('Apply').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('APPLY').click();
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(5000);
        cy.get('table').should('be.visible');
        cy.get('th').should('include.text', 'Order_ID');
        cy.get('th').should('include.text', 'Order_Priority');
        cy.get('th').should('include.text', 'Profit');
        cy.get('span.mat-button-wrapper').contains('Chart Data').click();
        cy.get('th').should('include.text', 'Order_Priority');
        cy.get('span.mat-button-wrapper').contains('Cancel').click();
        cy.get('span.mat-button-wrapper').contains('Save').click({force:true});
        cy.get('[placeholder="Report Name"]').type('tabletransformsanity');
        cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
        cy.wait(20000);
        cy.get('input[placeholder="Search & enter"]').type('sanity').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','tabletransformsanity');
        cy.wait(8000);

    });
    it('create a bar chart', () => {
        cy.get('[mattooltip="Visualize"]').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.wait(4000);
        cy.get('button.mat-menu-item').contains('Charts').click({force:true});
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Bar').click({force:true});
        cy.contains('SALES').click();
        cy.get('mat-list-item').contains('Order_Priority').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (X-Axis)"]').trigger('drop');
        cy.get('mat-list-item').contains('Profit').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Y-Axis)"]').trigger('drop');
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(5000);
        cy.get('svg')
            .should('be.visible')
            .and(rect => {
                expect(rect.height()).to.be.greaterThan(200)
            })
        cy.get('rect').should('have.class', 'bar');
        cy.get('rect.bar').should('be.visible')
        cy.get('span.mat-button-wrapper').contains('Save').click({force:true});
        cy.get('[placeholder="Report Name"]').type('barsanity');
        cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
        cy.wait(20000);
        cy.get('input[placeholder="Search & enter"]').type('sanity').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','barsanity');
        cy.wait(8000);
    })
    it('create a sankey chart', () => {
        cy.get('[mattooltip="Visualize"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('button.mat-menu-item').contains('Charts').click({force:true});
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Sankey').click({force:true});
        cy.contains('SANKEYAWS').click();
        cy.get('mat-list-item').contains('ProductName').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Source)"]').trigger('drop');
        cy.get('mat-list-item').contains('WindowTitle').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Target)"]').trigger('drop');
        cy.get('mat-list-item').contains('TotalTime').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Value)"]').trigger('drop');
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(8000);
        cy.get('svg').should('be.visible');
        cy.get('rect').should('be.visible');
        cy.get('span.mat-button-wrapper').contains('Save').click({force:true});
        cy.get('[placeholder="Report Name"]').type('sankeysanity');
        cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
        cy.wait(20000);
        cy.get('input[placeholder="Search & enter"]').type('sanity').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','sankeysanity');
        cy.wait(8000);
    })
    it('create a gantt chart', () => {
        cy.get('[mattooltip="Visualize"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('button.mat-menu-item').contains('Charts').click({force:true});
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Gantt').click();
        cy.contains('ACTIVITYMETRICS').click();
        cy.get('mat-list-item').contains('WindowTitle').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Task)"]').trigger('drop');
        cy.get('mat-list-item').contains('UserAccountName').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Task Group)"]').trigger('drop');
        cy.get('mat-list-item').contains('BeginTimeUtc').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Start Dates)"]').trigger('drop');
        cy.get('mat-list-item').contains('EndTimeUtc').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (End Dates)"]').trigger('drop');
        cy.get('span.mat-button-wrapper').contains('Limit').click();
        cy.wait(3000);
        cy.get('[placeholder="Limit"]').type(10);
        cy.get('span.mat-button-wrapper').contains('APPLY').click();
        cy.wait(5000);
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(8000);
        cy.get('div').should('include.class','vis-timeline');
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('Save').click({force:true});
        cy.wait(4000);
        cy.get('[placeholder="Report Name"]').type('ganttsanity');
        cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
        cy.wait(20000);
        cy.get('input[placeholder="Search & enter"]').type('sanity').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','ganttsanity');
        cy.wait(8000);
    })
    it('create a line chart', () => {
        cy.get('[mattooltip="Visualize"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('button.mat-menu-item').contains('Charts').click({force:true});
        cy.get('button.mat-menu-item').contains('Line').click({ force: true });
        cy.contains('SALES').click();
        cy.get('mat-list-item').contains('Sales').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (X-Axis)"]').trigger('drop');
        cy.get('mat-list-item').contains('Discount').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Y-Axis)"]').trigger('drop');
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(5000);
        cy.get('svg')
            .should('be.visible');
        cy.get('path').should('have.class', 'line');
        cy.get('span.mat-button-wrapper').contains('Save').click({force:true});
        cy.wait(4000);
        cy.get('[placeholder="Report Name"]').type('linesanity');
        cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
        cy.wait(20000);
        cy.get('input[placeholder="Search & enter"]').type('sanity').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','linesanity');
        cy.wait(8000);
    })
    it('create a Pie chart', () => {
        cy.get('[mattooltip="Visualize"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('button.mat-menu-item').contains('Charts').click({force:true});
        cy.get('button.mat-menu-item').contains('Pie').click({force:true});
        cy.contains('SALES').click();
        cy.get('mat-list-item').contains('Region').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (X-Axis)"]').trigger('drop');
        cy.get('mat-list-item').contains('Discount').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Y-Axis)"]').trigger('drop');
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(5000);
        cy.get('svg').should('be.visible');
        cy.get('.left-label').should('include.text', 'Discount');
        cy.get('.bottom-label').should('include.text', 'Region');
        cy.get('span.mat-button-wrapper').contains('Save').click({force:true});
        cy.wait(4000);
        cy.get('[placeholder="Report Name"]').type('piesanity');
        cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
        cy.wait(20000);
        cy.get('input[placeholder="Search & enter"]').type('sanity').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','piesanity');
        cy.wait(8000);
    })
    it('create an Area chart', () => {
        cy.get('[mattooltip="Visualize"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('button.mat-menu-item').contains('Charts').click({force:true});
        cy.get('button.mat-menu-item').contains('Area').click({force:true});
        cy.contains('HADOOPTABLE').click();
        cy.get('mat-list-item').contains('Region').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (X-Axis)"]').trigger('drop');
        cy.get('mat-list-item').contains('Profit').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Y-Axis)"]').trigger('drop');
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(5000);
        cy.get('svg')
            .should('be.visible')
            .and(rect => {
                expect(rect.height()).to.be.greaterThan(200)
            })
        cy.get('rect').should('include.class', 'background');
        cy.get('text').should('include.text', 'Central');
        cy.get('span.mat-button-wrapper').contains('Save').click({force:true});
        cy.wait(4000);
        cy.get('[placeholder="Report Name"]').type('Areasanity');
        cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
        cy.wait(20000);
        cy.get('input[placeholder="Search & enter"]').type('sanity').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','Areasanity');
        cy.wait(8000);
    })
    it('create a line chart', () => {
        cy.get('[mattooltip="Visualize"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('button.mat-menu-item').contains('Charts').click({force:true});
        cy.get('button.mat-menu-item').contains('Line').click({ force: true });
        cy.contains('HADOOPWKSP').click();
        cy.get('mat-list-item').contains('Profit').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (X-Axis)"]').trigger('drop');
        cy.get('mat-list-item').contains('Discount').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Y-Axis)"]').trigger('drop');
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(5000);
        cy.get('svg')
            .should('be.visible');
        cy.get('path').should('have.class', 'line');
        cy.get('span.mat-button-wrapper').contains('Save').click({force:true});
        cy.wait(4000);
        cy.get('[placeholder="Report Name"]').type('hadoopwkspsanity');
        cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
        cy.wait(20000);
        cy.get('input[placeholder="Search & enter"]').type('sanity').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','hadoopwkspsanity');
        cy.wait(8000);
    })
    it('create a Scatter chart', () => {
        cy.get('[mattooltip="Visualize"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('button.mat-menu-item').contains('Charts').click({force:true});
        cy.get('button.mat-menu-item').contains('Scatter').click({force:true});
        cy.contains('SALES').click();
        cy.get('mat-list-item').contains('Order_Priority').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (X-Axis)"]').trigger('drop');
        cy.get('mat-list-item').contains('Discount').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Y-Axis)"]').trigger('drop');
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(5000);
        cy.get('svg')
            .should('be.visible')
            .and(rect => {
                expect(rect.height()).to.be.greaterThan(200)
            })
        cy.get('rect').should('include.class', 'background');
        cy.get('path').should('include.class', 'symbol');
        cy.get('text').should('include.text', 'Low');
        cy.get('span.mat-button-wrapper').contains('Save').click({force:true});
        cy.wait(4000);
        cy.get('[placeholder="Report Name"]').type('scattersanity');
        cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
        cy.wait(20000);
        cy.get('input[placeholder="Search & enter"]').type('sanity').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','scattersanity');
        cy.wait(8000);
    })

    it('create a Gauge chart', () => {
        cy.get('[mattooltip="Visualize"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('button.mat-menu-item').contains('Charts').click({force:true});
        cy.get('button.mat-menu-item').contains('Guage').click({force:true});
        cy.contains('SALES').click();
        cy.get('mat-list-item').contains('RowID').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Fact"]').trigger('drop');
        cy.get('.mat-tab-label').contains('Tag Filters').click();
        cy.get('mat-chip').contains('RowID').click({force: true});
        cy.get('[placeholder = "Column"]').click();
        cy.get('mat-option').contains('RowID').click();
        cy.get('[placeholder = "Min"]').type('0');
        cy.get('[placeholder = "Max"]').type('10000');
        cy.get('[placeholder = "No of Ranges"]').click();
        cy.get('mat-option').contains(3).click();
        cy.get('span.mat-button-wrapper').contains('APPLY').click();
        cy.get('span.mat-button-wrapper').contains('CANCEL').click();
        cy.wait(5000);
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(5000);
        cy.get('canvas').should('be.visible')
            .and(gauge => {
                expect(gauge.height()).to.be.greaterThan(200);
            });
        cy.get('span.mat-button-wrapper').contains('Save').click({force:true});
        cy.wait(4000);
        cy.get('[placeholder="Report Name"]').type('gaugesanity');
        cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
        cy.wait(20000);
        cy.get('input[placeholder="Search & enter"]').type('sanity').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','gaugesanity');
        cy.wait(8000);
    });
  
    it('create a Geo chart', () => {
        cy.get('[mattooltip="Visualize"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('button.mat-menu-item').contains('Geo').click({force:true});
        cy.contains('GEO').click();
        cy.get('mat-list-item').contains('latitude').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Latitude)"]').trigger('drop');
        cy.get('mat-list-item').contains('longitude').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Longitude)"]').trigger('drop');
        cy.get('mat-chip').contains('latitude').click();
        cy.get('span.mat-select-placeholder').contains('Select Column').click();
        cy.get('span.mat-option-text').contains('latitude').click();
        cy.get('[placeholder="Min"]').type('0');
        cy.get('[placeholder="Max"]').type('100');
        cy.get('span.mat-select-placeholder').contains('No of Ranges').click();
        cy.get('span.mat-option-text').contains('5').click();
        cy.get('span.mat-button-wrapper').contains('APPLY').click();
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(5000);
        cy.get('svg.cluster-pie').should('be.visible');
        cy.get('span.mat-button-wrapper').contains('Save').click({force:true});
        cy.wait(4000);
        cy.get('[placeholder="Report Name"]').type('geosanity');
        cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
        cy.wait(20000);
        cy.get('input[placeholder="Search & enter"]').type('sanity').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','geosanity');
        cy.wait(8000);
    });
    it('create an Area chart with dimensions', () => {
        cy.get('[mattooltip="Visualize"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('button.mat-menu-item').contains('Charts').click({force:true});
        cy.get('button.mat-menu-item').contains('Area').click({force:true});
        cy.contains('SALES').click();
        cy.get('mat-list-item').contains('Order_Priority').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (X-Axis)"]').trigger('drop');
        cy.get('mat-list-item').contains('Region').trigger('dragstart');
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
        cy.get('span.mat-button-wrapper').contains('Chart Data').click();
        cy.wait(5000);
        cy.get('span.mat-button-wrapper').contains('Cancel').click();
        cy.get('span.mat-button-wrapper').contains('Save').click({force:true});
        cy.wait(4000);
        cy.get('[placeholder="Report Name"]').type('dimsanity');
        cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
        cy.wait(20000);
        cy.get('input[placeholder="Search & enter"]').type('sanity').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','dimsanity')
        cy.wait(8000);

    })
    
    it('create a Simple chart of dynamic type', () => {
        cy.get('[mattooltip="Visualize"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Simple').click({ force: true });
        cy.get('span.mat-button-wrapper').contains('Add Content').click();
        cy.wait(4000);
        cy.get('span.mat-select-placeholder').contains('Table').click();
        cy.get('span.mat-option-text').contains('sales').click();
        cy.get('.ui-dropdown-label').contains('Column').click({ force: true });
        cy.wait(2000);
        cy.get('li').contains('Profit').click({ force: true });
        // cy.get('[label="Font Weight"]').click();
        // cy.get('span.mat-option-text').contains('bold').click();
        cy.get('[style="flex-direction: column; box-sizing: border-box; display: flex; flex: 1 1 0%;"] > :nth-child(3) > .mat-primary > .mat-button-wrapper').click();
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(5000);
        cy.get('span.mat-button-wrapper').contains('Save').click({force:true});
        cy.wait(4000);
        cy.get('[placeholder = "Report Name"]').type('simplereportsanity');
        cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
        cy.wait(20000);
        cy.get('input[placeholder="Search & enter"]').type('sanity').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','simplereportsanity')
        cy.wait(8000);
    });
    it('Create a report with transform workspace', () => {
        cy.get('[mattooltip="Visualize"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.wait(3000);
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('button.mat-menu-item').contains('Charts').click({force:true});
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Area').click({force:true});
        cy.wait(5000);
        cy.contains('SALESTRANSFORMWKSP').click();
        cy.get('mat-list-item').contains('Region').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (X-Axis)"]').trigger('drop');
        cy.get('mat-list-item').contains('Profit').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Y-Axis)"]').trigger('drop');
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(5000);
        cy.get('svg')
            .should('be.visible')
            .and(rect => {
                expect(rect.height()).to.be.greaterThan(200)
            });
        cy.get('span.mat-button-wrapper').contains('Chart Data').click();
        cy.wait(5000);
        cy.get('span.mat-button-wrapper').contains('Cancel').click();
        cy.get('span.mat-button-wrapper').contains('Save').click({force:true});
        cy.wait(4000);
        cy.get('[placeholder="Report Name"]').type('transformwkspsanity');
        cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
        cy.wait(20000);
        cy.get('input[placeholder="Search & enter"]').type('sanity').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','transformwkspsanity')
        cy.wait(8000); 

    });
    it('Create a report with sql workspace', () => {
        cy.get('[mattooltip="Visualize"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.wait(3000);
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('button.mat-menu-item').contains('Charts').click({force:true});
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Area').click({force:true});
        cy.wait(5000);
        cy.contains('SQLWKSP').click();
        cy.get('mat-list-item').contains('TABLE_NAME').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (X-Axis)"]').trigger('drop');
        cy.get('mat-list-item').contains('DATA_TYPE').trigger('dragstart');
        cy.get('[placeholder = "Drag and Drop Data Model (Y-Axis)"]').trigger('drop');
        cy.get('span.mat-button-wrapper').contains('Render').click();
        cy.wait(5000);
        cy.get('svg')
            .should('be.visible')
            .and(rect => {
                expect(rect.height()).to.be.greaterThan(200)
            })
        cy.get('span.mat-button-wrapper').contains('Chart Data').click();
        cy.wait(5000);
        cy.get('span.mat-button-wrapper').contains('Cancel').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('Save').click({force:true});
        cy.wait(4000);
        cy.get('[placeholder="Report Name"]').type('sqlsanity');
        cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
        cy.wait(20000);
        cy.get('input[placeholder="Search & enter"]').type('sanity').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','sqlsanity')
        cy.wait(8000); 

    });
    it('Edit a report', () => {
        cy.get('[mattooltip="Visualize"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.get('input[placeholder="Search & enter"]').type('sanity').type('{enter}');
        cy.wait(5000);
        cy.get('td.mat-cell').contains('linesanity').click();
        cy.get('span.mat-button-wrapper').contains('Edit').click();
        cy.get('mat-chip').contains('SUM-(Discount)').click();
        cy.get('mat-select').contains('Sum').click();
        cy.get('mat-option').contains('Count').click();
        cy.get('span.mat-button-wrapper').contains('APPLY').click();
        cy.wait(5000);
        cy.get('span.mat-button-wrapper').contains('RENDER').click();
        cy.wait(5000);
        cy.get('svg')
            .should('be.visible');
        cy.get('path').should('have.class', 'line');
        cy.get('span.mat-button-wrapper').contains('Save').click({force:true});
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
        cy.wait(10000);
        cy.get('input[placeholder="Search & enter"]').type('sanity').type('{enter}');
        cy.wait(5000);
        cy.get('td').should('include.text','linesanity')

    });
})