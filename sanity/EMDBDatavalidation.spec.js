describe('Reports Creation', () => {

    beforeEach('successfully loads', () => {
        cy.visit('http://192.168.70.19:8080/dataken');
        cy.wait(2000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
        cy.wait(10000);
    });


    it.only('View Dashboard & Verify all graphs in DB are rendered or not', () => {
        // clicking visualize button
        cy.get('.fa.fa-bar-chart.mat-icon.notranslate.material-icons.mat-icon-no-color').click();
        cy.wait(1000)
        // Clicking Search and Enter field and searching for EnterpriseDashboard
        cy.get('[placeholder = "Search & enter"]').type('EnterpriseDashboard');
        cy.get('.ui-button-icon-left.ui-clickable.pi.pi-refresh').click();
        cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin').click();
        cy.wait(4000);
        cy.get('.mat-button-wrapper').contains('View').click();
        cy.wait(10000);
    //Verify The graphs are plotted and the data is correct
    //NetworkElements-Availability graph
        cy.get('gridster-item').should('include.text', 'NetworkElements-Availability');
        cy.get('svg').should('be.visible');
        cy.get('.bottom-label').should('include.text', 'connState');
        cy.get('.left-label').should('include.text', 'ip');
        cy.wait(2000);
        //Top-5-Processes-by-cpu-usage graph
        cy.get('gridster-item').should('include.text', 'Top-5-Processes-by-cpu-usage');
        cy.get('rect').should('include.class','background', { timeout: 2000});
        cy.get('svg').should('be.visible', { timeout: 2000});
        //Top-5-Processes-by-memory-usage graph
        cy.get('gridster-item').should('include.text', 'Top-5-Processes-by-memory-usage');
        cy.get('rect').should('include.class','background', { timeout: 2000});
        cy.get('svg').should('be.visible', { timeout: 2000});
        //Top-Devices-By-Bandwidth graph
        cy.get('gridster-item').should('include.text', 'Top-Devices-By-Bandwidth');
        cy.get('rect').should('include.class','background', { timeout: 2000});
        cy.get('svg').should('be.visible', { timeout: 2000});
        //Critical-Events-Report table
        cy.get('gridster-item').should('include.text', 'Critical-Events-Report');
        cy.get('th').should('include.text','Summary');
        cy.get('th').should('include.text','severity');
        cy.get('td').contains('CRITICAL');
        cy.get('th').should('include.text','Modified Time');
        //const todaysDate = Cypress.moment().format('yyyy-MM-dd HH:mm:ss');
        //const Date = Cypress.moment().format('dd-MMM-yyyy HH:mm:ss')
        //cy.get('[aria-describedby="cdk-describedby-message-167"]', { timeout: 10000}).should('contains',todaysDate);
        //cy.get('th').should('contain', 'Modified Time: ' + todaysDate);
        cy.get('th').should('include.text','Created Time');
        cy.get('th').should('include.text','Is Alert Cleared');
        cy.get('td').contains('false');
        cy.get('td').contains('true');
        cy.get('th').should('include.text','Count');
        cy.get('th').should('include.text','Node Type');
        cy.get('td').contains('NETWORK_ELEMENT');
        cy.get('td').contains('SERVER');
        cy.get('td').contains('APPLICATION');
        cy.wait(5000);
    });
});