import codigoKnowledge from "../pageobjects/codigoKnowledge";
const knowledgeCodigo = new codigoKnowledge

Given("Acessar a página de login", () => {
    knowledgeCodigo.acessarSite();
})

When("Preencher campos de e-mail e senha com dados inexistentes", () => {
    knowledgeCodigo.preencherDadosInexistente();
})

And("Clicar no botão ENTRAR deverá ser efetuado o login", () => {
    knowledgeCodigo.tentativaLogin();
})


Then("Deverá ser exibido um alerta", () => {
    knowledgeCodigo.verificaoAlert();
})


