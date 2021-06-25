Feature: Login administrador

    @Positive
    Scenario: Login realizado com sucesso
        Given Acessar a página de login do admin
        When Preencher campos de usuario e senha corretamente
        And Clicar no botão Login e deverá ser efetuado o login
        Then Deverá ser redirecionado para o painel administrativo

    @Negativo
    Scenario: Falha ao realizar login
        Given Acessar a página de login do admin
        When Preencher campos de usuario e senha incorretamente
        And Clicar no botão Login e deverá ser efetuado o login
        Then Deverá ser feito um refresh na página sem redirecionamento
        