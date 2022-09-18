/// <reference types="Cypress" />
import selectors from '../Selectors/Selectors_Dashboard'
class Dashboard_login_page{
fillLogin(value){  
  cy.get(selectors.Login_input)
  .should('be.visible')
  .clear()
  .type(value)
  }
fillpassword(value){
  cy.get(selectors.Password_input)
  .should('be.visible')
  .clear()
  .type(value)
  }
clickloginbutton(){
  cy.get(selectors.LoginIn_button)
  .should('be.visible')
  .click()
  }
}
export default Dashboard_login_page