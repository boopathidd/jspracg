
describe("testCase", function () {

    it('Verify and Set Current Reporting version', () => {

        cy.visit("http://leaftaps.com/opentaps/control/main");

      cy.get("#username").type("DemoSalesManager");
  
  
      cy.get("#password").type("crmsfa");
  
  
      cy.get(".decorativeSubmit").click();
  
    //  cy.get("#login-submit > .ng-scope").click();
      cy.get("#account").click();
    })
    
    
})