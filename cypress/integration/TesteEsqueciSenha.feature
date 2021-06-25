@esqueci-senha
Feature: Esqueci a senha

    @positive
    Scenario: E-mail para recuperar senha é enviado
        Given que aluno entrou no site
        When aluno clicar no botão Entrar
        And ele apertar em Esqueceu sua Senha
        And digitar um e-mail registrado
        And clicar no botão Recuperar Senha
        Then irá aparecer um popup dizendo que o email foi enviado com sucesso

    @negative 
    Scenario: E-mail para recuperar senha não é enviado
        Given que aluno entrou no site
        When aluno clicar no botão Entrar
        And ele apertar em Esqueceu sua Senha
        And digitar um e-mail não registrado
        And clicar no botão Recuperar Senha
        Then irá aparecer um popup dizendo que o email não foi encontrado
