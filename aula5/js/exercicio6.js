var valorCompra = document.getElementById('valorCompra');
var resultado = 0;

function opt1(){
    resultado = (parseInt(valorCompra.value) * 90) / 100;
    document.getElementById('show').innerHTML = 'O valor da compra é R$' + valorCompra.value + ',00' + ' e com 10% de desconto fica R$' + resultado + ',00';
}

function opt2(){
    resultado = (parseInt(valorCompra.value) * 95) / 100;
    document.getElementById('show').innerHTML = 'O valor da compra é R$' + valorCompra.value + ',00' + ' e com 5% de desconto fica R$' + resultado + ',00';
}

function opt3(){
    resultado = (parseInt(valorCompra.value) * 110) / 100;
    document.getElementById('show').innerHTML = 'O valor da compra é R$' + valorCompra.value + ',00' + ' e parcelado tem 10% de aumento R$' + resultado + ',00';
}