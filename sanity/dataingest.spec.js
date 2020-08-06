describe('Dataingest creation ', () => {
      
    beforeEach('successfully loads', () => {
        cy.visit('http://192.168.70.13:8080/dataken');
        //cy.visit('http://159.89.169.89:8080/dataken');
        //cy.visit('http://3.20.148.190:8080/dataken');
        //cy.visit('http://192.168.70.21:8080/dataken');
        cy.wait(8000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
        cy.wait(3000);
      });
    
  //NOTE:-Need to change configured ip's & Ports in dataken application EX:-For my server my database host is "192.168.70.19"
  //need to change ip for every customized ips in database host
      /*it('=={Creating Hadoop DataIngest}==', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Intelligence').click();
        cy.get('span.mat-button-wrapper').contains('Data Ingest').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('img[src="../../dataken/assets/images/hadoop.png"]').trigger('mouseover');
        cy.contains('Connect').click();
        cy.wait(4000);
        cy.get('[placeholder="Name"]').type('hadooptest');
        cy.get('[placeholder="Description"]').type('hadooptest');
        cy.get('[placeholder="Data Format"]').click();
        cy.contains('CSV').click();
        cy.get('[placeholder="Delimiter"]').click();
        cy.contains(',').click();
        cy.get('[placeholder="Quote"]').click();
        cy.contains('"').click();
        cy.get('[placeholder="Listener path"]').clear();
        cy.get('[placeholder="Listener path"]').type('hdfs://namenode:8020/hadooptest');
        const yourFixturePath = 'user.csv';
        cy.get('input[type=file]').attachFile(yourFixturePath);
        cy.wait(5000);
        cy.get('[placeholder="Batch Interval"]').type('5000');
        cy.get('[placeholder="Window Interval"]').type('10000');
        cy.get('[placeholder="Sliding Interval"]').type('10000');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.wait(10000);
        cy.get('input[placeholder="Search & enter"]').type('hadooptest').type('{enter}');
        cy.wait(5000);
        cy.get('td.mat-cell').should('include.text', 'hadooptest');
        cy.wait(8000);
      });
    
      it('=={Creating Hadoop dataIngest}==', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Intelligence').click();
        cy.get('span.mat-button-wrapper').contains('Data Ingest').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('img[src="../../dataken/assets/images/hadoop.png"]').trigger('mouseover');
        cy.contains('Connect').click();
        cy.wait(4000);
        cy.get('[placeholder="Name"]').type('hdfslistener');
        cy.get('[placeholder="Description"]').type('hdfslistener');
        cy.get('[placeholder="Data Format"]').click();
        cy.contains('CSV').click();
        cy.get('[placeholder="Delimiter"]').click();
        cy.contains(',').click();
        cy.get('[placeholder="Quote"]').click();
        cy.contains('"').click();
        cy.get('[placeholder="Listener path"]').clear();
        cy.get('[placeholder="Listener path"]').type('hdfs://namenode:8020/hdfslistener');
        const yourFixturePath = 'user.csv';
        cy.get('input[type=file]').attachFile(yourFixturePath);
        cy.wait(5000);
        cy.get('[placeholder="Batch Interval"]').type('5000');
        cy.get('[placeholder="Window Interval"]').type('10000');
        cy.get('[placeholder="Sliding Interval"]').type('10000');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.wait(10000);
        cy.get('input[placeholder="Search & enter"]').type('hdfslistener').type('{enter}');
        cy.wait(5000);
        cy.get('td.mat-cell').should('include.text', 'hdfslistener');
        cy.wait(8000);
      });
    
      it('=={Creating Hbase DataIngest}==', () => {
            cy.get('button').contains('menu').click();
            cy.get('button').contains('Intelligence').click();
            cy.get('span.mat-button-wrapper').contains('Data Ingest').click();
            cy.get('span.mat-button-wrapper').contains('Create').click();
            cy.get('img[src="../../dataken/assets/images/hbase.png"]').trigger('mouseover');
            cy.contains('Connect').click();
            cy.wait(4000);
            cy.get('[placeholder="Name"]').type('hbasetest');
            cy.get('[placeholder="Description"]').type('hbasetest');
            //cy.get('[placeholder="Database Host"]').type('3.20.148.190');
            //cy.get('[placeholder="Database Host"]').type('159.89.169.89');
            cy.get('[placeholder="Database Host"]').type('192.168.70.13');
            //cy.get('[placeholder="Database Host"]').type('192.168.70.21');
            cy.get('[placeholder="Database Port"]').type('2181');
            cy.contains('Test').click();
            cy.wait(5000);
            cy.contains('Save').click();
            cy.wait(8000);
            cy.get('input[placeholder="Search & enter"]').type('hbasetest').type('{enter}');
            cy.wait(5000);
    
        })*/
    
      it('=={Creating File DataSource CSV Upload }==', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Intelligence').click();
        cy.get('span.mat-button-wrapper').contains('Data Ingest').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('img[src="../../dataken/assets/images/csv.png"]').trigger('mouseover');
        cy.contains('Connect').click();
        cy.wait(4000);
        const yourFixturePath = 'user.csv';
        cy.get('input[type=file]').attachFile(yourFixturePath);
        cy.wait(10000);
        cy.get('[placeholder="Name"]').type('csvtest');
        cy.get('[placeholder="Description"]').type('csvtest');
        cy.get('[placeholder="Field Separator"]').click();
        cy.contains(',').click();
        cy.get('[placeholder="Quote"]').click();
        cy.contains('"').click();
        cy.wait(10000);
        cy.get('table').should('be.visible');
        cy.get('p-table').should('have.class','prime-table');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.wait(10000);
        cy.get('input[placeholder="Search & enter"]').type('csvtest').type('{enter}');
        cy.wait(5000);
        cy.get('td.mat-cell').should('include.text', 'csvtest');
        cy.wait(8000);
      })
    
    
     /* it('=={Creating Mysql DataIngest}==', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Intelligence').click();
        cy.get('span.mat-button-wrapper').contains('Data Ingest').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('img[src="../../dataken/assets/images/mysql.png"]').trigger('mouseover');
        cy.contains('Connect').click();
        cy.wait(4000);
        cy.get('[placeholder="Name"]').type('mysqltest');
        cy.get('[placeholder="Description"]').type('mysqltest');
        //cy.get('[placeholder="Database Host"]').type('3.20.148.190');
        //cy.get('[placeholder="Database Host"]').type('159.89.169.89');
        //cy.get('[placeholder="Database Host"]').type('192.168.70.21');
        cy.get('[placeholder="Database Host"]').type('192.168.70.13');
        cy.get('[placeholder="Database Port"]').type('3306');
        cy.get('[placeholder="Database Username"]').type('dataken');
        cy.get('[placeholder="Database Passsword"]').type('dataken');
        cy.contains('Test').click();
        cy.wait(10000);
        cy.contains('Save').click();
        cy.wait(10000);
        cy.get('input[placeholder="Search & enter"]').type('mysqltest').type('{enter}');
        cy.wait(5000);
        cy.get('td.mat-cell').should('include.text', 'mysqltest');
        cy.wait(8000);
      })
      it('=={Creating Csv File for Sankey DataIngest}==', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Intelligence').click();
        cy.get('span.mat-button-wrapper').contains('Data Ingest').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('img[src="../../dataken/assets/images/csv.png"]').trigger('mouseover');
        cy.contains('Connect').click();
        cy.wait(4000);
        const yourFixturePath = 'metric.csv';
        cy.get('input[type=file]').attachFile(yourFixturePath);
        cy.wait(20000);
        cy.get('table').should('be.visible');
        cy.get('p-table').should('have.class','prime-table');
        cy.get('[placeholder="Name"]').type('sankey');
        cy.get('[placeholder="Description"]').type('sankey');
        cy.get('[placeholder="Field Separator"]').click();
        cy.contains(',').click();
        cy.get('[placeholder="Quote"]').click();
        cy.contains('"').click();
        cy.wait(3000);
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.wait(10000);
        cy.get('input[placeholder="Search & enter"]').type('sankey').type('{enter}');
        cy.wait(5000);
        cy.get('td.mat-cell').should('include.text', 'sankey');
        cy.wait(8000);
      })
      it('=={Creating Upload a Csv File For Geo DataIngest}==', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Intelligence').click();
        cy.get('span.mat-button-wrapper').contains('Data Ingest').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('img[src="../../dataken/assets/images/csv.png"]').trigger('mouseover');
        cy.contains('Connect').click();
        cy.wait(4000);
        const yourFixturePath = 'geo.csv';
        cy.get('input[type=file]').attachFile(yourFixturePath);
        cy.wait(10000);
        cy.get('table').should('be.visible');
        cy.get('p-table').should('have.class','prime-table');
        cy.get('[placeholder="Name"]').type('geo');
        cy.get('[placeholder="Description"]').type('geo');
        cy.get('[placeholder="Field Separator"]').click();
        cy.contains(',').click();
        cy.get('[placeholder="Quote"]').click();
        cy.contains('"').click();
        cy.wait(3000);
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.wait(10000);
        cy.get('input[placeholder="Search & enter"]').type('geo').type('{enter}');
        cy.wait(5000);
        cy.get('td.mat-cell').should('include.text', 'geo');
        cy.wait(8000);
      })
      it('=={Editing the DataIngest}==', () =>{
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Intelligence').click();
        cy.get('span.mat-button-wrapper').contains('Data Ingest').click();
        cy.get('input[placeholder="Search & enter"]').type('csvtest').type('{enter}');
        cy.wait(5000);
        cy.get('td.mat-cell').contains('csvtest').click();
        cy.get('span.mat-button-wrapper').contains('Edit').click();
        cy.wait(3000);
        cy.get('[placeholder="Description"]').clear();
        cy.get('[placeholder="Description"]').type('test');
        cy.wait(5000);
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.wait(10000);
        cy.get('input[placeholder="Search & enter"]').type('csvtest').type('{enter}');
        cy.wait(5000);
        cy.get('td.mat-cell').should('include.text', 'csvtest');
        cy.wait(8000);
    
    
      })*/
    })
    
  
  