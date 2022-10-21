let btn = document.getElementById('btn');
btn.addEventListener("click", tempo);
let show = document.getElementById('show');

function tempo(){
	console.log("teste");
	let x = 1;
	setInterval(function(){show.innerHTML = x++}, 1000);
}