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

  it('Deve validar mensagem de erro com o campo nome inválido', () => {
    let email = `bruno${Date.now()}@teste.com`
    cy.preencherCadastro('Bruno20', 'Maciel', email, '1122334455', 'Clede@12')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  });

  it.only('Deve validar mensagem de erro com o campo nome inválido', () => {
    let email = `bruno${Date.now()}@teste.com`
    cy.preencherCadastro('Bruno', 'Maciel20', email, '1122334455', 'Clede@12')
    cy.get('#signup-response').should('contain', 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  });

  it('Deve validar mensagem de senha fraca', () => {
    let email = `bruno${Date.now()}@teste.com`
    cy.preencherCadastro('Bruno', 'Maciel', email, '1122334455', 'Senha123')
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  });
  
  it('Deve validar mensagem de email invalido', () => {
    let email = `bruno${Date.now()}teste.com`
    cy.preencherCadastro('Bruno', 'Maciel', email, '1122334455', 'Senha123')
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  });

})