'use strict';


console.log('---------------------- Задание 1 ---------------------');
let number = {
    hundreds: 0,
    dozens: 0,
    units: 0,
    index: 0,
    modifNumber: function (num) {
        let mas = String(num).split('');
        this.index = mas.length;
        switch (this.index) {
            case 3: {
                this.hundreds = mas[0];
                this.dozens = mas[1];
                this.units = mas[2];
            }
                break;
            case 2: {
                this.dozens = mas[0];
                this.units = mas[1];
            }
                break;
            case 1:
                this.units = mas[0];
                break;
        }
    },
    writeNumber: function () {
        console.log('В полученном числе:');
        switch (this.index) {
            case 3:
                console.log('Сотен: ', this.hundreds);
            case 2:
                console.log('Десятков: ', this.dozens);
            case 1:
                console.log('Единиц: ', this.units);
        }
    },
    delData: function () {
        delete this.units;
        delete this.dozens;
        delete this.hundreds;
        delete this.index;
    }
};

function myNumber(num, obj) {
    if (!isNaN(num) || isFinite(num))
        if (num < 0) {
            console.log('Введенное значение меньше 0. Введити число в промежутке [0..999].');
            return 1;
        } else if (num > 999) {
            console.log('Введенное число больше 999. Свойства объекта уничтожены.');
            obj.delData();
            return 2;
        } else {
            obj.modifNumber(num);
            return 0;
        }
    else {
        console.log('Введенное значение не является числовым, повторите ввод.');
        return 1;
    }
}
let flag;
do {
    flag = myNumber(parseInt(prompt('Введите число в промежутке [0..999].')), number);
}
while (flag == 1);
if (flag != 2) number.writeNumber();
else console.log(number);
