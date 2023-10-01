/// <reference types="cypress" />

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    
    beforeEach( () => {
        cy.visit('minha-conta/')
        cy.fixture('perfin').then(dados => {
            cy.login(dados.usuario, dados.senha)

        })
       
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        
    });
});