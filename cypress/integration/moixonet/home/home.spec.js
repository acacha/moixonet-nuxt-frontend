/* eslint-disable no-undef */
context('Home', () => {
  it('Home page show link to channels', () => {
    cy.visit('/')
    cy.contains('Channels')
      .should('have.attr', 'href', '/channels')
  })

  it('Home page show link to messages', () => {
    cy.visit('/')
    cy.contains('Messages')
      .should('have.attr', 'href', '/messages')
  })
})
