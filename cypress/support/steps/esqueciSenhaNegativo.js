/*global Given, When, Then, And */
import codigoEsqueciSenha from "../pageobjects/codigoEsqueciSenha";
const CodigoEsqueciSenha = new codigoEsqueciSenha();

Given('que aluno entrou no site', () => {
    CodigoEsqueciSenha.acessarSite();
})

When('aluno clicar no botão Entrar', () => {
    CodigoEsqueciSenha.clicarBotaoEntrar();
})

And('ele apertar em Esqueceu sua Senha', () => {
    CodigoEsqueciSenha.clicarEsqueciSenha();
})

And('digitar um e-mail não registrado', () => {
    CodigoEsqueciSenha.digitarEmailInvalido();
})  

And('clicar no botão Recuperar Senha', () => {
    CodigoEsqueciSenha.enviarEmail();
})

Then('irá aparecer um popup dizendo que o email não foi encontrado', () => {
    CodigoEsqueciSenha.emailNaoEnviado();
})