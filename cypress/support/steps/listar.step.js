import { listaPage } from "../pages/ListarPage.po";

Given('acessei aplicacao', () => {
    listaPage.visitar()
});
When("a pagina carregar", () => {
    listaPage.mock()
});
Then('busco o usuario que desejo visualizar', () => {
	listaPage.verificarUsuario('teste')
});
Then("eu consigo verificar os usuarios cadastrados", () => {

});

Given(/^acessei aplicacao$/, () => {
	listaPage.visitar()
});
When(/^ao carregar a pagina$/, () => {
	listaPage.mock()
});
When(/^busco o usuario que desejo visualizar$/, () => {
	listaPage.verificarUsuarioinexistente('José')
});
Then(/^consigo ver a opcao de cadastrar usuario$/, () => {
	return true;
});
