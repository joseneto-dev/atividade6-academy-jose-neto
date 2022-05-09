const { faker } = require('@faker-js/faker');

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const sizename = faker.random.words(20)
const sizemail = faker.internet.exampleEmail('Jeannnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnne')

class CadastrarUsuario {
    nomeUsuario = "p[data-test='userDataName']"
    botaonovo = ".sc-gsnTZi"
    inputname = "#name"
    inputemail= "#email"
    botaodecadastro= "button[type='submit']"
    fecharmodalerro = ".sc-jdAMXn"
    botaovoltar = ".sc-gsnTZi"
    cadastroerrorcampos = ".sc-ksZaOG"
    visitar() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
    }
    cadastrarusuario(){
        cy.visit('https://academy-crud-frontend.herokuapp.com')
        cy.get(this.botaonovo).click()
        cy.get(this.inputname).type(randomName)
        cy.get(this.inputemail).type(randomEmail)
        cy.get(this.botaodecadastro).click()
        cy.get(this.boxsucesso).should('be.visible')
        cy.contains('Usuário salvo com sucesso!')
    }
    cadastrarusuarioemailutilizado(){
        cy.visit('https://academy-crud-frontend.herokuapp.com')
        cy.get(this.botaonovo).click()
        cy.get(this.inputname).type(randomName)
        cy.get(this.inputemail).type('loud@rihanna.com')
        cy.get(this.botaodecadastro).click()
        cy.contains('Este e-mail já é utilizado por outro usuário.')
        cy.get(this.fecharmodalerro).click()
    }
    
    cadastroemailincorreto(){
        cy.visit('https://academy-crud-frontend.herokuapp.com')
        cy.get(this.botaonovo).click()
        cy.get(this.inputname).type("Pamela Blick")
        cy.get(this.inputemail).type('josiah.aufderhar.yahoo.com')
        cy.get(this.botaodecadastro).click()
        cy.contains('Formato de e-mail inválido')
        cy.get(this.botaovoltar).click()
    }
    cadastrosize(){
        cy.visit('https://academy-crud-frontend.herokuapp.com')
        cy.get(this.botaonovo).click()
        cy.get(this.inputname).type(sizename)
        cy.get(this.inputemail).type(sizemail)
        cy.get(this.botaodecadastro).click()
        cy.get(this.nomemaior100carac).should('be.visible')
        cy.contains('Informe no máximo 100 caracteres para o nome')
        cy.contains('Informe no máximo 60 caracteres para o e-mail')
}
    cadastrovazio(){
        cy.visit('https://academy-crud-frontend.herokuapp.com')
        cy.get(this.botaonovo).click()
        cy.get(this.botaodecadastro).click()
        cy.contains('O campo nome é obrigatório.')

    }
}
export var cadastrarusuario = new CadastrarUsuario();