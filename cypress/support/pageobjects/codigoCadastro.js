/// <reference types="Cypress" />

import KnowledgeElements from "../element/KnowledgeElements";
const knowledgeElements = new KnowledgeElements();
const url = "localhost/tcc";

class codigoCadastro {
    // Cenário global 
    acessarSite(){
        cy.visit(url); // Acessar página principal
    }

    preencherCamposCorretamenteInicio(){
        cy.get(knowledgeElements.inputNomeCadastro()).type('Thiago')
        cy.get(knowledgeElements.inputEmailCadastro()).type('thiagodias15@gmail.com')
        cy.get(knowledgeElements.inputSenhaCadastro()).type('T_Re$76nh')
    }
    preencherCamposIncorretamenteInicio(){
        cy.get(knowledgeElements.inputNomeCadastro()).type('Thiago')
        cy.get(knowledgeElements.inputEmailCadastro()).type('thiagodias15@gmail.com')
        cy.get(knowledgeElements.inputSenhaCadastro()).type('123456')
    }
    continuarCadastro(){
        cy.get(knowledgeElements.formCriarConta()).submit();
    }

    terminarDePreencherDadosCorretamente(){
        cy.get(knowledgeElements.inputSobrenomeCadastro()).type('Dias Barboza');
        cy.get(knowledgeElements.inputCpfCadastro()).type('33344422211');
    }
    enviarCadastro(){
        cy.get(knowledgeElements.formCadastrar()).click()
    }

    cadastroEfetuado(){
        cy.url().should("be.equal", "http://localhost/tcc/layout/aluno/conteudos.php");
    }
    exibirAlertError(){
        cy.get(".alert-error").should('be.visible');
    }
}

export default codigoCadastro;