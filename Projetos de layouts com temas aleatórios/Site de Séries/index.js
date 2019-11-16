function abre(){
    document.getElementById('op').innerHTML = 'Ação';
    document.getElementById('op1').innerHTML = 'Terror';
    document.getElementById('op2').innerHTML = 'Comédia';
    document.getElementById('op3').innerHTML = 'Romance';
    document.getElementById('op4').innerHTML = 'Ficção-Cient.';
    document.getElementById('op5').innerHTML = 'Suspense';


    let box = document.querySelector('div.caixa');

    box.style.backgroundColor = '#1f1f1fe0';
    box.style.height = '218px';
    box.style.position = 'absolute';

    op.style.fontSize = '15px';
    op.style.color = 'white';
    op1.style.fontSize = '15px';
    op1.style.color = 'white';
    op2.style.color = 'White';
    op2.style.fontSize = '15px';
    op3.style.color = 'White';
    op3.style.fontSize = '15px';
    op4.style.color = 'White';
    op4.style.fontSize = '15px';
    op5.style.color = 'White';
    op5.style.fontSize = '15px';
}

function fecha(){
    
    let close = document.querySelector('caixa.a');

    op.style = '';
    op1.style = '';
    op2.style = '';
    op3.style = '';
    op4.style = '';
    op5.style = '';
    x.style = '';
}