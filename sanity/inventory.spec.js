describe('Home page', () => {
    it('successfully loads', () => {
        cy.visit('http://192.168.70.19:8080/dataken');
        cy.wait(2000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
    })

    it('create a cloud and virt profile', () => {
        cy.get('[mattooltip="Monitor"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Inventory').click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Compute').click();
        cy.wait(2000);
        cy.get('button.mat-menu-item').contains('Physical').click();
        cy.wait(4000);
        cy.get('td').contains('192.168.70.75').click();
        cy.get('td').contains('192.168.70.75')
        .parent()
        .find('p-tablecheckbox')
        .click({multiple : true});
        cy.wait(3000);
        // cy.get('span.mat-button-wrapper').contains('Install Agent').click();
        // cy.get('span.mat-button-wrapper').contains('Ok').click();
        cy.get('.mat-tab-label-content').contains('Endpoint List (192.168.70.74)').click();
        cy.wait(4000);
        cy.get('th').should('include.text','Node Name');
        cy.get('th').should('include.text','Endpoint Description');
        cy.get('th').should('include.text','Endpoint Source');
        cy.get('th').should('include.text','Admin Status');
        cy.get('td').contains('ifc10060 VLAN #60').click();
        cy.wait(8000);
        cy.get('div').should('include.text','Ifc10060 VLAN #60 Details');
        cy.get('h3').should('include.text','Server Disk Bytes/Inode Usage');
        cy.get('h3').contains('Memory-Usage')
        .parent()
        .should('have.class','report-content');
        cy.wait(5000);
        cy.get('.mat-tab-label-content').contains('Alerts').click();
        cy.wait(4000);
        // cy.get('th').should('include.text','Node Name');
        // cy.get('th').should('include.text','Endpoint Description');
        // cy.get('th').should('include.text','Endpoint Source');
        // cy.get('th').should('include.text','Admin Status');
        cy.get('.mat-tab-label-content').contains('BotAction Logs').click();
        cy.wait(4000);
        // cy.get('th').should('include.text','Node Name');
        // cy.get('th').should('include.text','Endpoint Description');
        // cy.get('th').should('include.text','Endpoint Source');
        // cy.get('th').should('include.text','Admin Status');
        

    });
    xit('should show metrics for storage', () =>{
        cy.get('[mattooltip="Monitor"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Inventory').click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Storage').click();
        cy.wait(2000);
        cy.get('td').contains('192.168.70.202').click();
        cy.get('.mat-tab-label-content').contains('Endpoint List (192.168.70.202)').click();
        cy.wait(4000);
        cy.get('th').should('include.text','Node Name');
        cy.get('th').should('include.text','Endpoint Description');
        cy.get('th').should('include.text','Endpoint Source');
        cy.get('th').should('include.text','Admin Status');
        cy.get('td').contains('/vol/vol0/.snapshot').click();
        cy.wait(3000);
        cy.get('div').should('include.text','/Vol/Vol0/.Snapshot Details');
        cy.get('th').should('include.text','reportId');
        cy.get('th').should('include.text','reportName');
        cy.wait(5000);
        cy.get('.mat-tab-label-content').contains('Alerts').click();
        cy.wait(4000);
        // cy.get('th').should('include.text','Node Name');
        // cy.get('th').should('include.text','Endpoint Description');
        // cy.get('th').should('include.text','Endpoint Source');
        // cy.get('th').should('include.text','Admin Status');
        cy.get('.mat-tab-label-content').contains('BotAction Logs').click();
        cy.wait(4000);
        // cy.get('th').should('include.text','Node Name');
        // cy.get('th').should('include.text','Endpoint Description');
        // cy.get('th').should('include.text','Endpoint Source');
        // cy.get('th').should('include.text','Admin Status');
        

    });  
    xit('should show metrics for virtual inventory', () =>{
        cy.get('[mattooltip="Monitor"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Inventory').click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Compute').click();
        cy.wait(2000);
        cy.get('button.mat-menu-item').contains('Virtual').click();
        cy.wait(4000);
        cy.get('td').contains('13.59.196.251').click();
        cy.wait(8000);
        cy.get('h3').should('include.text','CPU-Usage');
        cy.get('h3').should('include.text','Memory-Usage');
        cy.get('.gridster-header').contains('CPU-Usage').children('.gridster-content').should('contains','app-plot-chart');
        cy.get('.mat-tab-label-content').contains('Endpoint List (13.59.196.251)').click();
        cy.wait(4000);
        cy.get('th').should('include.text','Node Name');
        cy.get('th').should('include.text','Endpoint Description');
        cy.get('th').should('include.text','Endpoint Source');
        cy.get('th').should('include.text','Admin Status');
        cy.get('td').contains('Ifc8 (Slot: 1 Port: 8)').click();
        cy.wait(3000);
        cy.get('div').should('include.text','Ifc8 (Slot: 1 Port: 8) Details');
        cy.get('h3').should('include.text','EndpointNetworkUsage');
        cy.wait(5000);
        cy.get('.mat-tab-label-content').contains('Alerts').click();
        cy.wait(4000);
        // cy.get('th').should('include.text','Node Name');
        // cy.get('th').should('include.text','Endpoint Description');
        // cy.get('th').should('include.text','Endpoint Source');
        // cy.get('th').should('include.text','Admin Status');
        cy.get('.mat-tab-label-content').contains('BotAction Logs').click();
        cy.wait(4000);
        // cy.get('th').should('include.text','Node Name');
        // cy.get('th').should('include.text','Endpoint Description');
        // cy.get('th').should('include.text','Endpoint Source');
        // cy.get('th').should('include.text','Admin Status');
        

    });  
    xit('should show metrics for storage', () =>{
        cy.get('[mattooltip="Monitor"] > .mat-button-wrapper > .fa').click();
        cy.get('span.mat-button-wrapper').contains('Inventory').click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Storage').click();
        cy.wait(2000);
        cy.get('td').contains('192.168.70.202').click();
        cy.get('.mat-tab-label-content').contains('Endpoint List (192.168.70.202)').click();
        cy.wait(4000);
        cy.get('th').should('include.text','Node Name');
        cy.get('th').should('include.text','Endpoint Description');
        cy.get('th').should('include.text','Endpoint Source');
        cy.get('th').should('include.text','Admin Status');
        cy.get('td').contains('/vol/vol0/.snapshot').click();
        cy.wait(3000);
        cy.get('div').should('include.text','/Vol/Vol0/.Snapshot Details');
        cy.get('th').should('include.text','reportId');
        cy.get('th').should('include.text','reportName');
        cy.wait(5000);
        cy.get('.mat-tab-label-content').contains('Alerts').click();
        cy.wait(4000);
        // cy.get('th').should('include.text','Node Name');
        // cy.get('th').should('include.text','Endpoint Description');
        // cy.get('th').should('include.text','Endpoint Source');
        // cy.get('th').should('include.text','Admin Status');
        cy.get('.mat-tab-label-content').contains('BotAction Logs').click();
        cy.wait(4000);
        // cy.get('th').should('include.text','Node Name');
        // cy.get('th').should('include.text','Endpoint Description');
        // cy.get('th').should('include.text','Endpoint Source');
        // cy.get('th').should('include.text','Admin Status');
        

    });  
    })
