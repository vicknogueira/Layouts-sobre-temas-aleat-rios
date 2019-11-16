function abrirmenu(){
    document.getElementById('homemenu').innerHTML = 'Home';
    document.getElementById('cadmenu').innerHTML = 'Cadastro';
    document.getElementById('logmenu').innerHTML = 'Login';

    let menu = document.querySelector('div.navegue');

    menu.style.backgroundColor = '#ffffffd9';
    menu.style.transform = 'translateY(0%)';
    menu.style.height = '200px';
    menu.style.width = '110px';
    menu.style.position = 'absolute';

    homemenu.style.transform = 'translateX(0%)';
    homemenu.style.fontSize = '12px';
    homemenu.style.color = 'black';
    homemenu.style.cursor = 'pointer';
    cadmenu.style.transform = 'translateX(0%)';
    cadmenu.style.fontSize = '12px';
    cadmenu.style.color = 'black';
    logmenu.style.transform = 'translateX(0%)';
    logmenu.style.fontSize = '12px';
    logmenu.style.color = 'black';

}
function fechar(){

    let fechando = document.querySelector('div.navegue');
    fecha.style = '';
    homemenu.innerHTML = '';
    cadmenu.innerHTML = '';
    logmenu.innerHTML = '';
}