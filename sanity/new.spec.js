describe('Dataingest creation ', () => {
    beforeEach('successfully loads', () => {
      cy.visit('/');
      cy.wait(3000);
      cy.get('#username').type('admin');
      cy.get('#password').type('admin123');
      cy.get('.submit').click();
      cy.wait(10000);
    });

    it('Checking Down nodes', () =>{
        // clicking visualize button
        /*cy.get('.fa.fa-bar-chart.mat-icon.notranslate.material-icons.mat-icon-no-color').click();
        cy.wait(2000);
        cy.get('[placeholder = "Search & enter"]').type('EnterpriseDashboard{enter}');
        cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin').click();
        cy.get('.mat-button-wrapper').contains('Favourite').click();
        cy.wait(3000);*/
        //Clicking Monitor button
        cy.get('mat-icon.fa.fa-heartbeat.mat-icon.notranslate.material-icons.mat-icon-no-color').click({ multiple: true });
        cy.get('div.nonsvg.nonsvg')
    cy.get('img[src="../../dataken/assets/images/topo/server1.png"]', { timeout: 60000})
    cy.get('div.nonsvg.nonsvg', { timeout: 60000}).find('[style="padding-right: 4px; color: rgb(255, 0, 0); font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 70000}).as('numberText', 'color', 'rgb(255, 0, 0)').click({ multiple: true });
        //click on routers which are down
    /*cy.get('[style="display: block; transform: translate3d(0px, 0px, 0px); width: 137.742px; height: 78.6452px;"]', { timeout: 60000}).find('[style="padding-right: 4px; color: rgb(255, 0, 0); font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 70000}).as('numberText').should('be.visible');
    cy.get('.completed').should('have.css', 'color', 'rgb(217,217,217)').should('be.visible')
    cy.get('.mat-button-wrapper').contains('Dashboard').click();
    cy.wait(2000);*/
    //click on switches which are down
    /*cy.get('[style="display: block; transform: translate3d(148px, 0px, 0px); width: 137.742px; height: 78.6452px;"]', { timeout: 60000}).find('[style="padding-right: 4px; color: black; font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 70000}).as('numberText').should('have.css', 'color', 'rgb(255, 0, 0)').should('be.visible');
    //cy.get('.mat-button-wrapper').contains('Dashboard').click();
    cy.wait(2000);
    //click on firewall which are down
    cy.get('[style="display: block; transform: translate3d(295px, 0px, 0px); width: 137.742px; height: 78.6452px;"]', { timeout: 60000}).find('[style="padding-right: 4px; color: black; font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 70000}).as('numberText').should('have.css', 'color', 'rgb(255, 0, 0)').should('be.visible');
    //cy.get('.mat-button-wrapper').contains('Dashboard').click();
    cy.wait(2000);*/
    //click on servers which are down
   // cy.get('[style="display: block; transform: translate3d(451px, 0px, 0px); width: 140.484px; height: 80.2903px;"]', { timeout: 60000}).find('[style="padding-right: 4px; color: black; font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 70000}).as('numberText').click({ multiple: true });

    //cy.get('.mat-button-wrapper').contains('Dashboard').click();
    //cy.wait(2000);
});
});