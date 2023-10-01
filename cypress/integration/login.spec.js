/// <reference types="cypress" />

const perfin = require('../fixtures/perfin.json')

context('Funcionalidade Login' , () =>{

    beforeEach(() => {
        cy.visit('minha-conta/')
    });
    
    afterEach(() => {
        cy.screenshot()
        
    });
    

    it('Deve fazer login com sucesso' , () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')

    })

    it('Deve fazer longin com sucesso - Usando arquivo de dados' , () =>{
        cy.get('#username').type(perfin.usuario)
        cy.get('#password').type(perfin.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')

    })

    it('Deve fazer longin com sucesso - Usando fixtures' , () =>{
        cy.fixture('perfin').then(dados =>{
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
    
            cy.get('.page-title').should('contain' , 'Minha conta') 
        })
        
    })

    it('Deve exibir mensagem de erro ao inserir usuário invalidos' , () => {
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
       
        cy.get('.woocommerce-error > li').should('contain' , 'Erro: a senha fornecida para o e-mail ebac@teste.com está incorreta. Perdeu a senha?')
    })

    it('Deve exibir mensagem de erro ao inserir senha invalidos' , () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain' , 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })
})