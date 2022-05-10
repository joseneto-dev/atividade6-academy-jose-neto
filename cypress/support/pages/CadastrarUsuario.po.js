const { faker } = require('@faker-js/faker');

const randomName = faker.name.findName(); 
const randomEmail = faker.internet.email();
const sizename = ('Jeannnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnne')
const sizemail = ('Jeannnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnne@gmail.com')

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
        cy.visit("https://academy-crud-frontend.herokuapp.com/users")
    }
    clicarbuttonnovo(){
        cy.get(this.botaonovo).click()
    }
    clicarcadastro(){
        cy.get(this.botaodecadastro).click()
    }
    cadastrarusuarios(){
        cy.get(this.inputname).type(randomName)
        cy.get(this.inputemail).type(randomEmail)
    }
    cadastrosucesso(){
        cy.contains('Usuário salvo com sucesso!')
    }
    cadastraremailutilizado(){
        cy.get(this.inputname).type(randomName)
        cy.get(this.inputemail).type('o@g.com')
        
    }
    modalerroemail(){
        cy.contains('Este e-mail já é utilizado por outro usuário.')
        cy.get(this.fecharmodalerro).click()
    }
    cadastroemailinvalido(){
        cy.get(this.inputname).type("Pamela Blick")
        cy.get(this.inputemail).type('josiah.aufderhar.yahoo.com')
        
    }
    cadastronomeinvalido(){
        cy.get(this.inputname).type("Pamela Blick11")
        cy.get(this.inputemail).type('josiah@aufderhar.yahoo.com')
        
    }
    erroformatoinvalido(){
        
        cy.contains('Formato de e-mail inválido')
        cy.get(this.botaovoltar).click()
    }
    erroformatoinvalidonome(){
        
        cy.contains('Formato do nome é inválido')
        cy.get(this.botaovoltar).click()
    }
    cadastrosizename(){
        cy.get(this.inputname).type(sizename)
        cy.get(this.inputemail).type(randomEmail)
        
    }
    cadastrosizeemail(){
    cy.get(this.inputname).type(randomName)
    cy.get(this.inputemail).type(sizemail)
    
    }
    mensageminvalidanome(){
        cy.contains('Informe no máximo 100 caracteres para o nome')
        
    }
    mensageminvalidaemail(){
        cy.contains('Informe no máximo 60 caracteres para o e-mail')
    }


    cadastrovazio(){
        cy.get(this.botaodecadastro).click()
        cy.contains('O campo nome é obrigatório.')

    }
}
export var cadastrarusuario = new CadastrarUsuario();