describe('View the workspace created in datasource ', () => {
      
    beforeEach('successfully loads', () => {
        cy.visit('http://192.168.70.13:8080/dataken');
        cy.wait(2000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
        cy.wait(2000);
      });
      it('check the created File datasource in workspace ', () => {
       //View File Datasource   
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Intelligence').click();
        cy.get('span.mat-button-wrapper').contains('Workspace').click();
        cy.get('mat-expansion-panel-header').contains('File Datasources').click();
        cy.get('.mat-list-item-content').contains('csvtest').rightclick();
      })
      it('View the RDBMS datasource in workspace ', () => {
        //View RDBMS Datasource   
         cy.get('button').contains('menu').click();
         cy.get('button').contains('Intelligence').click();
         cy.get('span.mat-button-wrapper').contains('Workspace').click();
         cy.get('mat-expansion-panel-header').contains('RDBMS Datasources').click();
         cy.get('.mat-list-item-content').contains('hbasetest').rightclick();
         //cy.get('a.nr-star-inserted').contains(Edit/View).click();
         cy.get('a').contains('Edit/View').click({force:true});
         
      })
      it('View the Streaming datasource in workspace ', () => {
          //View Streaming Datasource   
         cy.get('button').contains('menu').click();
         cy.get('button').contains('Intelligence').click();
         cy.get('span.mat-button-wrapper').contains('Workspace').click();
         cy.get('mat-expansion-panel-header').contains('Stream Datasources').click();
         cy.get('.mat-list-item-content').contains('Applications').rightclick();
         cy.get('a').contains('Edit/View').click({force:true});

      })

    })