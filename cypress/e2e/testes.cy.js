// cypress/integration/checkboxes.spec.js
//<reference types="Cypress" />

describe('Testes Gerais', () => {
    beforeEach(() => {
      cy.visit('https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html')
    })
  
    it('checks todos checkboxes com apenas um comando', () => {
      cy.get('#check input[type="checkbox"]')
        .as('checkboxes')
        .check()
  
      cy.get('@checkboxes')
        .each(checkbox => {
          expect(checkbox[0].checked).to.equal(true)
        })
    })
  })