function calcular(){
    var sal = document.getElementById('sal').value;
    if(parseFloat(sal) < 1434){
        document.getElementById('show').innerHTML = '0% (isento)';
    }else if(parseFloat(sal) < 2150){
        document.getElementById('show').innerHTML = '7,5%';
    }else if(parseFloat(sal) < 2866){
        document.getElementById('show').innerHTML = '15%';
    }else if(parseFloat(sal) < 3582){
        document.getElementById('show').innerHTML = '22,5%';
    }else{
        document.getElementById('show').innerHTML = '27,5%';
    }
}