class DeletarUsuario{
    nomeUsuario = "p[data-test='userDataName']"
    boxbusca = ".sc-gKXOVf"
    botaoconfirmar= ".gBlXkK"
    botaocancelar= ".kZMnfO"
    botaox = ".dBcBxJ"
    boxsucesso = ".go3958317564"
    botaodeletar = "button[data-test='userDataDelete']"
    limparbusca=".sc-iBkjds"

    deletarusuario(nome){
       cy.visit('https://academy-crud-frontend.herokuapp.com')
       cy.get(this.boxbusca).type(nome)
       cy.get(this.botaodeletar).click()
       cy.get(this.botaoconfirmar).click()
       cy.get(this.boxsucesso).should('be.visible')
       cy.contains('Usuário removido!')
       cy.get(this.limparbusca).click()
    }
    deletarusuariopeloemail(email){
        cy.visit('https://academy-crud-frontend.herokuapp.com')
        cy.get(this.boxbusca).type(email)
        cy.get(this.botaodeletar).click()
        cy.get(this.botaoconfirmar).click()
        cy.get(this.boxsucesso).should('be.visible')
        cy.contains('Usuário removido!')
        cy.get(this.limparbusca).click()
     }
}
export var deletarusuario = new DeletarUsuario();