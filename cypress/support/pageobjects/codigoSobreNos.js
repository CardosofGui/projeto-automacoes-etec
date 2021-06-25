/// <reference types="Cypress" />

import KnowledgeElements from "../element/KnowledgeElements";
const SobreNosElements = new KnowledgeElements()
const url = "localhost/tcc"

class codigoSobreNos {
    //cenário global
    acessarSite(){
        cy.visit(url); //Acessa a página principal
    }

    //cenário positivo
    clicarBotaoSobreNos(){
        cy.get(SobreNosElements.botaoSobreNos()).click() //Clica no botão Sobre Nós
    }   

    visualizarPagina(){
        cy.get('.header-desc').should('not.be.empty') //Verifica se a descrição não está vazia
    }

    //cenário negativo
    clicarBotaoLogin(){
        cy.get(SobreNosElements.botaoEntrar()).click() //clica no botão errado
    }

    naoVisualizarPagina(){
        cy.get(SobreNosElements.imgLogin()).should('be.visible'); //visualiza a página login
    }
}   

export default codigoSobreNos;