// Напишите функцию showMessage, которая будет вставлять на страницу div с классом “message” на
// странице с указанными аргументами: текст сообщения, цвет фона сообщения, положение от
// верхнего края страницы (css свойство top) и положение от левого края страницы (css свойство left)

// Пример вызова функции: showMessage(“Всем привет”, ‘yellow’, 100, 50);

// Примечание: Задать для .message позиционирование fixed, для корректного расчета положения сообщения

// * Количество сообщений на странице не может быть больше 3-х. Если на странице 3 сообщения и
// мы вызываем showMessage(), то 1 сообщение необходимо удалить, а 2,3 и 4 должны остаться.

// ** Необходимо проверить, есть ли у нас уже на странице сообщение в таких же координатах (такие
// же и top, и left). Если есть - занять позицию +25px left и right. Если и в этот раз у нас имеется
// сообщение в данной позиции - повторять процедуру, пока не найдем свободное место.



function showMessage(text, backColor, stepTop, stepLeft) {
    let div = document.createElement('div');
    div.classList = 'message';
    div.innerHTML = text;
    document.body.append(div);
    div.style.backgroundColor = backColor;
    div.style.display = 'inline-block';
    div.style.position = 'fixed';
    div.style.top = stepTop + 'px';
    div.style.left = stepLeft + 'px';
    let countDiv = document.querySelectorAll('div').length;
    let zeroDiv = document.querySelector('div');
    if (countDiv > 3) {
        zeroDiv.remove();
        console.log(top);
    }

    let coord = div.getBoundingClientRect();
    for (let i = 0; i < countDiv; ++i) {
        if (coord == document.querySelectorAll('div')[i].getBoundingClientRect()) {
            document.querySelectorAll('div')[i].offsetTop += 25;
           
        }

    }
}

showMessage('Hello', 'green', 150, 190);
showMessage('God Bay', 'yellow', 150, 190);
showMessage('Good night', 'red', 150, 190);
//showMessage('Looking for love', 'purple', 210, 220);
//showMessage('Hey Baddy', 'blue', 230, 230);