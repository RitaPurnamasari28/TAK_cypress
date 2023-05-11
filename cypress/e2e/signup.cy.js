import signupPage from "../support/pageobject/azzurewebsite/signupPage";
const signupInput = require('../fixtures/azzurewebsite/signup.json')


describe('Verify signup scenario', () => {
  const SignupPage = new signupPage()
    beforeEach(() => {
    cy.visit('https://itera-qa.azurewebsites.net/');
    cy.get(SignupPage.signupMenu).click()
    })

  it('Failed Register Empty Fields', () => {
    cy.get(SignupPage.submitBtn).click()
    cy.get(SignupPage.firstnameRequiredMessage).should('be.visible')
    cy.get(SignupPage.surenameRequiredMessage).should('be.visible')
    cy.get(SignupPage.usernameRequiredMessage).should('be.visible')
    cy.get(SignupPage.passwordRequiredMessage).should('be.visible')
    })

    it('Failed Register Confirm Wrong password', () => {
      cy.get(SignupPage.firstName).should('be.visible').type(signupInput.firstName)
      cy.get(SignupPage.surname).should('be.visible').type(signupInput.surname)
      cy.get(SignupPage.epost).should('be.visible').type(signupInput.epost)
      cy.get(SignupPage.mobile).should('be.visible').type(signupInput.mobile)
      cy.get(SignupPage.username).should('be.visible').type(`TAKRita ${Date.now()}`)
      cy.get(SignupPage.password).should('be.visible').type(signupInput.password)
      cy.get(SignupPage.confirmPassword).should('be.visible').type(signupInput.wrongpassword)
      cy.get(SignupPage.submitBtn).should('be.visible').click()
      cy.get(SignupPage.confirmPasswordErrorMessage).should('contain.text', signupInput.confirmPasswordErrorMessage)
    })
    it('Username Already Exist Sign Up', () => {
      cy.get(SignupPage.firstName).should('be.visible').type(signupInput.firstName)
      cy.get(SignupPage.surname).should('be.visible').type(signupInput.surname)
      cy.get(SignupPage.epost).should('be.visible').type(signupInput.epost)
      cy.get(SignupPage.mobile).should('be.visible').type(signupInput.mobile)
      cy.get(SignupPage.username).should('be.visible').type(signupInput.username)
      cy.get(SignupPage.password).should('be.visible').type(signupInput.password)
      cy.get(SignupPage.confirmPassword).should('be.visible').type(signupInput.password)
      cy.get(SignupPage.submitBtn).should('be.visible').click()
      cy.get(SignupPage.usernameExistMessage).should('be.visible')
    })
    it.only('Success Sign Up', () => {
      cy.get(SignupPage.firstName).should('be.visible').type(signupInput.firstName)
      cy.get(SignupPage.surname).should('be.visible').type(signupInput.surname)
      cy.get(SignupPage.epost).should('be.visible').type(signupInput.epost)
      cy.get(SignupPage.mobile).should('be.visible').type(signupInput.mobile)
      cy.get(SignupPage.username).should('be.visible').type(`TAKRita ${Date.now()}`)
      cy.get(SignupPage.password).should('be.visible').type(signupInput.password)
      cy.get(SignupPage.confirmPassword).should('be.visible').type(signupInput.password)
      cy.get(SignupPage.submitBtn).should('be.visible').click()
      cy.get(SignupPage.signupSuccessMessage).should('contain.text', signupInput.successsignupMessage)
    })
  

})