Feature: Cadastrar Aluno

    @positive
    Scenario: Dados cadastrados com sucesso
        Given Que o usuario esteja na página inicial
        When Ele preencha os campos corretamente
        And Clicar no botão de criar conta
        And Terminar de preencher os campos corretamente
        And Clicar em cadastrar
        Then Deverá ser feito o cadastro e o redirecionamento para tela principal

    @positive
    Scenario: Senha fraca+
        Given Que o usuario esteja na página inicial
        When Ele preencha os campos incorretamente
        And Clicar no botão de criar conta
        And Terminar de preencher os campos corretamente
        And Clicar em cadastrar
        Then Não deverá ser feito o cadastro e exibirá um alert