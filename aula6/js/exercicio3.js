let txt = document.getElementById('txt').value;

let maiuscula = document.getElementById('maiuscula');
let dividida = document.getElementById('dividida');

maiuscula.addEventListener("click", function(){
	document.getElementById('show').style.textTransform = "uppercase";
	show.innerHTML += txt;
});

dividida.addEventListener("click", function(string){
	saida = "";
	for(let i = txt.length-1; i >= 0; i--){
		saida+= string[i]
	}

	document.getElementById('show').innerHTML = saida;
});	