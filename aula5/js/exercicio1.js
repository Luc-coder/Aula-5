var valorCompra = document.getElementById('valorCompra');
var tela1 = document.getElementById('tela1');
var tela2 = document.getElementById('tela2');
var tela3 = document.getElementById('tela3');

function proximo(){
    tela1.style.display = 'none';
    tela2.style.display = 'block';
    document.getElementById('show').innerHTML = parseInt(valorCompra.value);
}

var button = Array.from(document.getElementsByClassName('valor'));
button.map(soma);

function soma(button){
    button.addEventListener('click', (e) =>{
        switch(e.target.innerHTML){
            case '1':
                tela2.style.display = 'none';
                tela3.style.display = 'block';
                document.getElementById('valorFinal').innerHTML = 'O valor da compra foi de ' + valorCompra.value;
                break;
            case '2':
                tela2.style.display = 'none';
                tela3.style.display = 'block';
                var resultado = ((valorCompra.value * 103) / 100) / 2;
                document.getElementById('valorFinal').innerHTML = 'O valor da compra foi de R$' + resultado + ',00';
                break;
            case '4':
                tela2.style.display = 'none';
                tela3.style.display = 'block';
                var resultado = ((valorCompra.value * 107) / 100) / 4;
                document.getElementById('valorFinal').innerHTML = 'O valor da compra foi de R$' + resultado + ',00';
                break;
        }
    });
}