/* eslint-disable no-undef */
/// <reference types="Cypress" />

context('AuthLogin', () => {
  before(() => {
    cy
      .visit('/login')
  })

  // beforeEach(() => {
  //   // NOT NECESSARY BECAUSE APP USE AXIOS INTERCEPTORS TO INTERCEPT 419, refresh token and resend request
  //   // Without this function only the first test will work.
  //   // cy.log('Preserving laravel_session and XSRF-TOKEN cookies')
  //   // Cypress.Cookies.preserveOnce('scool_session', 'laravel_token', 'XSRF-TOKEN')
  //
  //   // DISABLE SERVICE WORKERS? NOT NECESSARY
  //   //https://github.com/cypress-io/cypress/issues/702
  //   // if (window.navigator && navigator.serviceWorker) {
  //   //   navigator.serviceWorker.getRegistrations()
  //   //     .then((registrations) => {
  //   //       registrations.forEach((registration) => {
  //   //         registration.unregister()
  //   //       })
  //   //     })
  //   // }
  // })

  it('Greets with Signin', () => {
    cy.get("[data-test='auth_login_card_title']").should('be.visible')
  })

  it('Links to register', () => {
    cy
      .contains('Registrar-se')
      .should('have.attr', 'href', '/register')
  })

  it('Links to forget password', () => {
    cy
      .contains('Recordar paraula de pas')
      .should('have.attr', 'href', '/password/reset')
  })

  it('Requires email and password', () => {
    cy.get("[data-test='auth_login_button_login']").click()
    cy.contains('El correu electrònic és obligatori')
    cy.contains('La paraula de pas és obligatòria')
  })

  it('Requires valid email', () => {
    cy.get("[data-test='auth_login_input_email']").type('sergiturbadenasgmail.com')
    cy.get("[data-test='auth_login_button_login']").click()
    cy.contains('El correu electrònic ha de ser un correu electrònic vàlid')
  })

  it('Requires password to be at least 6 characters', () => {
    cy.get("[data-test='auth_login_input_password']").type('1234567')
    cy.get("[data-test='auth_login_button_login']").click()
    cy.contains('La paraula de pas ha de tenir com a mínim 8 caràcters')
  })

  it('Requires valid email and password', () => {
    cy.get("[data-test='auth_login_input_email']").clear().type('usuariinventat@gmail.com')
    cy.get("[data-test='auth_login_input_password']").type('123456')
    cy.get("[data-test='auth_login_button_login']").click()
    cy.contains('Les dades proporcionades no són vàlides')
  })

  it('Navigates to /home in successful Login', () => {
    cy
      .visit('https://iesebre.scool.test')
      .get("[data-test='auth_login_button']").click()
    cy.get("[data-test='auth_login_input_email']").clear().type('sergiturbadenas@gmail.com')
    cy.get("[data-test='auth_login_input_password']").clear().type('123456')
    cy.get("[data-test='auth_login_button_login']").click()
    cy.url().should('eq', 'https://iesebre.scool.test/home')
  })

})
