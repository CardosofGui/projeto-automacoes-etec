import codigoKnowledge from "../pageobjects/codigoKnowledge";
const knowledgeCodigo = new codigoKnowledge

Given("Acessar a página de login", () => {
    knowledgeCodigo.acessarSite();
})

When("Preencher campos de e-mail e senha com dados existentes", () => {
    knowledgeCodigo.preencherDadosExistente();
})

And("Clicar no botão ENTRAR deverá ser efetuado o login", () => {
    knowledgeCodigo.tentativaLogin();
})


Then("Deverá ser redirecionado para a página inicial", () => {
    knowledgeCodigo.verificacaoLogin();
})


