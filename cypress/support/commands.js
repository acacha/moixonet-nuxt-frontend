/* eslint-disable no-undef */

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email = 'sergiturbadenas@gmail.com', password = '123456') => {
  Cypress.log({
    name: 'Login as: ',
    message: `${email} | ${password}`
  })

  cy.server()
  cy.request('/login')
    .getCookie('XSRF-TOKEN')
    .then((cookie) => {
      const csrf = cookie.value
      cy.log('Using CSRF TOKEN:' + csrf)
      return cy.loginByCSRF(csrf, email, password)
    })
})
