/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#recommendations > :nth-child(1) > img').click()
    cy.get('#search-input').type('Naufrago')
    cy.get('#search-button').click()
    cy.get('#clear-button').click()
  })
})