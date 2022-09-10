var show = document.getElementById('show');
var buttons = Array.from(document.getElementsByClassName('button'));
    
buttons.map(myFunction);

function myFunction(button){
    button.addEventListener('click', (e) =>{
        switch(e.target.innerHTML){
            case '=':
                try{
                    show.innerHTML = eval(show.innerText);
                }catch{
                    show.innerHTML = 'Erro!';
                }
                break;
            case 'C':
                show.innerHTML = '';
                break;
            case '←':
                show.innerHTML = show.innerText.slice(0, -1);
                break;
            default:
                show.innerHTML += e.target.innerHTML;
        }
    });
}