class ListarPage {
    nomeUsuario = "p[data-test='userDataName']"

    visitar() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
    }

    verificarUsuario(nome) {
        cy.contains(this.nomeUsuario, nome);
    }
    verificarUsuarioinexistente(nome) {   //terminar
        cy.get('.sc-gKXOVf').type('José')
        cy.get('h3').should('have.text','Ops! Não existe nenhum usuário para ser exibido.')
        cy.get('.sc-ezWOiH').should('have.attr', 'href')
    }

}

export var listaPage = new ListarPage();