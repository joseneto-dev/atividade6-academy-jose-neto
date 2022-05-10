import { listaPage } from "../pages/ListarPage.po";

Given('acessei aplicacao', () => {
    listaPage.visitar()
});
When("a pagina carregar", () => {
    
});
Then('busco o usuario que desejo visualizar', () => {
	listaPage.verificarUsuario('João')
});
Then("eu consigo verificar os usuarios cadastrados", () => {

});

