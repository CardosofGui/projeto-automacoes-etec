/// <reference types="Cypress" />

import KnowledgeElements from "../element/KnowledgeElements";

const knowledgeElements = new KnowledgeElements
const url = "http://localhost/tcc/layout/static-pages/login.php"
const email = "cardosof.gui@gmail.com"
const senha = "DJoijdsa2938_C"

class codigoKnowledge{

    acessarSite(){
        cy.visit(url)
    }

    preencherDadosExistente(){
        cy.get(knowledgeElements.inputEmail()).type(email)
        cy.get(knowledgeElements.inputSenha()).type(senha)
    }

    preencherDadosInexistente(){
        cy.get(knowledgeElements.inputEmail()).type("naoexiste@gmail.com")
        cy.get(knowledgeElements.inputSenha()).type("naoExiste123980C_")
    }

    tentativaLogin(){
        cy.get(knowledgeElements.inputSubmit()).click()
    }

    verificacaoLogin(){
        cy.url().should("be.equal", "http://localhost/tcc/layout/aluno/conteudos.php")
    }
    verificaoAlert(){
        cy.get(knowledgeElements.txFail()).should('be.visible');
    }
}

export default codigoKnowledge