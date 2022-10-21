let num = document.getElementById('num');
let btn = document.getElementById('btn');
btn.addEventListener("click", calcular);

function calcular(){
	let x = 0;
	let resultado = 0;
	while(x < 11){
		resultado = parseInt(num.value) * x;
		document.getElementById('ulShow').innerHTML += `<li>${parseInt(num.value)} * ${x} = ${resultado}</li>`;
		x++;
	}
}