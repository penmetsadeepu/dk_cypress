import login from '~cypress/integration/fixtures/login.json';

describe('login page', () => {

        it('login page',() => {
        cy.visit('http://192.168.70.19:8080/dataken');
        cy.wait(4000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
        })
        
              })
    
