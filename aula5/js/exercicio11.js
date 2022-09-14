function calcular(){
    var recebeNum = parseInt(document.getElementById('recebeNum').value);
    var recebe = 0;
    var resultado = undefined;

    while(recebe < recebeNum){
        resultado = recebe + recebeNum;
        recebe += 1;
    }

    document.getElementById('show').innerHTML = resultado;
}