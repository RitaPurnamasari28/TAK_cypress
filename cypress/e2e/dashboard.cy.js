import loginPage from "../support/pageobject/azzurewebsite/loginPage";
const loginInput = require('../fixtures/azzurewebsite/login.json')
import dashboardPage from "../support/pageobject/azzurewebsite/dashboardPage";
const dashboardInput = require('../fixtures/azzurewebsite/dashboard.json')
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


describe('Dashboard scenario', () => {
  const DashboardPage = new dashboardPage()
  const LoginPage = new loginPage()
    beforeEach(() => {
    cy.visit('https://itera-qa.azurewebsites.net/Login');
    cy.get(LoginPage.username).should('be.visible').type(loginInput.username)
    cy.get(LoginPage.password).should('be.visible').type(loginInput.password)
    cy.get(LoginPage.loginBtn).click()
    cy.get(LoginPage.loginSuccessMessage).should('be.visible')
    })

  it('Search with Un complete name/email', () => {
    cy.get(DashboardPage.searchField).should('be.visible').type(dashboardInput.unCompleteName)
    cy.get(DashboardPage.SearchBtn).should('be.visible').click()
    })
  it('search by complete name', () => {
    cy.get(DashboardPage.searchField).should('be.visible').type(dashboardInput.CompleteName)
    cy.get(DashboardPage.SearchBtn).should('be.visible').click()
    })
  it('Customer Details', () => {
    cy.get(DashboardPage.searchField).should('be.visible').type(dashboardInput.detailName)
    cy.get(DashboardPage.SearchBtn).should('be.visible').click()
    cy.get(DashboardPage.detailBtn).should('be.visible').click()
    cy.get(DashboardPage.detailOpened).should('be.visible')
    cy.get(DashboardPage.detailOpened2).should('be.visible')
    })
  it('Delete Customer', () => {
    cy.get(DashboardPage.searchField).should('be.visible').type(dashboardInput.deleteName)
    cy.get(DashboardPage.SearchBtn).should('be.visible').click()
    cy.get(DashboardPage.deleteBtn).should('be.visible').click()
    cy.get(DashboardPage.deleteBtn).should('be.visible').click()
    })
  
    
  
  })