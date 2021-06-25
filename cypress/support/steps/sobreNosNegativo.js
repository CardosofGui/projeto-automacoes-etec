/* global Given, Then, When */

import codigoSobreNos from '../pageobjects/codigoSobreNos'
const CodigoSobreNos = new codigoSobreNos()

Given('que o usuário acessou a página', () => {
    CodigoSobreNos.acessarSite();
})

When('ele clicar em outro botão', () => {
    CodigoSobreNos.clicarBotaoLogin();
}) 

Then('a página não será carregada', () => {
    CodigoSobreNos.naoVisualizarPagina();
})    