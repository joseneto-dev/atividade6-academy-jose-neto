const { faker } = require('@faker-js/faker');

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const sizename = faker.random.words(20)
const sizemail = faker.internet.exampleEmail('Jeannnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnne')

class AtualizarCadastro{
    boxbusca = ".sc-gKXOVf"
    atualizar ="#userDataDetalhe"
    buttoneditar = "button[type='button']"
    inputnome = "#userName"
    inputemail = "#userEmail"
    buttoncancelar = ".cSMKmK"
    buttonsalvar = '.ghcSEQ'
    buttonvoltar = ".sc-gsnTZi"
    cadastroerrorcampos = ".sc-ksZaOG"

    atualizarusuario(nome){
        cy.visit('https://academy-crud-frontend.herokuapp.com')
        cy.get(this.boxbusca).type(nome)
        cy.get(this.atualizar).click()
        cy.get(this.buttoneditar).click()
        cy.get(this.inputnome).clear()
        cy.get(this.inputnome).type(randomName)
        cy.get(this.inputemail).clear()
        cy.get(this.inputemail).type(randomEmail)
        cy.get(this.buttoncancelar).click()
        

    }
    atualizarusuariopeloemail(email){
        cy.visit('https://academy-crud-frontend.herokuapp.com')
        cy.get(this.boxbusca).type(email)
        cy.get(this.atualizar).click()
        cy.get(this.buttoneditar).click()
        cy.get(this.inputnome).clear()
        cy.get(this.inputnome).type(randomName)
        cy.get(this.inputemail).clear()
        cy.get(this.inputemail).type(randomEmail)
    }
    atualizarusuariocomnomeinvalido(nome){
        cy.visit('https://academy-crud-frontend.herokuapp.com')
        cy.get(this.boxbusca).type(nome)
        cy.get(this.atualizar).click()
        cy.get(this.buttoneditar).click()
        cy.get(this.inputnome).clear()
        cy.get(this.inputnome).type('José1')
        cy.get(this.buttonsalvar).click()
        cy.contains('Formato do nome é inválido.')

    }
    atualizarcomcamposvazios(nome){
        cy.visit('https://academy-crud-frontend.herokuapp.com')
        cy.get(this.boxbusca).type(nome)
        cy.get(this.atualizar).click()
        cy.get(this.buttoneditar).click()
        cy.get(this.inputnome).clear()
        cy.get(this.inputemail).clear()
        cy.get(this.buttonsalvar).click()
        cy.contains('O campo nome é obrigatório.')

    }
    atualizartamanho(nome){
        cy.visit('https://academy-crud-frontend.herokuapp.com')
        cy.get(this.boxbusca).type(nome)
        cy.get(this.atualizar).click()
        cy.get(this.buttoneditar).click()
        cy.get(this.inputnome).clear()
        cy.get(this.inputnome).type(sizename)
        cy.get(this.inputemail).clear()
        cy.get(this.inputemail).type(randomEmail)
        cy.get(this.buttonsalvar).click()
        cy.contains('Informe no máximo 100 caracteres para o nome') 
    }
    atualizartamanhoemail(nome){
        cy.visit('https://academy-crud-frontend.herokuapp.com')
        cy.get(this.boxbusca).type(nome)
        cy.get(this.atualizar).click()
        cy.get(this.buttoneditar).click()
        cy.get(this.inputnome).clear()
        cy.get(this.inputnome).type(randomName)
        cy.get(this.inputemail).clear()
        cy.get(this.inputemail).type(sizemail)
        cy.get(this.buttonsalvar).click()
        cy.contains('Informe no máximo 60 caracteres para o e-mail')
        
    }

}
export var atualizarcadastro = new AtualizarCadastro();