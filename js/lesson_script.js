'use strict';

//Первое задание
let newWindowBtn = document.getElementById('openWindow');
let newWindow = document.getElementById('win');
let exitWindow = document.getElementById('exWin');

newWindowBtn.addEventListener('click', function () {
    newWindow.classList.remove('fadeOut');
    newWindow.classList.remove('hide');
    newWindow.classList.add('animated', 'zoomIn');

});
exitWindow.addEventListener('click', function () {
    newWindow.classList.remove('zoomIn');
    newWindow.classList.add('fadeOut');
    setTimeout(function () {
        newWindow.classList.add('hide');
    }, 1000);
});

//Второе задание
let productsBtn = document.getElementsByClassName('next-btn');
for (let i = 0; i < productsBtn.length; i++) {
    productsBtn[i].addEventListener('click', function () {
        let product = this.parentNode;
        let img=product.querySelector('.img-bird');
        let text=product.querySelector('.product-text');
        if(this.name==='btn-on'){
            this.name='btn-off';
            this.innerText='Отмена';
            img.classList.add('hide');
            text.classList.remove('hide');
        }
        else {
            this.name='btn-on';
            this.innerText='Подробнее';
            img.classList.remove('hide');
            text.classList.add('hide');
        }
    });
}

//Третье задание
let btnBoard=document.getElementsByClassName('board-btn')[0];
let massLetters=['A','B','C','D','E','F','G','H'];

/**
 * Функция формирует шахматную доску
 */
let createBoard=function () {
    this.style.display='none';
    let parentBlock=this.parentNode;
    let board=document.createElement('div');
    board.classList.add('full-board');
    parentBlock.appendChild(board);
    createLetters(board);
    createNumbers(board);
    let field=document.createElement('div');
    field.classList.add('field');
    board.appendChild(field);
    createCell(field);

};

/**
 * Размещает на доске буквы
 * @param board родительский элемент
 */
function createLetters(board){
    for(let i=1;i<9;i++){
        let numBlock=document.createElement('div');
        numBlock.innerText=massLetters[i-1];
        numBlock.classList.add(`num-0${i}`);
        board.appendChild(numBlock);
    }

}

/**
 * Размещает на шахматной доске цифры
 * @param board родительский элемент
 */
function createNumbers(board){
    for(let i=1;i<9;i++){
        let numBlock=document.createElement('div');
        numBlock.innerText=i;
        numBlock.classList.add(`num-${i}0`);
        board.appendChild(numBlock);
    }
}

/**
 * Добавление клеток на поле
 * @param field родительский класс
 */
function createCell(field){
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            let cell=document.createElement('div');
            cell.id=`cell-${i}${j}`;
            if ((i%2===0 && j%2!==0)||(i%2!==0 && j%2===0)){
                cell.classList.add('cellBlack');
            }
            field.appendChild(cell);
        }
    }
}


btnBoard.addEventListener('click',createBoard);



































