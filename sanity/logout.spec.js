describe('logout ', () => {
      
    beforeEach('successfully loads', () => {
        cy.visit('http://192.168.70.13:8080/dataken');
        cy.wait(4000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
        cy.wait(3000);
      });


      it('logout ', () => {
        cy.get('.fa.fa-sign-out.mat-icon.notranslate.material-icons.mat-icon-no-color').click();  

      })
    })