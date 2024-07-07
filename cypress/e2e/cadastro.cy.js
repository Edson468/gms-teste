/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    let email = `bruno${Date.now()}@teste.com`
    cy.preencherCadastro('Bruno', 'Maciel', email, '1122334455', 'Clede@12')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  });

  it.only('Deve validar mensagem de erro com o campo nome inválido', () => {
    let email = `bruno${Date.now()}@teste.com`
    cy.preencherCadastro('Bruno20', 'Maciel', email, '1122334455', 'Clede@12')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  });
})