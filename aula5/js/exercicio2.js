var num = document.getElementById('num');

function soma(){
    if(parseInt(num.value) % 2){
        document.getElementById('show').innerHTML = 'impar';
    }else{
        document.getElementById('show').innerHTML = 'par';
    }
}