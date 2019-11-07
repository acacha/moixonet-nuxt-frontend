/* eslint-disable no-undef */
/// <reference types="Cypress" />

context('AuthMain', () => {
  // Without this function only the first test will work.
  beforeEach(() => {
    cy.log('Preserving laravel_session cookie and XSRF-TOKEN')
  })

  it('redirects to /login', () => {
    cy.visit('/home')
    cy.url().should('include', '/login')
  })

  it('419 status without a valid CSRF token', function () {
    // first show that by not providing a valid CSRF token
    // that we will get a 419 status code
    cy.loginByCSRFAtBody('invalid token')
      .its('status')
      .should('eq', 419)
  })

  it('200 status with a valid CSRF token', function () {
    cy.login().its('status')
      .should('eq', 200)
  })
})
