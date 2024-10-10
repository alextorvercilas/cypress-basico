// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command -

Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function()
{
    cy.get('#firstName').type('Alex')
    cy.get('#lastName').type('Melo')
    cy.get('#email').type('alexhg2000@gmail.com')
    cy.get('#open-text-area').type('Teste de inserção de texto')
    cy.get('button[type="submit"]').click()
})
Cypress.Commands.add('EncontraItensPeloContains',function()
{
    cy.get('#firstName').type('Alex')
    cy.get('#lastName').type('Melo')
    cy.get('#email').type('alexhg2000@gmail.com')
    cy.get('#open-text-area').type('Teste de inserção de texto')
    cy.contains('button','Enviar').click()
})