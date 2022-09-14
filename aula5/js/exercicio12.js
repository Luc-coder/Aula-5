function apostar(){
    var aposta = parseInt(document.getElementById('aposta').value);
    var sorteador = Math.round(Math.random() * 10);
    var contador = 0;

    if(aposta == sorteador){
        document.getElementById('show').innerHTML = 'Você ganhou a aposta' + sorteador + ' e você precisou de ' + contador + ' jogadas para ganhar';
    }else if(aposta > sorteador){
        contador += 1;
        document.getElementById('show').innerHTML = 'Seu número foi maior ' + sorteador;
    }else if(aposta < sorteador){
        contador += 1;
        document.getElementById('show').innerHTML = 'Seu número foi menor' + sorteador;
    }
}