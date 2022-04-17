
import { env } from '../../../environment/env-active'
import { webLocators } from '../webLocators'
import wrapperMethods from '../utility/wrapperMethods'
import { expectedResult } from '../testdata/expectedResult'

const wrapper = new wrapperMethods()

export class CreateLead {

    
    static clickCreateLeadButton() {
        wrapper.onClickButton(webLocators._clickCreateLead)
        cy.wait(2000)
       
    }



    static enterCompname(text) {
        wrapper.setText(webLocators._entercompnameXpath, text)
     }


    







/*
    static clickCloudMenu() {
        wrapper.onClickLinkText(webLocators._logoutClouldMenu)
    }

    static verifyLoginUserDetails(expectedValue) {
        wrapper.verifyGivenTextContain(webLocators._userInfo, expectedValue)
    }

    static verifyMapLocationAndZoomLevel() {
        cy.url({ timeout: 5000 }).should('include', expectedResult._zoomLevelMapLocation)
    }

    static clickLogoutButton() {
        wrapper.onClickButton(webLocators._logoutButton)
        cy.wait(2000)
        cy.get('.login-title').as(loginWindow)
        cy.wait('@loginWindow').should('be.visible')    
    }

    static Logout() {
            cy.get('#locations-btn').should('be.visible').click()
            cy.get(".cloud-menu-btn-last").click()
    }

    static wsLogout() {
        cy.request({
            method: 'POST',
            url: env.pcmWebServiceUrl + '/api/v2/security/logout',
            body: {
                authToken: "sy6x7l54e4bw7ffxh22f2vluru37nl8t"
            }
        }).then(res => {
            cy.wait(8000)
            cy.clearCookies()     
            cy.clearLocalStorage()      
            cy.reload(true)
            cy.get('.login-title', { timeout: 15000 }).should('contain', 'Log In')
        })
    }


    */
}

