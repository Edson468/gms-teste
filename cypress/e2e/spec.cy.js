/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Jose')
    cy.get('#signup-lastname').type('Silva')
    cy.get('#signup-email').type('jose1@silva.com')
    cy.get('#signup-phone').type('1122334455')
    cy.get('#signup-password').type('Jose@2027')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})