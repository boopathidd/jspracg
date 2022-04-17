
import { webLocators } from '../webLocators'

class wrapperMethods {

    verifyGivenTextValue(WebElement, expectedTextValue) {
        cy.get(WebElement, { timeout: 10000 }).then(($text) => {
            expect($text.text()).to.eq(expectedTextValue)
        })
        return this
    }

    verifyGivenTextContain(WebElement, expectedTextValue) {
        const field = cy.get(WebElement, { timeout: 10000 }).should('be.visible')
        field.should('contain', expectedTextValue)
        return this
    }

    verifyGivenValueContain(WebElement, expectedTextValue) {
        const field = cy.get(WebElement, { timeout: 10000 }).should('be.visible')
        field.contains(expectedTextValue)
        return this
    }

    onClickButton(WebElement) {
        cy.get(WebElement, { timeout: 10000 })
            .should('be.visible')
            .click()
        return this
    }

    onClickCheckbox(WebElement) {
        if (cy.get(WebElement, { timeout: 10000 }).should('be.visible')) {
            cy.get(WebElement).click()
            cy.log("Able to click the " + WebElement)
        } else {
            cy.log("Unable to click the " + WebElement)
        }
        return this
    }

    onClickLinkText(WebElement) {
        if (cy.get(WebElement, { timeout: 10000 }).should('be.visible')) {
            cy.get(WebElement).click()
            cy.log("Able to click the " + WebElement)
        } else {
            cy.log("Unable to click the " + WebElement)
        }
        return this
    }

    selectDropdownValue(WebElement, value) {
        if (cy.get(WebElement, { timeout: 10000 }).should('be.visible')) {
            const option = cy.get(WebElement)
            option.select(value)
            cy.log('Selected given value : ' + value)
        } else {
            cy.log('Unable to select the given value : ' + value)
        }
        return this
    }

    selectFirstFilterValue(WebElement) {
        cy.get(WebElement, { timeout: 10000 })
            .should('be.visible')
            .first()
            .click()
        return this

    }

    selectRadioOption(WebElement) {
        cy.get(WebElement, { timeout: 10000 })
            .should('be.visible')
            .click()
        return this
    }

    setValue(WebElement, value) {
        if (cy.get(WebElement, { timeout: 10000 }).should('be.visible')) {
            const option = cy.get(WebElement)
            option.type(value)
            cy.log('passed given value : ' + value)
        } else {
            cy.log('Unable to pass the given value : ' + value)
        }
        return this
    }

    setText(WebElement, text) {
        cy.get(WebElement, { timeout: 10000 })
            .should('be.visible')
            .clear()
            .type(text)
            .should('have.value', text)
        return this
    }

    setTextInvoke(WebElement, text) {
        cy.get(WebElement, { timeout: 10000 })
            .should('be.visible')
            .clear()
            .invoke('val', text)
            .trigger('change')
            .should('have.value', text)
        return this
    }


    clearandSetText(WebElement, text) {
        cy.get(WebElement, { timeout: 10000 })
            .should('be.visible')
            .clear()
            .type(text)
        return this
    }

    waitforWebElement() {
        cy.wait(globalValue.waitForWebElement)
        return this
    }

    waitforWebElementInSeconds(seconds) {
        cy.wait(seconds)
        return this
    }

    valueRangeInConst(WebElement, expectedValue, range) {
        var minValue = parseInt(expectedValue) - parseInt(range)
        var maxValue = parseInt(expectedValue) + parseInt(range)

        cy.get(WebElement, { timeout: 10000 }).then(($value) => {
            expect(parseInt($value.text())).to.be.within(minValue, maxValue)
        })
    }

    valueRangeInPct(WebElement, expectedValue, range) {
        var minValue = parseInt(expectedValue) - parseInt(expectedValue * (range / 100))
        var maxValue = parseInt(expectedValue) + parseInt(expectedValue * (range / 100))

        cy.get(WebElement, { timeout: 10000 }).then(($value) => {
            expect(parseInt($value.text())).to.be.within(minValue, maxValue)
        })

    }



    valueCostRangeInConst(WebElement, expectedValue, range) {
        var minValue = parseInt(expectedValue) - parseInt(range)
        var maxValue = parseInt(expectedValue) + parseInt(range)

        cy.get(WebElement, { timeout: 10000 }).then((value) => {
            expect(value.text().replace('$', "")).to.be.within(minValue, maxValue)

        })
    }

    valueCostRangeInPct(WebElement, expectedValue, range) {
        var minValue = parseInt(expectedValue) - parseInt(expectedValue * (range / 100))
        var maxValue = parseInt(expectedValue) + parseInt(expectedValue * (range / 100))


        cy.get(WebElement, { timeout: 10000 }).then((value) => {
            expect(value.text().replace('$', "")).to.be.within(minValue, maxValue)
        })
    }

    getTextValueAndValidate(WebElement, expectedValue) {
        cy.get(WebElement, { timeout: 10000 }).invoke('val').then(text => {
            const actualText = text
            assert.equal(actualText, expectedValue, 'vals equal')
        })
    }

    getTextValue(WebElement, expectedValue) {
        cy.get(WebElement, { timeout: 10000 }).invoke('text').then(text => {
            const actualText = text
            assert.equal(actualText, expectedValue, 'vals equal')
        })
    }
}
export default wrapperMethods
