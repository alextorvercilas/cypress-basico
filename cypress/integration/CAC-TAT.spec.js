// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

//<reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
      cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
      cy.visit('./src/index.html')
      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
      //****// */
    })
    it('preenche os campos obrigatórios e envia o formulário',function()
    {
      const longText = 'Estou ficando cansado, da tal tecnologia, Só se fala por e-mail, Mensagem curta e fria, Twitter e Facebook, Antes que eu caduque, Vou dizer tudo em poesia'
      cy.get('#firstName').type('Alex')
      cy.get('#lastName').type('Melo')
      cy.get('#email').type('alexhg2000@gmail.com')
      cy.get('#open-text-area').type(longText, {delay: 0})
      cy.get('button[type="submit"]').click()
      cy.get('.success').should('be.visible')
    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',function()
    {
    cy.get('#firstName').type('Alex')
      cy.get('#lastName').type('Melo')
      cy.get('#email').type('alexhg2000@gmail.com.')
      cy.get('#open-text-area').type('Teste')
      cy.get('button[type="submit"]').click()
      cy.get('.error').should('be.visible')
    })
    it('campo telefone continua vazio quando preenchido ',function()
    {
       cy.get('#phone')
         .type('testetelefone')
         .should('have.value', '')
    })
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formuláriocampo telefone continua vazio quando preenchido ',function()
    {
        cy.get('#firstName').type('Alex')
        cy.get('#lastName').type('Melo')
        cy.get('#email').type('alexhg2000@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')       
    })
    it('preenche e limpa os campos nome, sobrenome, email e telefone)',function()
      {
        cy.get('#firstName')
          .type('Alex')
          .should('have.value','Alex')
          .clear()
          .should('have.value','')
        cy.get('#lastName')
          .type('Melo')
          .should('have.value','Melo')
          .clear()
          .should('have.value','')
        cy.get('#email')
          .type('alexhg2000@gmail.com')
          .should('have.value','alexhg2000@gmail.com')
          .clear()
          .should('have.value','')
        cy.get('#phone')
          .type('3198555841')
          .should('have.value','3198555841')
          .clear()
          .should('have.value','')
        }
    )
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios.',function()
      {
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')   
    })
    it('envia o formulario com sucesso usando um comando customizado',function()
      {
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    })
    it.only('envia o formulario utilizando o contains',function()
      {
        cy.EncontraItensPeloContains()
        cy.get('.success').should('be.visible')
    })
  })