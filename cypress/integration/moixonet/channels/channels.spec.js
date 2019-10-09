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
    cy.get('input[data-test=new_channel]').type('Canal 4')
    cy.get('button[data-test=add_button]').click()

    // 3 ASSERTS
    cy.contains('Canal 4')
  })

  it('can delete channel', () => {
    cy.visit('/channels')
    cy.get('button[data-test=delete_button_1]').click()

    // 3 ASSERTS
    cy.contains('Canal 1').should('not.exist')
  })

  it('can update channel', () => {
    cy.visit('/channels')
    cy.get('button[data-test=update_button_1]').click()
    cy.get('input[data-test=new_value_1]').clear().type('Nou nom del canal 1').blur()
    cy.contains('Canal 1').should('not.exist')
    cy.contains('Nou nom del canal 1')
  })
})
