describe('Login', () => {

    beforeEach('successfully loads', () => {
        //   cy.visit('http://localhost:4200/');
        cy.visit('http://192.168.70.19:8080/dataken');
        cy.wait(2000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
      //  cy.wait(4000);
    });
    it('Checking Dashboard Portlets', () => {
        // clicking visualize button
        cy.get('.fa.fa-bar-chart.mat-icon.notranslate.material-icons.mat-icon-no-color').click();
        cy.wait(2000);
        cy.get('[placeholder = "Search & enter"]').type('EnterpriseDashboard{enter}');
        cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin').click();
        cy.get('.mat-button-wrapper').contains('Favourite').click();
        cy.wait(3000);
        //Clicking Monitor button
        cy.get('mat-icon.fa.fa-heartbeat.mat-icon.notranslate.material-icons.mat-icon-no-color').click();
        
        //clicking on router
        cy.get('img[src="../../dataken/assets/images/topo/router1.png"]').click();  
       // cy.get('[style="padding-right: 4px; color: black; font-size: 20px; font-weight: bold; cursor: pointer;"><!----><!----><!----><div _ngcontent-uek-c29"]').click();
       /* cy.get('input').should(($input) => {
          const val = $input.val()
          expect(val).to.match(/0/)
          expect(val).to.include('0')
          expect(val).not.to.include('bar')*/

})
       //clicking on Switch
       cy.get('img[src="../../dataken/assets/images/topo/switch1.png"]').click();
       
       //clicking on Firewall
       cy.get('img[src="../../dataken/assets/images/topo/firewall1.png"]').click();

       //clicking on Servers
       cy.get('img[src="../../dataken/assets/images/topo/server1.png"]').click();

       //clicking on webserver
       cy.get('img[src="../../dataken/assets/images/topo/webserver1.png"]').click();

       //clicking on Database
       cy.get('img[src="../../dataken/assets/images/topo/database1.png"]').click();

       //clicking on Messaging
       cy.get('img[src="../../dataken/assets/images/topo/messaging1.png"]').click();

       //click on Caching
       cy.get('img[src="../../dataken/assets/images/topo/caching1.png"]').click();
        
        
    });



 


