Feature: Criar um novo usuario 
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente

    Background: Acessar a aplicacao
        Given acessei aplicacao

    Scenario: Criar um novo usuario
        When clico no botao Novo para realizar um novo cadastrado
        Then digito as informações de usuario e email para cadastro
         | nome | jose1             |
         |email | jose@raro.com.br  |
        And visualizo uma mensagem de cadastro realizado com sucesso.

    Scenario: Criar um novo usuario com email invalido
        When clico no botao Novo para realizar um novo cadastrado
        Then digito as informações de usuario e email para cadastro
         | nome | jose1             |
         |email | jose.raro.com.br  |
        And visualizo uma mensagem de email invalido "Formato de e-mail inválido"

    Scenario: Cadastrar usuario com email já utilizado
        When clico no botao Novo para realizar um novo cadastrado
        Then digito as informações de usuario e email para cadastro
         | nome | jose1             |
         |email | cheers@loud.rihanna  |
        And visualizo uma mensagem de email já utilizado "Este e-mail já é utilizado por outro usuário."

    Scenario: Cadastrar usuario com nome de mais de 100 caracteres
        When clico no botao Novo para realizar um novo cadastrado
        Then digito as informações de usuario e email para cadastro
         | nome | jose1                |
         | email| cheers@loud.rihanna  |
        And visualizo uma mensagem de email já utilizado "Informe no máximo 100 caracteres para o nome"

    Scenario: Cadastrar usuario com email de mais de 60 caracteres
        When clico no botao Novo para realizar um novo cadastrado
        Then digito as informações de usuario e email para cadastro
         | nome | jose1                |
         |email | cheers@loud.rihanna  |
        And visualizo uma mensagem de email já utilizado "Informe no máximo 60 caracteres para o e-mail"
