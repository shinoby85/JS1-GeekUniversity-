'use strict';
//Для задания 1
function findTemp(){
    let tC=document.getElementById('temp');
    if (!checkTemp(tC.value)) {
        tC.value="";
        tC.placeholder='Ошибка. Повторите ввод';
        return null;
    }
    let tF=(9/5)*Number(tC.value)+32;
    let tempResult=document.getElementById('temp-result');    
    if(confirm('Данные вывести в alert?')){
        alert(`Температура ${Number(tC.value)} по Цельсию соответствует температуре ${tF} по Фаренгейту`);
    }
    else{
        tempResult.value=tF;
        tempResult.style.backgroundColor='lightgreen';
    }
    return false;
}

function checkTemp(temp){
    if (Number(temp)==isNaN||temp.trim()=='')return false;
    return true;
}
function resetTemp(){
    let rst=confirm('Очистить форму?');
    if (rst) {
        let tempResult=document.getElementById('temp-result');
        tempResult.style.backgroundColor='white';        
    }
    return rst;
}

//Для задания 2
function changeData(){
    let name= document.getElementById('name').value;
    let admin=document.getElementById('admin');
    admin.value=name;
    console.log(admin.value);
    return false;
}

//Для задания 3
function task3(){
    /*Операции выполняются с лева на право.
    1. 10+10=20 затем эти данные буду преобразованы в строку, т.к. следующее значение - строка
    2. 20+'10'='2010' конкатенация строк
     */
    let result=10 + 10 + "10";
    console.log("1. " + result);

    /* 1. 10+'10'='1010' т.к. второе значение является строкой, то число будет преобразовано в строчный тип
       2. '1010'+10='101010'  т.к. третье значение является строкой, то число будет преобразовано в строчный тип
     */
    result=10 + "10" + 10;
    console.log("2. " + result);

    /* 1. 10+10=20 строковых типов нет и операция производится с числами
       2. 20 + + '10' второй плюс указывает, что строковое значение должно быть приведено к числовому типу 
     */
    result=10 + 10 + +"10";
    console.log("3. " + result);

     /*Операции выполняются с лева на право.
    1. 10+10=20 затем эти данные буду преобразованы в строку, т.к. следующее значение - строка
    2. 20+'10'='2010' конкатенация строк
     */
    result=10 + 10 + "10";
    console.log("1. " + result);

    /* 1. 10+'10'='1010' т.к. второе значение является строкой, то число будет преобразовано в строчный тип
       2. '1010'+10='101010'  т.к. третье значение является строкой, то число будет преобразовано в строчный тип
     */
    result=10 + "10" + 10;
    console.log("2. " + result);

    /* 1. -""=-0 при попытке деления пустое строковое значение будет приравнено к нулю, а минус придаст ему знак
       2. 10/-0=-infinity деление на ноль дает бесконечность (infinity), а поскольку ноль отрицательный, то результат будет -infinity
     */
    result=10 / -"";
    console.log("4. " + result);

     /* 1. +"2,5" плюс перед строкой не позволит сделать приведение типов к числу, поскольку разделителем является не точка, а запятая
        и результатом операции будет NaN
        2. 10/NaN  результатом деления любого числа не на число всегда будет NaN
     */
    result=10 / +"2,5";
    console.log("5. " + result);
    
}