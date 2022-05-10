import { atualizarcadastro } from "../pages/AtualizarCadastro.po";

Given(/^acessei aplicacao$/, () => {
	atualizarcadastro.visitar()
	
	
});
When(/^busco pelo usuario que desejo atulizar$/, () => {
	atualizarcadastro.buscanome('teste')
	
	
});
When("a pagina carregar", () => {
});

When(/^clico no botao ver detalhes$/, () => {
	atualizarcadastro.mock()
	atualizarcadastro.botaoverdetalhe()
});

Then(/^clico no botao editar$/, () => {
	atualizarcadastro.button()
});

Then(/^digito as informações de usuario e email para atualizar.$/, () => {
	atualizarcadastro.atualizarusuario()
	atualizarcadastro.alterarbutton()
});

Then(/^visualizo uma mensagem de Informações atualizadas com sucesso!$/, () => {
	return true;
});

When(/^busco pelo usuario que desejo atulizar$/, () => {
	atualizarcadastro.buscanome()
});

When(/^clico no botao ver detalhes$/, () => {
	atualizarcadastro.verdetalhe()
});

Then(/^clico no botao editar$/, () => {
	atualizarcadastro.buttoneditar()
});

Then(/^digito as informações de usuario e email para atualizar.$/, () => {
	atualizarcadastro.atualizarusuariocomemailinvalido
});

Then(/^visualizo uma mensagem de$/, () => {
	atualizarcadastro.formatoinvalido()
});




When(/^busco pelo usuario que desejo atulizar$/, () => {
	atualizarcadastro.buscanome()
});

When(/^clico no botao ver detalhes$/, () => {
	atualizarcadastro.verdetalhe()
});

Then(/^clico no botao editar$/, () => {
	atualizarcadastro.buttoneditar()
});

Then(/^digito as informações de usuario e email para atualizar.$/, () => {
	atualizarcadastro.atualizarusuariocomemailjaútilizado()
});

Then(/^visualizo uma mensagem de$/, () => {
	return true;
});




When(/^busco pelo usuario que desejo atulizar$/, () => {
	atualizarcadastro.buscanome()
});

When(/^clico no botao ver detalhes$/, () => {
	atualizarcadastro.verdetalhe()
});

Then(/^clico no botao editar$/, () => {
	atualizarcadastro.buttoneditar()
});

Then(/^digito as informações de usuario e email para atualizar.$/, () => {
	atualizarcadastro.atualizartamanho()
});

Then(/^visualizo uma mensagem de email$/, () => {
	atualizarcadastro.tamanhonome()
});



When(/^busco pelo usuario que desejo atulizar$/, () => {
	atualizarcadastro.buscanome()
});

When(/^clico no botao ver detalhes$/, () => {
	atualizarcadastro.verdetalhe()
});

Then(/^clico no botao editar$/, () => {
	atualizarcadastro.buttoneditar()
});

Then(/^digito as informações de usuario e email para atualizar.$/, () => {
	atualizarcadastro.tamanhoemail()
});

Then(/^visualizo uma mensagem de email$/, () => {
	atualizarcadastro.tamanhoemail()
});
