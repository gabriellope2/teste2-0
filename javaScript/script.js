
function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
    document.getElementById('ibge').value=(conteudo.ibge);
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";


        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
};



//cookie-----------------

function setCookie(cname,cvalue,exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i < ca.length; i++) {
	  let c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }
  
  function checkCookie() {
	let user = getCookie("username");
	if (user != "") {
	  alert("Bem vindo de volta " + user);
	} else {
	   user = prompt("digite seu nome","");
	   if (user != "" && user != null) {
		 setCookie("username", user, 30);
	   }
	}
  }

//-----------------


function mudar1(){

	window.location.href = "fogao.html"
}

function mudar2(){

	window.location.href = "geladeira.html"
}
function mudar3(){

	window.location.href = "maquina.html"
}
function mudar4(){

	window.location.href = "micro.html"
}
function mudar5(){
    window.location.href="secadora.html"
}
function mudar6(){
    window.location.href="exaustor.html"
}
function compra(){

  window.location.href = "comprar.html";
}
function finaliza(){

    window.location.href= "produtos.html"
}
function mudar(){

        window.location.href = "menu.html"
   }





function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function validarEmail(){
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');
    
    if(!email.checkValidity()){
      error.innerHTML = "Email invalido";  
    }

    else{
        window.location.href="produtos.html"
    }
     
  }
  
  function redefinirMsg(){
    var error = document.querySelector('#error-email');
    if (error.innerHTML == "Email invalido"){
      error.innerHTML = "";
    }
  }


