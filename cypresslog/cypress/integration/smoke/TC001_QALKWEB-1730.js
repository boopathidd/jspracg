
import { env } from '../../../../environment/env-active'
import { loginPage } from '../../pageobject/loginPage'
import { landingPage } from '../../pageobject/landingPage'
import { headerMenu } from '../../pageobject/headerMenu'
import { defaultOptions } from '../../pageobject/defaultOptions'

var testCase = 'TC001_QALKWEB-1730 - Current Map Location and Zoom Level'

before(function() {
  loginPage.launchApp()
  loginPage.login(env.username, env.password)
})

after(function() {
  landingPage.Logout()
});


describe(testCase, function () {

  it('Verify and Set Current Reporting version', () => {
    headerMenu.clickDefaultOptionButton()
    defaultOptions.expandReportingPreferencesTab()
    defaultOptions.selectReportDataVersion('Current')
    defaultOptions.clickDefaultOptionOkButton()
})

  it('Verify Login User Account details', function () {
      landingPage.verifyLoginUserDetails(env.username)   
  })

})