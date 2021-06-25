import codigoLoginAdmin from "../pageobjects/codigoLoginAdmin";
const loginAdmin = new codigoLoginAdmin

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

Given("Acessar a página de login do admin", () => {
    loginAdmin.acessarSite();
})

When("Preencher campos de usuario e senha corretamente", () => {
    loginAdmin.preencherDadosExistente();
})

And("Clicar no botão Login e deverá ser efetuado o login", () => {
    loginAdmin.tentativaLogin();
})

Then("Deverá ser redirecionado para o painel administrativo", () => {
    loginAdmin.verificacaoLoginEfetuado();
})


