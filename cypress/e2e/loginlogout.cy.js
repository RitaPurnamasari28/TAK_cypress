import loginLogoutPage from "../support/pageobject/azzurewebsite/loginLogoutPage";
const loginInput = require('../fixtures/azzurewebsite/login.json')
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Verify login scenario', () => {
  const LoginLogoutPage = new loginLogoutPage()
    beforeEach(() => {
    cy.visit('https://itera-qa.azurewebsites.net/');
    cy.get(LoginLogoutPage.loginMenu).click()
    })

  it('Failed login Empty Fields', () => {
    cy.get(LoginLogoutPage.loginBtn).click()
    cy.get(LoginLogoutPage.usernameRequiredMessage).should('be.visible')
    cy.get(LoginLogoutPage.wrongPasswordorUsernameMessage).should('be.visible')
    })

  it('Failed login Empty Password Field', () => {
    cy.get(LoginLogoutPage.username).should('be.visible').type(loginInput.username)
    cy.get(LoginLogoutPage.loginBtn).click()
    cy.get(LoginLogoutPage.wrongPasswordorUsernameMessage).should('be.visible')
    })

  it('Login Success', () => {
    cy.get(LoginLogoutPage.username).should('be.visible').type(loginInput.username)
    cy.get(LoginLogoutPage.password).should('be.visible').type(loginInput.password)
    cy.get(LoginLogoutPage.loginBtn).click()
    cy.get(LoginLogoutPage.loginSuccessMessage)//.should('be.visible')
    })

  it('Logout Success', () => {
    cy.get(LoginLogoutPage.username).should('be.visible').type(loginInput.username)
    cy.get(LoginLogoutPage.password).should('be.visible').type(loginInput.password)
    cy.get(LoginLogoutPage.loginBtn).click()
    cy.get(LoginLogoutPage.loginSuccessMessage).should('be.visible')
    cy.get(LoginLogoutPage.logoutMenu).click()
    cy.get(LoginLogoutPage.logoutSuccessMessage).should('be.visible')
    })

  

})