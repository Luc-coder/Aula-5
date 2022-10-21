let btnCadastrar = document.getElementById('btnCadastrar');
let btnExibir = document.getElementById('btnExibir');


let nome = document.getElementById('nome');
let rgm = document.getElementById('rgm');
let notaParcial = document.getElementById('notaParcial');
let notaExercicio = document.getElementById('notaExercicio');
let notaProjeto = document.getElementById('notaProjeto');
let notaRegimental = document.getElementById('notaRegimental');


let nomeList = [];
let rgmList = [];
let notaParcialList = [];
let notaExercicioList = [];
let notaProjetoList = [];
let notaRegimentalList = [];

btnCadastrar.addEventListener("click", cadastrar);
btnExibir.addEventListener("click", exibir);

function cadastrar(){
	nomeList.push(nome.value);
	rgmList.push(parseInt(rgm.value));
	notaParcialList.push(parseFloat(notaParcial.value));
	notaExercicioList.push(parseFloat(notaExercicio.value));
	notaProjetoList.push(parseFloat(notaProjeto.value));
	notaRegimentalList.push(parseFloat(notaRegimental.value));
	cleanForm();
}

function exibir(){
	console.log(nomeList);
	console.log(rgmList);
	console.log(notaParcialList);
	console.log(notaExercicioList);
	console.log(notaProjetoList);
	console.log(notaRegimentalList);
}

function cleanForm(){
	nome.value = "";
	rgm.value = "";
	notaParcial.value = "";
	notaExercicio.value = "";
	notaProjeto.value = "";
	notaRegimental.value = "";
}