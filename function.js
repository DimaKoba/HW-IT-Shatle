// Лизе нужно написать функцию sayHello(name), которая возвращает
// приветствие для пользователя. Тем не менее, она влюблена в пользователя
// с именем “Mark”, и хотела бы поприветствовать его немного иначе.
// Помогите ей)
// Пример вызовов:

// sayHello(“Oleg”); // Hello, Oleg!

// sayHello(“Viktor”); // Hello, Viktor!

// sayHello(“Mark”); // Hi, Mark!


// let sayHello = function (name) {
  
//   if (name == 'Mark') {
//     alert('Hi, ' + name + '!');
//   } else {
//     alert('Hello, ' + name + '!');
//   }
     
// };

// sayHello('David');


// Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
// Пример вызовов:
// min(2, 5)
// min(3, -1)
// min(1, 1)


// let min = (a, b) => a < b ? alert(a) : alert(b);
// min(10, 9);



// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе
// говоря, умножает x на себя n раз и возвращает результат.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...*1 = 1

// P.S. В этой задаче функция обязана поддерживать только натуральные
// значения n, т.е. целые от 1 и выше.

//let pow = (x, n) => alert(Math.pow(x, n));


// Напишите функцию isEven(n), которая принимает один параметр, число, и
// возвращает, четное ли оно.
// То есть функция может возвращать два значения: четное или нечетное.
// isEven(4); // true
// isEven(5); // false


//let isEven = n => n % 2 == 0 ? alert('четное') : alert('нечетное');




// Ваша цель - создать функцию deleteChars(str), которая удаляет первый и
// последний символы строки, которая передается в параметр, и возвращает
// новую строку без этих символов.
// deleteChars(“Hello”); // ell
// deleteChars(“A”); // пустая строка

// function deleteChars (str) {
  
//   alert(str.slice(1, str.length-1));
  
// }


// Американцы - странные люди: в их зданиях первый этаж - это нулевой этаж,
// и нет 13-го этажа (суеверия).
// Напишите функцию convertFloor(floor), которая получает американский этаж
// (передается как целое число), и возвращает реальный.
// Кроме того, ваша функция должна работать и на подвальных этажах.
// convertFloor(-1) // -1
// convertFloor(2) // 3
// convertFloor(2) // 3
// convertFloor(0) // 1
// convertFloor(12) // 13
// convertFloor(14) // 14

//let convertFloor = floor => floor <= 0 ? alert(floor) : alert(floor + 1);



// Перепишите функцию
// заменив if else на конструкцию switch (convertType1)
// через Function Expression (convertType2)
// с помощью стрелочного синтаксиса (convertType3)

// Написать функцию transformArray(arr, index1, index2, adding), принимающий
// в качестве аргументов:
// arr - массив строк, например [“fngp”, ”kgei”, ”fpos”, ”clfw”]
// index1 и index2 - числа - индексы в массиве (например 2, 3), элементы под которыми нужно
// поменять между собой местами (fpos и clfw нужно поменять местами)
// adding - строка, которую необходимо дописать в конец к каждому элементу массива
// и возвращающую массив с учетом указанных трансформаций.
// Например, transformArray([“fngp”, ”kgei”, ”fpos”, ”clfw”], 2, 3, “green”) должно
// вернуть [“fngpgreen”, ”kgeigreen”, ”clfwgreen”, ”fposgreen”]

let transformArray = function (arr, index1, index2, adding) {
  
    let addAdding = arr.map(function(item) {
      
      return item + adding;
      
    });
    
    
    
    
  }
  
  
  
  
  
  
  