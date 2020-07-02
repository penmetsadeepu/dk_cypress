describe('Login', () => {

    beforeEach('successfully loads', () => {
        //   cy.visit('http://localhost:4200/');
        cy.visit('http://159.89.169.89:8080/dataken');
        cy.wait(2000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
        cy.wait(6000);
    });
    it('Checking metric collected in topology', () => {
        //Clicking Monitor button
        cy.get('mat-icon.fa.fa-heartbeat.mat-icon.notranslate.material-icons.mat-icon-no-color').click();
        cy.wait(4000);
        cy.get('.mat-button-wrapper').contains('Topology').click();
        cy.wait(4000);
        //cy.get('.vis-network', { timeout: 60000}).contains('192.168.70.177').click();
        cy.get('[placeholder = "Search"]').type('192.168.70.177');
        cy.wait(1000);
        cy.get('.mat-option-text').contains('192.168.70.177').click();
        cy.get('[mattooltip="Render"]').click();
        cy.wait(2000);
        //cy.get('.vis-network').contains(contains('deviceType : FIREWALL')).click();
        

    })
})