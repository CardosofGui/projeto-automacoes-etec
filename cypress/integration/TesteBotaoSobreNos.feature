@pagina-sobre-nos
Feature: Visualizar página sobre nós

    @positive
    Scenario: Visualizar página
        Given que o usuário acessou a página
        When ele clicar no botão Sobre nós
        Then a página será carregada

    @negative
    Scenario: Página não carregada
        Given que o usuário acessou a página
        When ele clicar em outro botão
        Then a página não será carregada