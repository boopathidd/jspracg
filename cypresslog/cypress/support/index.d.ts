declare namespace Cypress {

interface Chainable<Subject = any>{
        /**
         * Enter a integer value for the wait time interval
         */
        waitForSpinner(timeoutValue:int):Chainable<Subject>
        }
}