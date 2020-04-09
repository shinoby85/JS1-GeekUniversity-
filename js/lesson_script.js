'use strict';

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