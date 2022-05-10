import { cadastrarusuario } from "../pages/CadastrarUsuario.po";

Given(/^acessei aplicacao$/, () => {
	cadastrarusuario.visitar()
});


When(/^clico no botao Novo para realizar um novo cadastrado$/, () => {
	cadastrarusuario.clicarbuttonnovo()
});

Then(/^digito as informações de usuario e email para cadastro$/, () => {
	cadastrarusuario.cadastrarusuarios()
	cadastrarusuario.clicarcadastro()
});

Then(/^visualizo uma mensagem de cadastro realizado com sucesso.$/, () => {
	cadastrarusuario.cadastrosucesso()
});





When(/^clico no botao Novo para realizar um novo cadastrado$/, () => {
	cadastrarusuario.clicarbuttonnovo()
});

Then(/^digito as informações de usuario e email invalido para cadastro$/, () => {
	cadastrarusuario.cadastroemailinvalido()
	cadastrarusuario.clicarcadastro()
});

Then(/^visualizo uma mensagem de email invalido "([^"]*)"$/, () => {
	cadastrarusuario.erroformatoinvalido()
});


When(/^clico no botao Novo para realizar um novo cadastrado$/, () => {
	cadastrarusuario.clicarbuttonnovo()
});

Then(/^digito as informações de usuario invalido e email para cadastro$/, () => {
	cadastrarusuario.cadastronomeinvalido()
	cadastrarusuario.clicarcadastro()
});

Then(/^visualizo uma mensagem do nome invalido "([^"]*)"$/, () => {
	cadastrarusuario.erroformatoinvalidonome()
});


When(/^clico no botao Novo para realizar um novo cadastrado$/, () => {
	cadastrarusuario.clicarbuttonnovo()
});

Then(/^digito as informações de usuario e email para cadastro$/, () => {
	cadastrarusuario.cadastraremailutilizado()
});

Then(/^visualizo uma mensagem de email já utilizado "([^"]*)"$/, () => {
	cadastrarusuario.modalerroemail()
});



When(/^clico no botao Novo para realizar um novo cadastrado$/, () => {
	cadastrarusuario.clicarbuttonnovo()
});

Then(/^digito as informações de usuario e email para cadastro$/, () => {
	cadastrarusuario.cadastrosizenome()
	cadastrarusuario.clicarcadastro()
});

Then(/^visualizo uma mensagem de nome com a mensagem "([^"]*)"$/, () => {
	cadastrarusuario.mensageminvalidanome()
});



When(/^clico no botao Novo para realizar um novo cadastrado$/, () => {
	cadastrarusuario.clicarbuttonnovo()
});

Then(/^digito as informações de usuario e email para cadastro$/, () => {
	cadastrarusuario.cadastrosizeemail()
	cadastrarusuario.clicarcadastro()
});

Then(/^visualizo uma mensagem de email já utilizado "([^"]*)"$/, () => {
	cadastrarusuario.mensageminvalidaemail()
});
