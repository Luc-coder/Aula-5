function calcular(){
    var base = document.getElementById('base');
    var altura = document.getElementById('altura');
    var area = (parseInt(base.value) * parseInt(altura.value)) / 2;
    document.getElementById('show').innerHTML = 'O valor da área é ' + area;
}