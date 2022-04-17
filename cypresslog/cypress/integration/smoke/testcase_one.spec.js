
import { env } from '../../../environment/env-active'
import { loginPage } from '../../pageobject/loginPage'
import { Dashboard } from '../../pageobject/DashBoard'
import { CreateLead } from '../../pageobject/CreateLead.js'
 import { landingPage } from '../../pageobject/landingPage'
// import { headerMenu } from '../../pageobject/headerMenu'
// import { defaultOptions } from '../../pageobject/defaultOptions'

var testCase = 'TC001_Login to leaftaps '

before(function() {
 
   loginPage.launchApp()
  // loginPage.login_leaf(env.username, env.password)


})

after(function() {
  landingPage.Logout()
});


describe(testCase, function () {

  it('Verify and Set Current Reporting version', () => {

    cy.get("#username").type("DemoSalesManager");


    cy.get("#password").type("crmsfa");


    cy.get(".decorativeSubmit").click();

    cy.get("#login-submit > .ng-scope").click();
    cy.get("#account").click();


/*
    _userNameText: "#username",
    _passwordText: "#password",
    _loginGoButton: ".decorativeSubmit",
    _loginSubmitButton: "#login-submit > .ng-scope",
    _accountTypeDropDown: "#account"
*/


 /*
   Dashboard.clickcrmsfaButton()
   CreateLead.clickCreateLeadButton()
   CreateLead.enterCompname("test")

*/
    
    
  })

})