describe('Login page', () => {

    beforeEach('successfully loads', () => {
        //   cy.visit('http://192.168.70.19:8080/dataken');
        cy.visit('http://159.89.169.89:8080/dataken');
        cy.wait(2000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
      //  cy.wait(40000);
    });

    it('Checking Dashboard Portlets', () => {
        // clicking visualize button
        /*cy.get('.fa.fa-bar-chart.mat-icon.notranslate.material-icons.mat-icon-no-color').click();
        cy.wait(2000);
        cy.get('[placeholder = "Search & enter"]').type('EnterpriseDashboard{enter}');
        cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin').click();
        cy.get('.mat-button-wrapper').contains('Favourite').click();
        cy.wait(3000);
        //Clicking Monitor button
        //cy.get('mat-icon.fa.fa-heartbeat.mat-icon.notranslate.material-icons.mat-icon-no-color').click();
        //cy.get('.mat-button-wrapper').contains('Dashboard').click();
       //cy.wait(2000);*/
        
        //clicking on router image:
        //cy.get('img[src="../../dataken/assets/images/topo/router1.png"]').click();
        
       //Clicking on Total no of nodes:
       //cy.get('[style="display: block; transform: translate3d(0px, 0px, 0px); width: 264.516px; height: 150.71px;"]', { timeout: 6000}).find('[style="padding-right: 4px; color: black; font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 7000}).as('numberText').click({ multiple: true });
       //cy.get('.mat-button-wrapper').contains('Dashboard').click();
       //cy.wait(2000);

      
      //clicking on Total no of nodes present in Switch:
       cy.get('[style="display: block; transform: translate3d(285px, 0px, 0px); width: 264.516px; height: 150.71px;"]', { timeout: 6000}).find('[style="padding-right: 4px; color: black; font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 7000}).as('numberText').click({ multiple: true });
       cy.get('.mat-button-wrapper').contains('Dashboard').click();
       cy.wait(2000);
       
       /*//clicking on Total no of nodes present in Firewalls:
       cy.get('[style="display: block; transform: translate3d(569px, 0px, 0px); width: 264.516px; height: 150.71px;"]', { timeout: 6000}).find('[style="padding-right: 4px; color: black; font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 7000}).as('numberText').click({ multiple: true });
       cy.get('.mat-button-wrapper').contains('Dashboard').click();
       cy.wait(2000);
       

       //clicking on Total no of nodes present in Servers:
       cy.get('[style="display: block; transform: translate3d(587px, 0px, 0px); width: 185.645px; height: 107.387px;"]', { timeout: 6000}).find('[style="padding-right: 4px; color: black; font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 7000}).as('numberText').click({ multiple: true });
       cy.get('.mat-button-wrapper').contains('Dashboard').click();
       cy.wait(2000);

       //clicking on Total no of nodes present in Webservers:
       cy.get('[style="display: block; transform: translate3d(0px, 117px, 0px); width: 185.645px; height: 107.387px;"]', { timeout: 6000}).find('[style="padding-right: 4px; color: black; font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 7000}).as('numberText').click({ multiple: true });
       cy.get('.mat-button-wrapper').contains('Dashboard').click();
       cy.wait(2000);

       //clicking on Total no of nodes present in Databases
       cy.get('[style="display: block; transform: translate3d(196px, 117px, 0px); width: 185.645px; height: 107.387px;"]', { timeout: 6000}).find('[style="padding-right: 4px; color: black; font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 7000}).as('numberText').click({ multiple: true });
       cy.get('.mat-button-wrapper').contains('Dashboard').click();
       cy.wait(2000);

       //clicking on Total no of nodes present in Messaging
       cy.get('[style="display: block; transform: translate3d(391px, 117px, 0px); width: 185.645px; height: 107.387px;"]', { timeout: 6000}).find('[style="padding-right: 4px; color: black; font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 7000}).as('numberText').click({ multiple: true });
       cy.get('.mat-button-wrapper').contains('Dashboard').click();
       cy.wait(2000);

       //clicking on Total no of nodes present in Caching
       cy.get('[style="display: block; transform: translate3d(587px, 117px, 0px); width: 185.645px; height: 107.387px;"]', { timeout: 6000}).find('[style="padding-right: 4px; color: black; font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 7000}).as('numberText').click({ multiple: true });
       cy.get('.mat-button-wrapper').contains('Dashboard').click();
       cy.wait(2000);*/
    }); 
  });