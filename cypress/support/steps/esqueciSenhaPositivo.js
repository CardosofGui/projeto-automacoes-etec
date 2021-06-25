/*global Given, Then, When, And */
import codigoEsqueciSenha from '../pageobjects/codigoEsqueciSenha';
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

And('digitar um e-mail registrado', () => {
    CodigoEsqueciSenha.digitarEmailCadastrado();
})

And('clicar no botão Recuperar Senha', () => {
    CodigoEsqueciSenha.enviarEmail();
})

Then('irá aparecer um popup dizendo que o email foi enviado com sucesso', () => {
    CodigoEsqueciSenha.emailEnviado();
})