'use strict';
//Исполнение
/*
task_1(); 

task_2();

let a=prompt("Введите значение первого числа");
let b=prompt("Введите значение второго числа");
console.log(`Результат операции равен: ${task_3(a,b)}`);

a=prompt("Введите значение первого числа");
b=prompt("Введите значение второго числа");
let c=prompt("Введите вид операции");
console.log(`Результат операции "${c}" равен: ${mathOperation(a,b,c)}`);*/

let inputSum=prompt('Введите требуемую сумму');
console.log(`Ваша сумма в ${inputSum} ${currency(inputSum)} успешно зачислена`);
/**
 * Выполнение задания 1
 */
function task_1(){
//Пример 1
let a = 1, b = 1, c, d;
c = ++a;  //префиксная форма записи. Переменная a увеличит свое значение, а результат будет записан в переменную c
console.log(c); // ответ: 2
//пример 2
d = b++;  //постфиксная форма записи. Значение переменной b будет записано в d, а затем значение b увеличится на 1
console.log(d); //ответ: 1
//пример 3
c = 2 + ++a; // аналогично примеру 1. Данные при проведении операции с=2+a, где a=3, после увеличения на 1, перед выполнением сложения
console.log(c); //ответ: 5
//пример 4
d = 2 + b++;  // аналогично примеру 2. Данные при операции d=2+2, где b=2, после этой строки кода b увеличится на 1
console.log(d); //ответ: 4
console.log(a); //3
console.log(b); //3
}
/**
 * Выполнение задания 2
 */
function task_2(){
    let a = 2;
    let x = 1 + (a *= 2); //Этап 1: a*=2 => a=a*2 => a=4    Этап 2: x=1+a=1+4=5, где a=4
    console.log(`Переменна a=${a}`);  //ответ 4
    console.log(`Переменна x=${x}`); //ответ 5

}
/**
 * Выполнение задания 3
 * @param {*} a Значение первого числа
 * @param {*} b Значение второго числа
 * @returns {string} Результат операции
 */
function task_3(a,b){
    let c;
    a=Number(a);
    b=Number(b);
    if(Math.sign(a)==Math.sign(b)){ //Выполняется когда два числа имеют одинаковый знак
        if(a>=0&&b>=0){  //Когда числа положительные
            c=a-b;
        }
        else{  //когда числа отрицательные
            c=a*b;
        }
    }
    else{  // когда у чисел разный знак
        c=a+b;
    }
    return c;
}
//Выполнение задания 4
/**
 * Операция сложения
 * @param {*} a Первый операнд
 * @param {*} b Второй операнд
 */
function sum(a,b){
    return Number(a)+Number(b);
}
/**
 * Операция вычитания
 * @param {*} a Первый операнд
 * @param {*} b Второй операнд
 */
function subtr(a,b){
    return a-b;
}
/**
 * Операция умножения
 * @param {*} a Первый операнд
 * @param {*} b Второй операнд
 */
function multi(a,b){
    return a*b;
}
/**
 * Операция деления
 * @param {*} a Первый операнд
 * @param {*} b Второй операнд
 */
function divis(a,b){
    return a/b;
}
/**
 * Задание 5: выполнение арифметических действий на операндами
 * @param {*} arg1 Первый аргумент операции
 * @param {*} arg2 Второй аргумент операции
 * @param {*} operation Вид операции
 * @returns Результат выбранной операции
 */
function mathOperation(arg1, arg2, operation){
    switch(operation){
        case '+':
            return sum(arg1,arg2);
        case '-':
            return subtr(arg1,arg2);
        case '*':
            return multi(arg1,arg2);
        case '/':
            return divis(arg1,arg2);
        default:
            return 'Выбрана не допустимая операция';
    }
}
/**
 * Решение 6-ой задачи
 * @param {*} coin Полученная сумма
 * @returns {string} Склонение валюты
 */
function currency(coin){
    if(coin=='')return 'Ошибка ввода данных';
    let ind;
    ind=String(coin%100);
    let mas=ind.split('');
    if(mas[0]!='1' && ind.length!=1){ //в случае если предпоследняя цифра числа равна 1 и не равна 0
        ind=mas[1];
    }     
    switch(ind){
        case '1':
            return 'рубль';
        case '2':
        case '3':
        case '4':
            return 'рубля';
        default:
            return 'рублей';
    }
}
