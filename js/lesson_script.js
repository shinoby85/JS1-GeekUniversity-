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


/*


let shopPosition = {
    id: null,
    name: null,
    count: null,
    price: null
};
function clearShopPosition() {
    shopPosition.id = null;
    shopPosition.name = null;
    shopPosition.count = null;
    shopPosition.price = null;
}
let basket = {
    position: {},
    addProduct: function (shopPosition) {
        if (this.position[shopPosition.id] !== undefined) {
            this.count++;
        }
        else {
            this.position[shopPosition.id].id=shopPosition.id;
            this.position[shopPosition.id].name=shopPosition.name;
            this.position[shopPosition.id].count=shopPosition.count;
            this.position[shopPosition.id].price=shopPosition.price;
        }
        clearShopPosition();

    }
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
        basket.addProduct(shopPosition);
    });
}


function addProduct() {

}
*/



























