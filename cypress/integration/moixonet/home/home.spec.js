/* eslint-disable no-undef */
context('Home', () => {
  it('Home page show link to channels', () => {
    cy.visit('/')
    cy.contains('Channels')
      .should('have.attr', 'href', '/channels')
  })
})
