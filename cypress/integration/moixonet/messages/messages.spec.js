/* eslint-disable no-undef */
context('Messages', () => {
  it('shows a list of messages', () => {
    // 1 PREPARE

    // 2 EXECUTE
    cy.visit('/messages')

    // 3 ASSERTS
    cy.contains('Title message 1')
    cy.contains('Title message 2')
    cy.contains('Title message 3')
    cy.contains('Description message 1')
    cy.contains('Description message 2')
    cy.contains('Description message 3')
  })

  it('can add a new message', () => {
    // 1 PREPARE

    // 2 EXECUTE
    cy.visit('/messages')
    cy.get('input[data-test=new_message_title]').type('Title message 1')
    cy.get('input[data-test=new_message_description]').type('Description message 1')
    cy.get('button[data-test=add_button]').click()

    // 3 ASSERTS
    cy.contains('Title message 1')
    cy.contains('Description message 1')
  })

  it('can delete message', () => {
    cy.visit('/messages')
    cy.get('button[data-test=delete_button_1]').click()

    // 3 ASSERTS
    cy.contains('Title message 1').should('not.exist')
    cy.contains('Description message 1').should('not.exist')
  })

  it('can update message', () => {
    cy.visit('/messages')
    cy.get('button[data-test=update_button_1]').click()
    cy.get('input[data-test=new_title_1]').clear().type('Nou titol del message 1').blur()
    cy.contains('Titol del message 1').should('not.exist')
    cy.contains('Nou titol del message 1')

    cy.get('button[data-test=update_button_1]').click()
    cy.get('input[data-test=new_description_1]').type('Nou description del message 1').blur()
    cy.contains('Description del message 1').should('not.exist')
    cy.contains('Nou description del message 1')
  })
})
