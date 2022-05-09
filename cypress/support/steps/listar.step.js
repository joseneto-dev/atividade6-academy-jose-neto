import { listaPage } from "../pages/ListarPage.po";


Given(/^acessei aplicacao$/, () => {
    listaPage.visitar()
});

When(/^a pagina carregar$/, () => {
	cy.wait(1000)
});

Then(/^eu consigo verificar os usuarios cadastrados$/, () => {
	listaPage.verificarUsuario('Joao')
});
