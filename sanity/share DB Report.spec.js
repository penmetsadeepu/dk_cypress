describe('Reports Creation', () => {

    beforeEach('successfully loads', () => {
        //   cy.visit('http://localhost:4200/');
        cy.visit('http://192.168.70.19:8080/dataken');
        cy.wait(2000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
      //  cy.wait(4000);
    });


   it('sharing Dashboard', () => {
        // clicking visualize button
        cy.get('.fa.fa-bar-chart.mat-icon.notranslate.material-icons.mat-icon-no-color').click();
        cy.wait(2000)
        // Clicking Search and Enter field and searching for lineTF
        cy.get('[placeholder = "Search & enter"]').type('sampledashboard{enter}');
        //cy.get('.ui-button-icon-left.ui-clickable.pi.pi-refresh').click();
        cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin').click();
        cy.get('.mat-button-wrapper').contains('Share').click();
        cy.wait(2000);
        //Sharing Globally 
        //cy.get('[type=":.mat-checkbox-label"]').check() 
        cy.get('.mat-checkbox-label').contains('Global').click();
        cy.wait(2000);
        cy.get('.mat-button-wrapper').contains('Save').click();
        cy.wait(2000);

        
        //Unshare Globally
        /* cy.get('[placeholder = "Search & enter"]').type('sampledashboard');
        cy.get('.ui-button-icon-left.ui-clickable.pi.pi-refresh').click();
        cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin').click();
        cy.wait(2000);
        cy.get('.mat-button-wrapper').contains('UnShare').click();
        cy.get('[type="checkbox"]').uncheck(['.mat-checkbox-inner-container']);
        cy.get('.mat-checkbox-label').contains('Global').click();
       // .parent()
        //.find('p-checkbox')
       // .click({multiple : true});
        cy.wait(2000);
        cy.get('.mat-button-wrapper').contains('Save').click();*/

       
    }); 
   it('sharing Reports', () => {
        cy.get('.fa.fa-bar-chart.mat-icon.notranslate.material-icons.mat-icon-no-color').click();
        cy.wait(2000)
        cy.get('.mat-button-wrapper').contains('Report').click();
        cy.wait(4000);
        // Clicking Search and Enter field and searching for 
        cy.get('[placeholder = "Search & enter"]').type('Samplereport{enter}');
       // cy.get('.ui-button-icon-left.ui-clickable.pi.pi-refresh').click();
        cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin').click();
       cy.get('.mat-button-wrapper').contains('Share').click();
        cy.wait(5000);
        //Sharing Globally
        cy.get('.mat-checkbox-label').contains('Global').click();
        cy.get('.mat-button-wrapper').contains('Save').click();
        cy.wait(2000);
        /*//unshare Globally
        cy.get('[placeholder = "Search & enter"]').type('lineTF');
        cy.get('.ui-button-icon-left.ui-clickable.pi.pi-refresh').click();
        cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin').click();
        cy.get('.mat-button-wrapper').contains('UnShare').click();
        cy.wait(3000);
        cy.get('#mat-checkbox-51-input').uncheck();
        cy.get('.mat-button-wrapper').contains('Save').click();*/



    });


});

