function validar(){

	

	/*Verificando se deseja receber promoção*/
	var sim = document.getElementById("ckbSim").checked
	var nao = document.getElementById("ckbNao").checked
	
	var x = document.getElementById("sltSexo").selectedIndex;
	var y = document.getElementById("sltSexo").options;
	
	/*Verifica de tem opção de sexo selecionada*/
	if((y[x].index == 1) || (y[x].index == 2)){

	/*Verifica se apenas uma opção esta marcada para receber promoções*/
	if( ((sim == true) && (nao == false)) || ((sim == false) && (nao == true)) ){
			
		var cpf =  document.getElementById("txtCpf").value
		var nome =  document.getElementById("txtNome").value
		var endereco =  document.getElementById("txtEndereco").value
		var cidade =  document.getElementById("txtCidade").value
		var sexo =  document.getElementById("sltSexo").value
		var telefone =  document.getElementById("txtTelefone").value
		var email =  document.getElementById("txtEmail").value
		var senha =  document.getElementById("pwdSenha").value
		var obs = document.getElementById("txaObs").value

		if(sim == true){
			sim = "Desejo Receber Promoção"				
			alert(cpf + "\n" + nome + "\n" + endereco + "\n" + cidade + "\n" + sexo + "\n" + telefone + "\n" + email + "\n" + senha + "\n" + sim + "\n" + obs)

		}else if(sim != true){
			nao = "Não Desejo receber promoções"
			alert(cpf + "\n" + nome + "\n" + endereco + "\n" + cidade + "\n" + sexo + "\n" + telefone + "\n" + email + "\n" + senha + "\n" + nao + "\n" + obs)
		}
		}else{
			alert("Campo inválido em (RECEBER PROMOÇÕES) selecione apenas uma opção.")
			}
		}else{
			alert("Escolha o seu sexo.")
		}
}

function maiusculas()
{
    var nome = document.getElementById("txtNome").value;
    document.getElementById("txtNome").value = nome.toUpperCase();
    var endereco = document.getElementById("txtEndereco").value;
    document.getElementById("txtEndereco").value = endereco.toUpperCase();
    var cidade = document.getElementById("txtCidade").value;
    document.getElementById("txtCidade").value = cidade.toUpperCase();
    var obs = document.getElementById("txaObs").value;
    document.getElementById("txaObs").value = obs.toUpperCase();
}

function minusculas(){
    var email = document.getElementById("email").value;
    document.getElementById("email").value = email.toLowerCase();
}

function soLetras(){
    var tecla = (window.event) ? event.keyCode : obj.which;
    if((tecla > 65 && tecla < 90) || (tecla > 96 && tecla < 122) || (tecla == 32))
    	return true;
    else{
    	if (tecla != 8) return false;
        else return true;
    }
}

function soNumero(){
     var tecla = (window.event) ? event.keyCode : obj.which;
 
	if((tecla > 47 && tecla < 58)){
		return true;
		}else{
			if (tecla != 8){
			return false;
		}else{
			return true;
		}
	}
}

/*Verifica se alguma coisa foi digitada no campo email*/
function verificaCamposEmail() {
  if (document.forms[0].txtEmail.value.length == 0) {
  	alert("Por favor, informe o seu Email.");	
    return false;
  }
  	return true;
	}
/*Verifica se o padrão com @ e ao menos um ponto foi usado corretamente.*/
function checarEmail(){
	if( document.forms[0].email.value=="" || document.forms[0].email.value.indexOf('@')==-1
		|| document.forms[0].email.value.indexOf('.')==-1 )
		{
			alert( "Por favor, informe um E-MAIL válido!" );
			return false;
		}
	}

/*Contado caracteres no Text Area - OBSERVAÇÕES*/
function contarCaracter(){
	var totalcaracter = document.getElementById("txaObs").value.length
	if(totalcaracter <=200){
		return true;
	}else{
		alert("Você digitou:" + totalcaracter + "\n" + "O maximo permitido é 200.");
	}
}

/**Verifica se SENHA contem campos em branco*/
function checarSenha(){
var validSenha =  document.getElementById("pwdSenha").value
if((validSenha.value == '') || (validSenha.length < 6)){
alert( "Não inserir 'ESPAÇOS EM BRANCO' e inserir no mínimo '6 CARACTERES'." );
return false;
}
return true;
}

function msgReceberPromo(){
	var sim = document.getElementById("ckbSim").checked
	if(sim == document.getElementById.options){
		alert("testo 2")
	}else{
		alert("texto aqui")
	}
}