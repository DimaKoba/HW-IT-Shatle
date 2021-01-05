let p = document.createElement('p');
p.classList = 'text';
p.innerHTML = 'Это всего лишь текст.';
document.body.prepend(p);

let div = document.createElement('div');
div.classList = 'alert';
div.innerHTML = 'А это сообщение  об ошибке!';
document.body.append(div);
let givStyle = document.querySelector('.alert');
givStyle.style.backgroundColor = 'red';
givStyle.style.color = 'white';
givStyle.style.padding = 20 + 'px';

