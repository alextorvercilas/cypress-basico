/*describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})*/

//<reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
  it('verifica o título da aplicação', function() {
    cy.visit('./src/index/index.html')
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
})



