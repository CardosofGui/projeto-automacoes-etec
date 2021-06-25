/// <reference types="Cypress" />

import KnowledgeElements from "../element/KnowledgeElements";

const knowledgeElements = new KnowledgeElements
const url = "http://localhost/tcc/layout/admin/login.php"
const user = "admin"
const senha = "admin"

class codigoKnowledge{

    acessarSite(){
        cy.visit(url)
    }

    preencherDadosExistente(){
        cy.get(knowledgeElements.inputUserAdmin()).type(user)
        cy.get(knowledgeElements.inputSenhaAdmin()).type(senha)
    }

    preencherDadosInexistente(){
        cy.get(knowledgeElements.inputUserAdmin()).type("naoexiste@gmail.com")
        cy.get(knowledgeElements.inputSenhaAdmin()).type("naoExiste123980C_")
    }

    tentativaLogin(){
        cy.get(knowledgeElements.buttonLoginAdmin()).click()
    }

    verificacaoLoginEfetuado(){
        cy.url().should("be.equal", "http://localhost/tcc/layout/admin/painel.php")
    }
    verificacaoLoginNaoEfetuado(){
        cy.url().should("be.equal", "http://localhost/tcc/layout/admin/login.php")
    }
}

export default codigoKnowledge