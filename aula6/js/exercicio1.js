let nome = [];
let ind = [val = 1];
let pergunta = prompt("add nome");
while(pergunta != null){
	nome.push(pergunta);
	ind.push(val++);
	document.getElementById("getValueName").innerHTML += `${nome} <br>`;
	document.getElementById("getValueInd").innerHTML += `${ind} <br>`;

	if(ind[0] == ind[1]){
		ind.shift(0);
	}
	if(nome[length]){
		nome.shift(0);
	}
	if(ind[length]){
		ind.shift(0);
	}

	pergunta = prompt("add nome");
}