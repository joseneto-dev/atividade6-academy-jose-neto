Feature: Atualizar um usuario 
    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas 

    Background: Acessar a aplicacao
        Given acessei aplicacao

    Scenario: Atualizar um usuario
        When busco pelo usuario que desejo atulizar 
        And clico no botao ver detalhes
        Then clico no botao editar 
        And digito as informações de usuario e email para atualizar.
         | nome | jose1             |
         |email | jose@raro.com.br  |
        And visualizo uma mensagem de Informações atualizadas com sucesso!
@focus         
    Scenario: Atualizar um usuario com email invalido
        When busco pelo usuario que desejo atulizar 
        And clico no botao ver detalhes
        Then clico no botao editar 
        And digito as informações de usuario e email para atualizar.
         | nome | jose1             |
         |email | jose.raro.com.br  |
        And visualizo uma mensagem de 

    Scenario: Cadastrar usuario com email já utilizado
         When busco pelo usuario que desejo atulizar 
        And clico no botao ver detalhes
        Then clico no botao editar 
        And digito as informações de usuario e email para atualizar.
         | nome | jose1             |
         |email | cheers@loud.rihanna  |
        And visualizo uma mensagem de

    Scenario: Cadastrar usuario com nome de mais de 100 caracteres
         When busco pelo usuario que desejo atulizar 
        And clico no botao ver detalhes
        Then clico no botao editar 
        And digito as informações de usuario e email para atualizar.
         | nome | jose1                |
         | email| cheers@loud.rihanna  |
        And visualizo uma mensagem de email 

    Scenario: Cadastrar usuario com email de mais de 60 caracteres
        When busco pelo usuario que desejo atulizar 
        And clico no botao ver detalhes
        Then clico no botao editar 
        And digito as informações de usuario e email para atualizar.
         | nome | jose1                |
         |email | cheers@loud.rihanna  |
        And visualizo uma mensagem de email
