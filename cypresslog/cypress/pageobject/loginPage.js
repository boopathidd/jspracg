
import { env } from '../../environment/env-active'
import { webLocators } from '../webLocators'
import wrapperMethods from '../utility/wrapperMethods'

const wrapper = new wrapperMethods()

export class loginPage {

   // static login(username, password) {
   //    this.enterUserName(username)
   //    this.enterPassword(password)
   //    this.clickLoginButton()
   // }


   static login_leaf(username, password) {
      this.enterUserName(username)
      this.enterPassword(password)
      this.clickLoginButton()
   }



   // _enterUseridxpath:"input[id='username']",
   // _enterUserpwdxpath:"input[id='password']",
   // _clickLoginxpath:"input[@value='Login']",
   


   static loginWithAccount(username, password, account) {
      this.login(username, password)
      this.selectAccount(account)
      this.clickLoginButton()
   }

   static launchApp() {
      cy.visit(env.weburl, {
         onBeforeLoad: win => win.sessionStorage.clear(),
         failOnStatusCode: false
       })
   }


// _enterUseridxpath:"input[id='username']",
   // _enterUserpwdxpath:"input[id='password']",
   // _clickLoginxpath:"input[@value='Login']",
   

   // UserName Method
   static enterUserName(text) {
      wrapper.setText(webLocators._userNameText, text)
   }

   //Password Method
   static enterPassword(text) {
      wrapper.setText(webLocators._passwordText, text)
   }

   //Login Page GO button
   static clickGOButton() {
      wrapper.onClickButton(webLocators._loginGoButton)
   }

   static clickLoginButton() {
      wrapper.onClickButton(webLocators._loginGoButton)
     // cy.get('.panel-name', { timeout: 90000 }).should('contain', 'Routes')

   }

   //Account Selection Method
   static selectAccount(value) {
      wrapper.selectDropdownValue(webLocators._accountTypeDropDown, value)
   }

   static wsLogin(username, password) {
      cy.request({
         method: 'POST',
         url: env.pcmWebServiceUrl + '/api/v2/security/authenticate',
         body: {
            email: username,
            password: password,
            account: "",
            product: "PCMilerWebsite"
         }
      }).then(res => {
         expect(res.status).to.eq(200)
         cy.visit(env.weburl+'/app?center=5,38.500,-95.000')
      })
      cy.get('.panel-name', { timeout: 90000 }).should('contain', 'Routes')
   }

   static wsLoginWithAccount(username, password, account) {
      cy.request({
         method: 'POST',
         url: env.pcmWebServiceUrl + '/api/v2/security/authenticate',
         body: {
            email: username,
            password: password,
            account: account,
            product: "PCMilerWebsite"
         }
      }).then(res => {
         cy.visit(env.weburl, { timeout: 30000 }, {
            onBeforeLoad: win => {
               win.sessionStorage.clear()
               win.sessionStorage.setItem('authToken', res.body.authToken)
               win.sessionStorage.setItem('userId', res.body.userId)
               win.sessionStorage.setItem('roles', JSON.stringify(res.body.roles)
               )
            },
            failOnStatusCode: false
         })
      })
      cy.get('.panel-name', { timeout: 40000 }).should('contain', 'Routes')
   }
}