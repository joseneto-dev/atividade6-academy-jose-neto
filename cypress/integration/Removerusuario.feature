Feature: Remover Usuario
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

    Scenario: Remover usuario
        Given ao acessar a aplicacao 
        When busco pelo usuario que desejo excluir
        Then clico no botao excluir um usuario
        And confirmo que desejo excluir o usuario
    
