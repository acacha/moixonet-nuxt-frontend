/* eslint-disable no-undef */
context('Channels', () => {
  // it('tinker', () => {
  //   cy.visit('http://google.com')
  //   cy.get('[name=q]').type('1 octubre')
  //   cy.get('[name=btnK]').first().click()
  //   cy.get('body').contains('1 octubre')
  // })

  it('shows a list of channels', () => {
    // 1 PREPARE

    // 2 EXECUTE
    cy.visit('/channels')

    // 3 ASSERTS
    cy.contains('Canal 1')
    cy.contains('Canal 2')
    cy.contains('Canal 3')
  })

  it('can add a new channel', () => {
    // 1 PREPARE

    // 2 EXECUTE
    cy.visit('/channels')
    cy.get('input').type('Canal 4')
    cy.get('button').click()

    // 3 ASSERTS
    cy.contains('Canal 4')

  })
})
