function verifica(){
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');

    if(parseInt(num1.value) > parseInt(num2.value)){
        document.getElementById('show').innerHTML = parseInt(num1.value) + ' é maior';
    }else if(parseInt(num2.value) > parseInt(num1.value)){
        document.getElementById('show').innerHTML = parseInt(num2.value) + ' é maior';
    }else{
        document.getElementById('show').innerHTML = 'Os números são iguais';
    }
}