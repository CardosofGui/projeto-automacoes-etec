/// <reference types="cypress" />

import KnowledgeElements from "../element/KnowledgeElements";
const EsqueciSenhaElements = new KnowledgeElements();
const url = "localhost/tcc";

class codigoEsqueciSenha {

    //Cenário global
    acessarSite(){
        cy.visit(url);
    }

    clicarBotaoEntrar(){
        cy.get(EsqueciSenhaElements.btnEntrar()).click();
    }

    clicarEsqueciSenha(){
        cy.get(EsqueciSenhaElements.btnRecuperarSenha()).click();
    }

    enviarEmail(){
        cy.get(EsqueciSenhaElements.btnEnviarEmail()).submit();
    }

    //Cenário positivo
    digitarEmailCadastrado(){
        cy.get(EsqueciSenhaElements.inputEmailRecuperar()).type('fernando@gmail.com');
    }

    emailEnviado(){
        cy.get(EsqueciSenhaElements.txSucess()).should('be.visible')
    }

    //Cenário negativo
    digitarEmailInvalido(){
        cy.get(EsqueciSenhaElements.inputEmailRecuperar()).type('danilo@gmail.com');
    }

    emailNaoEnviado(){
        cy.get(EsqueciSenhaElements.txFail()).should('be.visible');
    }

}

export  default codigoEsqueciSenha;