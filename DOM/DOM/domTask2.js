//Задание 2 ИТ Шатл DOM
// Создать список элементов с помощью тега <ol> со значениями из массива
// строк: ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry",
// "Sergey", "Ivan", "Alan"]
// 
// Каждый четный элемент должен иметь css класс “even” и иметь зеленый
// фон, а нечетный - “odd” и иметь синий фон.
// 
// *Если это пользователь, у которого в имени встречаются минимум 2
// одинаковые буквы без учета регистра (например, Peter, Tatiana) - цвет текста
// должен стать белым.

let arr = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry",
    "Sergey", "Ivan", "Alan"];

let ol = document.createElement('ol');
document.body.prepend(ol);

let li;

arr.forEach((item, index) => {
    li = document.createElement('li');
    document.body.firstElementChild.prepend(li);
    li.innerHTML = item;
    if (index % 2 === 0) {
        li.classList = 'even';
        li.style.backgroundColor = 'green';

    } else {
        li.classList = 'odd';
        li.style.backgroundColor = 'purple';
    }
    
        for (let i = 0; i < item.length; ++i) {
            let indexLit = item[i];
            if (item.toLowerCase().split(indexLit).length > 2) {
                li.style.color = 'white';
                console.log(item);
    
            }
        }
    
    
    
});
















