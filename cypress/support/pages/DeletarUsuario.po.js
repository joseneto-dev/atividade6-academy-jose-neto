class DeletarUsuario{
    nomeUsuario = "p[data-test='userDataName']"
    boxbusca = ".sc-gKXOVf"
    botaoconfirmar= ".gBlXkK"
    botaocancelar= ".kZMnfO"
    botaox = ".dBcBxJ"
    boxsucesso = ".go3958317564"
    botaodeletar = "button[data-test='userDataDelete']"
    limparbusca=".sc-iBkjds"
   visitar(){
      cy.visit('https://academy-crud-frontend.herokuapp.com')
   }
   buscarusuario(nome){
      cy.get(this.boxbusca).type(nome)
   }
   buscarusuario(email){
      cy.get(this.boxbusca).type(nome)
   }
    deletarusuario(){
       cy.get(this.botaodeletar).click()
       cy.get(this.limparbusca).click()
    }
     confirmardelete(){
      cy.get(this.botaoconfirmar).click()
      cy.get(this.boxsucesso).should('be.visible')
      cy.contains('Usuário removido!')
     }
     
}
export var deletarusuario = new DeletarUsuario();