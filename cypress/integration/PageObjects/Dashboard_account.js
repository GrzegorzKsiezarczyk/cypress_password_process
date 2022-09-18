/// <reference types="Cypress" />
import selectors from '../Selectors/Selectors_Dashboard'
class Dashboard_account{
    clickchangepassword(){
        cy.contains('Change your password')
        .click({ multiple: true, force: true })
    }
    filldoldpassword(value){
        cy.get(selectors.Previous_password_input).click()	
        .should('be.visible')
        .clear()
        .type(value)
    }
    fillnewpassword(value){
        cy.get(selectors.New_password_input).click()	
        .should('be.visible')
        .clear()
        .type(value)
    }
    clickSave(){
        cy.get(selectors.New_password_save_button)
        .should('be.visible')
        .click({ multiple: true, force: true })
    }
    verificationDemoModeON(){
        cy.get(selectors.error_pop_up).then(($ele) => {
            if ($ele.is(':visible')) {
                cy.log('Demo mode ON')
                cy.get(selectors.error_pop_up).should('be.visible')
                assert.isOk('true','everything is OK, Demo mode ON');

                cy.url().should('eq', 'https://demo.saleor.io/dashboard/staff/VXNlcjo1OQ%3D%3D?action=change-password')
                cy.server().should((server) => {
                   
                    expect(server).to.be.an('object')
                    expect(server.status).to.eq(200)
                    expect(server.response).to.be.null
                  
                })
                
            } else {
              cy.log('Demo mode OFF')
              cy.get(selectors.error_notification).should('not.be.visible')
              cy.get(selectors.error_pop_up).should('not.be.visible')
            }
          })
        }
    verificationDemoModeOFF(){
        cy.get(selectors.error_pop_up).then(($ele) => {
            if ($ele.is(':not(:visible)')) {
              cy.log('Demo mode OFF')
              cy.get(selectors.error_pop_up).should('not.be.visible')
              cy.url().should('eq', 'https://demo.saleor.io/dashboard/staff/VXNlcjo1OQ%3D%3D?action=change-password')
              cy.server().should((server) => {
                    expect(server).to.be.an('object')
                    expect(server.status).to.eq(200)
                    expect(server.response).to.be.null
                })
            cy.get(selectors.error_pop_up).should('have.length', 1) //  When I will have 1 positive notifaction

            } else {
                cy.log('Demo mode ON')
                cy.get(selectors.error_notification).should('be.visible')

                cy.get(selectors.error_pop_up).should('have.length', 3).should('be.visible')
                cy.url().should('eq', 'https://demo.saleor.io/dashboard/staff/VXNlcjo1OQ%3D%3D?action=change-password')
                assert.isNotOk('DEMO MODE','DEMO MODE is still ON')
                cy.server().should((server) => {
                
                    expect(server).to.be.an('object')
                    expect(server.status).to.eq(200)
                })
            }
          })
    }
}
export default Dashboard_account