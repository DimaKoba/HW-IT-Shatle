
let ballMoove = document.querySelector('#ball');

let area = document.querySelector('#field');



area.addEventListener('click', (event) => {

ballMoove.style.position = 'absolute';
ballMoove.style.left = event.clientX + 'px';
ballMoove.style.top = event.clientY + 'px';

});




let div = document.body.firstElementChild.nextSibling('div');
div.append;


