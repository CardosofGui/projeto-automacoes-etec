/* global Given, Then, When, And */
import codigoCadastro from '../pageobjects/codigoCadastro';
const CodigoCadastro = new codigoCadastro();

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
  
Given('Que o usuario esteja na página inicial', () => {
    CodigoCadastro.acessarSite();
})

When('Ele preencha os campos incorretamente', () => {
    CodigoCadastro.preencherCamposIncorretamenteInicio();
})

And('Clicar no botão de criar conta', () => {
    CodigoCadastro.continuarCadastro();
})

And('Terminar de preencher os campos corretamente', () => {
    CodigoCadastro.terminarDePreencherDadosCorretamente();
})

And('Clicar em cadastrar', () => {
    CodigoCadastro.enviarCadastro();
})

Then('Não deverá ser feito o cadastro e exibirá um alert', () => {
    CodigoCadastro.exibirAlertError();
})
