function soma(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resultado = parseInt(num1) + parseInt(num2);
    document.getElementById('show').innerHTML = resultado;
}

function menos(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resultado = parseInt(num1) - parseInt(num2);
    document.getElementById('show').innerHTML = resultado;
}

function times(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resultado = parseInt(num1) * parseInt(num2);
    document.getElementById('show').innerHTML = resultado;
}

function divide(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resultado = parseInt(num1) / parseInt(num2);
    document.getElementById('show').innerHTML = resultado;
}