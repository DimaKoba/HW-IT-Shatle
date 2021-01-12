// Задание 2
// 
// Создать 2 кнопки со значениями удалить и добавить. При нажатии кнопки добавить
// на страницу добавляется элемент с каким-либо текстом. Добавлять можно сколько
// угодно раз. При нажатии кнопки удалить - удаляется последний добавленный
// элемент.
// 

let button1 = document.createElement('input');
button1.type = 'button';
button1.classList = 'button';
document.body.prepend(button1);
button1.style.width = '150px';
button1.style.height = '30px';
button1.value = 'добавить строку';
button1.style.margin = '0px 0px 0px 5px';

let button2 = document.createElement('input');
button2.type = 'button';
button2.classList = 'button';
document.body.prepend(button2);
button2.style.width = '150px';
button2.style.height = '30px';
button2.value = 'удалить строку';

button1.addEventListener('click', addWord);

let div;
function addWord() {
    div = document.createElement('div');
    div.innerHTML = 'слово';
    document.body.append(div);
    
}

button2.addEventListener('click', deleteWord);

function deleteWord() {
    div.remove();
}
































