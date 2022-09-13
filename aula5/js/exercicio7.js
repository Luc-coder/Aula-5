function mas(){
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    var imc = peso / (altura * altura);

    if(imc < 20.7){
        document.getElementById('show').innerHTML = 'abaixo do peso' + imc;
    }else if(imc < 26.4){
        document.getElementById('show').innerHTML = 'peso normal' + imc;
    }else if(imc < 27.8){
        document.getElementById('show').innerHTML = 'marginalmente acima do peso' + imc;
    }else if(imc < 31.1){
        document.getElementById('show').innerHTML = 'acima do peso ideal' + imc;
    }else{
        document.getElementById('show').innerHTML = 'obeso' + imc;
    }
}

function fem(){
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    var imc = peso / (altura * altura);

    if(imc < 19.1){
        document.getElementById('show').innerHTML = 'abaixo do peso' + imc;
    }else if(imc < 25.8){
        document.getElementById('show').innerHTML = 'peso normal' + imc;
    }else if(imc < 27.3){
        document.getElementById('show').innerHTML = 'marginalmente acima do peso' + imc;
    }else if(imc < 32.3){
        document.getElementById('show').innerHTML = 'acima do peso ideal' + imc;
    }else{
        document.getElementById('show').innerHTML = 'obeso' + imc;
    }
}