import loginPage from "../support/pageobject/azzurewebsite/loginPage";
const loginInput = require('../fixtures/azzurewebsite/login.json')
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Verify login scenario', () => {
  const LoginPage = new loginPage()
    beforeEach(() => {
    cy.visit('https://itera-qa.azurewebsites.net/');
    cy.get(LoginPage.loginMenu).click()
    })

  it('Failed login Empty Fields', () => {
    cy.get(LoginPage.loginBtn).click()
    cy.get(LoginPage.usernameRequiredMessage).should('be.visible')
    cy.get(LoginPage.wrongPasswordorUsernameMessage).should('be.visible')
    })

  it('Failed login Empty Password Field', () => {
    cy.get(LoginPage.username).should('be.visible').type(loginInput.username)
    cy.get(LoginPage.loginBtn).click()
    cy.get(LoginPage.wrongPasswordorUsernameMessage).should('be.visible')
    })

  it('Login Success', () => {
    cy.get(LoginPage.username).should('be.visible').type(loginInput.username)
    cy.get(LoginPage.password).should('be.visible').type(loginInput.password)
    cy.get(LoginPage.loginBtn).click()
    cy.get(LoginPage.loginSuccessMessage).should('be.visible')
    })

  

})