/* global Given, Then, When */

import codigoSobreNos from '../pageobjects/codigoSobreNos'
const CodigoSobreNos = new codigoSobreNos()

Given('que o usuário acessou a página', () => {
    CodigoSobreNos.acessarSite();
})

When('ele clicar no botão Sobre nós', () => {
    CodigoSobreNos.clicarBotaoSobreNos();
}) 

Then('a página será carregada', () => {
    CodigoSobreNos.visualizarPagina();
})    