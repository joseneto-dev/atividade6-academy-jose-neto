Feature: Listar
    Como uma pessoa qualquer
    Desejo consultar todos os usuários cadastrados
    Para ter as informações de todos os usuários

    Scenario: Ao acessar a aplicacao desejo verificar se os usuarios estao listados
        Given acessei aplicacao
        When a pagina carregar
        And busco o usuario que desejo visualizar
        Then eu consigo verificar os usuarios cadastrados
    Scenario: Ao acessar a aplicacao desejo verificar se ao buscar um usuario inexistente apareca a opcao de cadastro
        Given acessei aplicacao
        When ao carregar a pagina
        And busco o usuario que desejo visualizar
        Then consigo ver a opcao de cadastrar usuario
    