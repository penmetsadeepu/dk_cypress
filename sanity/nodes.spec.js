describe('Dataingest creation ', () => {
    beforeEach('successfully loads', () => {
      cy.visit('http://192.168.70.19:8080/dataken');
      cy.wait(3000);
      cy.get('#username').type('admin');
      cy.get('#password').type('admin123');
      cy.get('.submit').click();
      cy.wait(10000);
    });

    it('Checking Down nodes', () =>{
        // clicking visualize button
        cy.get('.fa.fa-bar-chart.mat-icon.notranslate.material-icons.mat-icon-no-color').click();
        cy.wait(2000);
        cy.get('[placeholder = "Search & enter"]').type('EnterpriseDashboard{enter}');
        cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin').click();
        cy.get('.mat-button-wrapper').contains('Favourite').click();
        cy.wait(3000);
        //Clicking Monitor button
        cy.get('mat-icon.fa.fa-heartbeat.mat-icon.notranslate.material-icons.mat-icon-no-color').click({ multiple: true });
        //click on routers which are down
    cy.get('[style="display: block; transform: translate3d(0px, 0px, 0px); width: 126.129px; height: 67.6774px;"]', { timeout: 60000}).find('[style="padding-right: 4px; color: rgb(255, 0, 0); font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 70000}).as('numberText').click({ multiple: true });
    cy.wait(2000);
    cy.get('.mat-button-wrapper').contains('Dashboard').click();
    cy.wait(2000);
    //click on switches which are down
    cy.get('[style="display: block; transform: translate3d(146px, 0px, 0px); width: 126.129px; height: 67.6774px;"]', { timeout: 60000}).find('[style="padding-right: 4px; color: rgb(255, 0, 0); font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 70000}).as('numberText').click({ multiple: true });
    cy.wait(2000);
    cy.get('.mat-button-wrapper').contains('Dashboard').click();
    cy.wait(2000);
    //click on firewall which are down
    cy.get('[style="display: block; transform: translate3d(292px, 0px, 0px); width: 126.129px; height: 67.6774px;"]', { timeout: 60000}).find('[style="padding-right: 4px; color: rgb(255, 0, 0); font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 70000}).as('numberText').click({ multiple: true });
    cy.wait(2000);
    cy.get('.mat-button-wrapper').contains('Dashboard').click();
    cy.wait(2000);
    //click on servers which are down
    cy.get('[style="display: block; transform: translate3d(438px, 0px, 0px); width: 126.129px; height: 67.6774px;"]', { timeout: 60000}).find('[style="padding-right: 4px; color: rgb(255, 0, 0); font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 70000}).as('numberText').click({ multiple: true });
    cy.wait(2000);
    cy.get('.mat-button-wrapper').contains('Dashboard').click();
    cy.wait(2000);
    //click on webservers which are down
    cy.get('[style="display: block; transform: translate3d(0px, 88px, 0px); width: 126.129px; height: 67.6774px;"]', { timeout: 60000}).find('[style="padding-right: 4px; color: rgb(255, 0, 0); font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 70000}).as('numberText').click({ multiple: true });
    cy.wait(2000);
    cy.get('.mat-button-wrapper').contains('Dashboard').click();
    cy.wait(2000);
    //click on databases which are down
    cy.get('[style="display: block; transform: translate3d(230px, 138px, 0px); width: 126.129px; height: 67.6774px;"]', { timeout: 60000}).find('[style="padding-right: 4px; color: rgb(255, 0, 0); font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 70000}).as('numberText').click({ multiple: true });
    cy.wait(2000);
    cy.get('.mat-button-wrapper').contains('Dashboard').click();
    cy.wait(2000);
    //click on massage_brokers which are down
    cy.get('[style="display: block; transform: translate3d(292px, 88px, 0px); width: 126.129px; height: 67.6774px;"]', { timeout: 60000}).find('[style="padding-right: 4px; color: rgb(255, 0, 0); font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 70000}).as('numberText').click({ multiple: true });
    cy.wait(2000);
    cy.get('.mat-button-wrapper').contains('Dashboard').click();
    cy.wait(2000);
    //click on caches which are down
    cy.get('[style="display: block; transform: translate3d(438px, 88px, 0px); width: 126.129px; height: 67.6774px;"]', { timeout: 60000}).find('[style="padding-right: 4px; color: rgb(255, 0, 0); font-size: 20px; font-weight: bold; cursor: pointer;"]', {timeout: 70000}).as('numberText').click({ multiple: true });
    cy.wait(2000);
    cy.get('.mat-button-wrapper').contains('Dashboard').click();
    cy.wait(2000);

  });
});