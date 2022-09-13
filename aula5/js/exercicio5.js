function calcular(){
    var nota1 = parseInt(document.getElementById('nota1').value);
    var nota2 = parseInt(document.getElementById('nota2').value);
    var nota3 = parseInt(document.getElementById('nota3').value);

    var resultado = (nota1 + nota2 + nota3) / 3;

    if(resultado < 3){
        document.getElementById('show').innerHTML = 'reprovado';
    }else if(resultado >= 6){
        document.getElementById('show').innerHTML = 'aprovado';
    }else{
        document.getElementById('show').innerHTML = 'exame';
    }
}