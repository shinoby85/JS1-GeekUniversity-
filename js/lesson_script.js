'use strict';

//Первое задание
let newWindowBtn=document.getElementById('openWindow');
let newWindow=document.getElementById('win');
let exitWindow=document.getElementById('exWin');

newWindowBtn.addEventListener('click',function () {
    newWindow.classList.remove('fadeOut');
    newWindow.classList.remove('hide');
    newWindow.classList.add('animated','zoomIn');

});
exitWindow.addEventListener('click',function () {
    newWindow.classList.remove('zoomIn');
    newWindow.classList.add('fadeOut');
    setTimeout(function () {
        newWindow.classList.add('hide');
    },1000);
});