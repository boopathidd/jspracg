
import { env } from '../../../../environment/env-active'
import { loginPage } from '../../pageobject/loginPage'
import { routeOptions } from '../../pageobject/routeOptions'
import { headerMenu } from '../../pageobject/headerMenu'
import { routesPage } from '../../pageobject/routesPage'
import { landingPage } from '../../pageobject/landingPage'
import { routesInputValue } from '../../testdata/routesInputValue'
import { deleteAllRoutes } from '../../pageobject/deleteAllRoutes'

var testCase = 'TC002_QALKWEB-1719 NA Routing - Practical, Shortest and Fastest'

before(function() {
    //loginPage.launchApp()
    loginPage.wsLogin(env.username, env.password)
    //loginPage.login(env.username, env.password)
  })

describe(testCase, () => {

    it('Click Route Option Button', () => {
        headerMenu.clickDeleteAllRoutesButton()
        deleteAllRoutes.clickDeleteAllRoutesOkButton()
        headerMenu.clickDefaultOptionButton()
    })

    it('Select Practical Route Type', () => {
        routeOptions.selectRouteType('Practical')
        routeOptions.collapseRoutingPreferencesTab()
        routeOptions.clickRouteOptionOkButton()
    })

    it('Run a Practical Route', () => {
        routesPage.clickNewRouteButton()
        routesPage.verifyRouteType('Practical')
        routesPage.addMultipleStopsInfo(routesInputValue._routeOrigin, routesInputValue._routeDestination)
    })

    it('Verify a Practical Route', () => {
        routesPage.verifyMilesInRangePct('58.6', '10')
        routesPage.verifyMilesLabelText('Miles')
    })

    it('Click Route Option Button', () => {
        headerMenu.clickDeleteAllRoutesButton()
        deleteAllRoutes.clickDeleteAllRoutesOkButton()
        headerMenu.clickDefaultOptionButton()
    })

    it('Select Shortest Route Type', () => {
        routeOptions.selectRouteType('Shortest')
        routeOptions.collapseRoutingPreferencesTab()
        routeOptions.clickRouteOptionOkButton()
    })

    it('Run a Shortest Route', () => {
        routesPage.clickNewRouteButton()
        routesPage.verifyRouteType('Shortest')
        routesPage.addMultipleStopsInfo(routesInputValue._routeOrigin, routesInputValue._routeDestination)
    })

    it('Verify a Shortest Route', () => {
        routesPage.verifyMilesInRangePct('56.8', '10')
        routesPage.verifyMilesLabelText('Miles')

    })

    it('Click Route Option Button', () => {
        headerMenu.clickDeleteAllRoutesButton()
        deleteAllRoutes.clickDeleteAllRoutesOkButton()
        headerMenu.clickDefaultOptionButton()
    })

    it('Select Fastest Route Type', () => {
        routeOptions.selectRouteType('Fastest')
        routeOptions.collapseRoutingPreferencesTab()
        routeOptions.clickRouteOptionOkButton()
    })

    it('Run a Fastest Route', () => {
        routesPage.clickNewRouteButton()
        routesPage.verifyRouteType('Fastest')
        routesPage.addMultipleStopsInfo(routesInputValue._routeOrigin, routesInputValue._routeDestination)
    })

    it('Verify a Fastest Route', () => {
        routesPage.verifyMilesInRangePct('58.7', '10')
        routesPage.verifyMilesLabelText('Miles')
    })

})