'use strict';

let productsBtn = document.getElementsByClassName('next-btn');
for (let i = 0; i < productsBtn.length; i++) {
    productsBtn[i].addEventListener('click', function () {
        let product = this.parentNode;
        let img = product.querySelector('.img-bird');
        let text = product.querySelector('.product-text');
        if (this.name === 'btn-on') {
            this.name = 'btn-off';
            this.innerText = 'Отмена';
            img.classList.add('hide');
            text.classList.remove('hide');
        } else {
            this.name = 'btn-on';
            this.innerText = 'Подробнее';
            img.classList.remove('hide');
            text.classList.add('hide');
        }
    });
}


let basket = [];
let shopPosition = {
    id: null,
    name: null,
    count: null,
    price: null
};
let products = document.getElementsByClassName('products')[0];
let buttonsBuy = products.getElementsByClassName('buy');
for (let i = 0; i < buttonsBuy.length; i++) {
    buttonsBuy[i].addEventListener('click', function (e) {
        let product = e.target.parentNode;
        shopPosition.id = product.id;
        shopPosition.name = product.querySelector('.productName').innerText;
        shopPosition.count = 1;
        shopPosition.price = Number(product.getElementsByClassName('price')[0].innerText);
        addProduct();

    });
}





function addProduct() {
    if (basket.length !== 0) {
        for (let i = 0; i < basket.length; i++) {
            if (basket[i].id===shopPosition.id){
                basket[i].count++;
                return;
            }
        }
    }
    basket
    clearShopPosition();

}

function clearShopPosition() {
 shopPosition.id=null;
 shopPosition.name=null;
 shopPosition.count= null;
 shopPosition.price=null;
}



























