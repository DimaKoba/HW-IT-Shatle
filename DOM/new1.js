Dima, [24.12.20 21:51]
const form = document.querySelector('form');

let selector = document.querySelector('#createFigureForm > select');

selector.addEventListener('change', changeSelect);
function changeSelect (event) {
    let figure = event.target.value;
    if(figure === 'прямоугольник') {
        let input = document.createElement('input');
        let button = document.querySelector('button');
        input.name = 'sizey';
        form.insertBefore(input, button);
    } else {
        let input = document.querySelector('#createFigureForm input[name="sizeY"]');
        input && input.remove();
    }    
}

form.addEventListener('submit', submitForm);
function submitForm(e){
    e.preventDefault();
    const shape = form.shape.value;
    const color = form.color.value;
    const sizex = form.sizex.value;
    const sizey = shape === 'прямоугольник' ? form.sizey.value : null;

    createFigure(shape, color, sizex, sizey);
}

function createFigure (shape, color, sizex, sizey) {

    const div = document.createElement('div');
    div.style.height = sizex + 'px';
    div.style.width = (sizey || sizex) + 'px';
    div.style.backgroundColor = color;

    if (shape === 'круг') {
        div.style.borderRadius = '50%';
    } 
    document.body.appendChild(div);
}