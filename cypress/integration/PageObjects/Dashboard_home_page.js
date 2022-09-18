/// <reference types="Cypress" />
import selectors from '../Selectors/Selectors_Dashboard'
class Dashboard_home_page
{
clickAccount()
{
  cy.wait(5000)
  cy.get(selectors.Account_button)
  .should('be.visible')
  .click()
}
clickSettings()
{
  cy.get(selectors.Account_settings_button)
  .should('be.visible')
  .click()
}
}
export default Dashboard_home_page