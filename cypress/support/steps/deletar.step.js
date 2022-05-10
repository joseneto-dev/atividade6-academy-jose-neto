import { deletarusuario } from "../pages/DeletarUsuario.po";
Given(/^ao acessar a aplicacao$/, () => {
	deletarusuario.visitar()
});

When(/^busco pelo usuario que desejo excluir$/, () => {
	deletarusuario.buscarusuario('teste')
	deletarusuario.mock()
});

Then(/^clico no botao excluir um usuario$/, () => {
	
	deletarusuario.deletarusuario()
});

Then(/^confirmo que desejo excluir o usuario$/, () => {
	deletarusuario.confirmardelete()
});
