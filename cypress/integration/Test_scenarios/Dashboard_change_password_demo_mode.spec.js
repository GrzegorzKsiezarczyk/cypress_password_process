import Dashboard_login_page from '../PageObjects/Dashboard_login_page'
import Dashboard_home_page from '../PageObjects/Dashboard_home_page'
import Dashboard_account from '../PageObjects/Dashboard_account'
import faker from "faker";

describe("Process of changing password-demo mode on", () => {
    const DashboardLogIn = new Dashboard_login_page
    const DashboardHomePage = new Dashboard_home_page
    const DashboardAccount = new Dashboard_account
    
  
    const fakePassword = faker.internet.password();
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.visit("https://demo.saleor.io/dashboard")
    });
    it("Changing password-Saleor Dashboard-demo_mode", () => {

        DashboardLogIn.fillLogin('admin@example.com')
        DashboardLogIn.fillpassword('admin')
        DashboardLogIn.clickloginbutton()

        DashboardHomePage.clickAccount()
        DashboardHomePage.clickSettings()

        DashboardAccount.clickchangepassword()
        DashboardAccount.filldoldpassword('admin')
        DashboardAccount.fillnewpassword(fakePassword)
        DashboardAccount.clickSave()
        DashboardAccount.verificationDemoModeON()
        })
    });