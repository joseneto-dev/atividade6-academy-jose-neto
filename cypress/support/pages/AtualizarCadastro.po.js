const { faker } = require('@faker-js/faker');

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const sizename = faker.random.words(20)
const sizemail = faker.internet.exampleEmail('Jeannnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnne')

class AtualizarCadastro{
    boxbusca = ".sc-gKXOVf"
    verdetalhe ="#userDataDetalhe"
    buttoneditar = "button[type='button']"
    inputnome = "#userName"
    inputemail = "#userEmail"
    buttoncancelar = ".cSMKmK"
    buttonsalvar = '.ghcSEQ'
    buttonvoltar = ".sc-gsnTZi"
    cadastroerrorcampos = ".sc-ksZaOG"

    visitar(){
        cy.visit('https://academy-crud-frontend.herokuapp.com')
    }

    atualizarusuario(){
        cy.get(this.buttoneditar).click()
        cy.get(this.inputnome).clear()
        cy.get(this.inputnome).type(randomName)
        cy.get(this.inputemail).clear()
        cy.get(this.inputemail).type(randomEmail)
    }
    buscanome(nome){
        cy.get(this.boxbusca).type(nome)
    }
    buscaemail(email){
        cy.get(this.boxbusca).type(email)
    }
    alterarbutton(){
        cy.get(this.buttonsalvar).click()
    }
    botaoverdetalhe(){
        cy.get(this.verdetalhe).click()
    }
    buttoneditar(){
        cy.get(this.buttoneditar).click()
    }
    atualizarusuario(){
        cy.get(this.inputnome).clear()
        cy.get(this.inputnome).type(randomName)
        cy.get(this.inputemail).clear()
        cy.get(this.inputemail).type(randomEmail)
    }
    atualizarusuariocomnomeinvalido(){
        cy.get(this.inputnome).clear()
        cy.get(this.inputnome).type('José1')
    }
    atualizarusuariocomnomeinvalido(){
        cy.get(this.inputnome).clear()
        cy.get(this.inputnome).type('José1')
    }
    atualizarusuariocomemailjaútilizado(){
        cy.get(this.inputnome).clear()
        cy.get(this.inputnome).type('José1')
    }
    formatoinvalido(){
        cy.contains('Formato do nome é inválido.')
    }
    atualizarcomcamposvazios(){
        cy.get(this.inputnome).clear()
        cy.get(this.inputemail).clear()      
    }
    campoobrigatorio(){
        cy.contains('O campo nome é obrigatório.')
    }
    atualizartamanho(){
        cy.get(this.inputnome).clear()
        cy.get(this.inputnome).type(sizename)
        cy.get(this.inputemail).clear()
        cy.get(this.inputemail).type(randomEmail)
    }
    tamanhonome(){
        cy.contains('Informe no máximo 100 caracteres para o nome') 
    }
    tamanhoemail(){
        cy.contains('Informe no máximo 60 caracteres para o e-mail')
    }
    atualizartamanhoemail(){
        cy.get(this.inputnome).clear()
        cy.get(this.inputnome).type(randomName)
        cy.get(this.inputemail).clear()
        cy.get(this.inputemail).type(sizemail)
    }

}
export var atualizarcadastro = new AtualizarCadastro();