//----------------------------------МАССИВЫ ЗАДАНИЯ ИЗ ИТ ШАТЛ + задания js.ru------------------------------------------------

// Задание 1a
// Создайте массив, длиной в 6 элементов, каждый из которого больше предыдущего на 5, после этого найдите
// среднее значение из этих чисел. + (округление результата до ближайшего целого);

let arr = [];
for (let i = 0, j = 5; i < 6; ++i, j += 5) {
    arr[i] = j;
}
let value = arr.reduce(function (sum, curNum) {
    sum = sum + curNum;
    return Math.round(sum / arr.length);

});

//   ЗАдание 2a
//   Есть массив с неизвестным кол-вом элементов. Как вывести последний элемент?
let arr = [];
let lastElement = arr[arr.length - 1];
console.log(lastElement);

// Задание 3a
// У нас снова массив с неизвестным кол-вом элементов.
// Напишите код, в котором предпоследнему элементу задается значение “предпоследний элемент”.

let arr = [];
arr.splice(-2, 1, 'предпоследний элемент');
console.log(arr);

// Задание 1b
// Существует массив из какого-то количества элементов строковых данных. Необходимо создать новый
// массив из длин каждого из элементов исходного массива.

let fruits = ["Яблоко", "Апельсин", "Груша"];
let countLettersFruits = fruits.map(item => item.length);
console.log(countLettersFruits);

//Задание 2b
// Существует цикл for, который перебирает массив со строковыми и числовыми данными[“Anna”, 12,
// “Sam”, 9, “Kate”, 10, “Ron”, 9] и выводит сначала строки, а затем числа:
for (let i = 0; i < arr.length; ++i) {
    if (typeof arr[i] === 'string') {
        console.log(arr[i] + ' - string value');
    } else {
        console.log(arr[i] + ' - number value');
    }
}
//Необходимо переписать данный цикл с помощью forEach() метода
arr.forEach(function (item) {

    if (typeof item === 'string') {
        console.log(item + ' - string value')
    } else {
        console.log(item + ' - number value')
    }

});


// Задание 3b
// Существует массив [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21] . Необходимо создать новый массив из
// значений данного, которые больше 10.

let arr = [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21];
let newArr = arr.map(item => item + 10);
console.log(newArr);


// Задание 4b
// Напишите код, который:
// Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
// Заканчивает ввод, как только посетитель введёт 15.
// При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
// Выводит сумму всех значений массива

function getSum(x) {
    let arr = [];
    let sum = 0;
    while (true) {
        let num = +prompt('enter number, ', x);
        arr.push(num);
        if (num === 15) break;
    }
    let sumNumber = arr.reduce((sum, curN) => sum + curN);
    return sumNumber;
}
getSum();


//Задачи на массивы из javascript.ru 
//#1
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
    let strAddInArr = str.split('-');
    let k = strAddInArr.map(function (item) {
        if (item.length > 0) {

            let firstL = item[0].toUpperCase();
            let lastWord = item.slice(1);
            let cancatination = firstL + lastWord;
            return cancatination;
        }
    });
    let result = k.join('');
    return result;
}
camelize('list-style-image');











