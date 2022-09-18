// <reference types="Cypress" />
import selectors from '../Selectors/Selectors_CheckoutPayment'

class CheckoutPayment {
    voucher(){
        cy.get('.sc-ckVGcZ.fEzvpd')
        .should('be.visible')
        .click()
    }
    fillCode(value){
        const loginfield=cy.get('[name="inputCode"]')
        loginfield.clear()
        loginfield.type(value)
        cy.get('[data-test="applyPromoCodeButton"]')
        .should('be.visible')
        .click()
    }
    applycode(){
        cy.get('[data-test-id="applyPromoCodeButton"]')
        .should('be.visible')
    }
    DUMMY(){
        cy.get(selectors.Dummy)
        .contains('Dummy')
        .should('be.visible')
        .click()
    }
    Charged(){
        //cy.get('.sc-dNLxif.jcChKh').contains('Charged')
        cy.get(selectors.Charged).contains('Charged').should('be.visible') .click()

    }
    Fully_refunded(){
        cy.get(selectors.Fully)
        .contains('Fully refunded')
        .should('be.visible')
        .click()


    }
    Not_Charged(){
        cy.get(selectors.Not_CH)
        .contains('Not charged')
        .should('be.visible').click()

    }
}
export default CheckoutPayment