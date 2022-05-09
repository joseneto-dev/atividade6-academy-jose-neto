Feature: Listar
    Como uma pessoa qualquer
    Desejo consultar todos os usuários cadastrados
    Para ter as informações de todos os usuários

    Scenario: Ao acessar a aplicacao desejo verificar se os usuarios estao listados
        Given acessei aplicacao
        When a pagina carregar
        Then eu consigo verificar os usuarios cadastrados

    