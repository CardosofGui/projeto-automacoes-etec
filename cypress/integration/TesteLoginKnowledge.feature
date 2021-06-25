Feature: Login no site

    @Positive
    Scenario: Login realizado com sucesso
        Given Acessar a página de login
        When Preencher campos de e-mail e senha com dados existentes
        And Clicar no botão ENTRAR deverá ser efetuado o login
        Then Deverá ser redirecionado para a página inicial

    @Negative
    Scenario: Conta não encontrada
        Given Acessar a página de login
        When Preencher campos de e-mail e senha com dados inexistentes
        And Clicar no botão ENTRAR deverá ser efetuado o login
        Then Deverá ser exibido um alerta 
        