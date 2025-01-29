"use strict"
// main home work
console.log('#1. Приклад домашнього завдання з JavaScript')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
let myNum = 10;
console.log(myNum);

// ім'я змінної: myStr, значення: 'some string'
let myStr = 'some string';
console.log(myStr);

// ім'я змінної: myBool, значення: true
let myBool = true;
console.log(myBool);

// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
let myArr = [1, 2, 3, 4, 5];
console.log(myArr);

// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'
let myObj={
  first: 'First Name',
  last: 'Last Name',
};
console.log(myObj);
/*


 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

let decimal2 = myNum .toFixed(2);
console.log(decimal2);

// decimal2

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

let i = 10;
i = ++i; 
console.log(i);
// 11

i = --i;
console.log(i);
// 10

i = i++;
console.log(i);
// 10

i = --i;
console.log(i);
9

// i

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

// myTest
let myTest = 20;
// +=
myTest += 2;
console.log(myTest);

// –=
myTest -= 2;
console.log(myTest);

// *=
myTest *= 2;
console.log(myTest);

// /=
myTest /= 2;
console.log(myTest);

// %=
myTest %= 2;
console.log(myTest);

/*


 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
const myPi = Math.PI;
console.log(myPi);

// округлене значення числа 89.279 → myRound
const myRound = 89.279;
console.log(Math.round(myRound));

// випадкове число між 0..10 → myRandom
let myRandom = Math.random(0-10);
console.log(myRandom);

// 3 у 5 степені → myPow
let myPow = Math.pow(3, 5);
console.log(myPow);

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */
let strObj={
  str:"Мама мыла раму, рама мыла маму",
  length: 30,
};
console.log(strObj);
// Мама мыла раму, рама мыла маму
// strObj


/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */
let isRamaPos = strObj.str .indexOf('рама');
console.log(isRamaPos);

let isRama = strObj.str .indexOf('рама');
console.log(typeof isRama);

// isRamaPos
// isRama

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */
strObj.str = 'Мама моет раму, Рама держит маму';
let strReplace = strObj.str;
console.log(strReplace);
// strReplace

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

// var someStr = 'some STRING'
let someStr = 'some STRING';
console.log(someStr);

// var upperStr
let upperStr = someStr.toUpperCase();
console.log(upperStr);

// var lowerStr
let lowerStr = someStr.toLowerCase();
console.log(lowerStr);

  

// bonus home work
let onBox = "Tad Lasso";

console.log(onBox, typeof onBox);



let table = 1;

console.log(table, typeof table);


let mirror = true;

console.log(mirror, typeof mirror);



const lamp = {
  lampochka: true,
  provodLenghtMeter: 3,
  podstavka: 'circle',
  shtativ: 'metall',
};

console.log(lamp);



const furnitureRoom = [
  "sofa",
  "kreslo",
  "stul",
  "polka"
];

console.log(furnitureRoom);

