'use strict';

let basket;
basket = {
    products: {},
    /**
     * Добавляет данные о новом продукте в общий список
     * @param shopPosition Передаваемые данные
     */
    addProduct: function (shopPosition) {
        if (this.length !== 0 && this.products[shopPosition.id] !== undefined) {
            this.products[shopPosition.id].count++;
            return;
        }
        this.products[shopPosition.id] = {
            name: shopPosition.name,
            count: shopPosition.count,
            price: shopPosition.price
        };
    },
    /**
     * Отрисовка шапки таблицы
     */
    paintTable: function () {
        let blockBasket = document.getElementById('basket');
        let addHeadTable = `
            <table id="tbBasket">
                <tr id="tbHead">
                    <th>ID товара</th>
                    <th>Наименование товара</th>
                    <th>Стоимость за шт.</th>
                    <th>Количество</th>
                    <th>Общая стоимость</th>
                     <th>Отмена</th>
                </tr>
            </table>
        `;
        blockBasket.insertAdjacentHTML("afterbegin", addHeadTable);
    },
    /**
     * Добавление новых данных в таблицу
     */
    getDataToTable: function () {
        for (let product in this.products) {
            let tbBasket = document.getElementById('tbBasket');
            let newPosition = `
                <tr id="product-${product}">
                    <td>${product}</td>
                    <td>${this.products[product].name}</td>
                    <td>${this.products[product].price}</td>
                    <td>${this.products[product].count}</td>
                    <td>${this.products[product].count * this.products[product].price}</td>
                    <td><a href="" class="del-position">X</a></td>
                </tr>
            `;
            if (this.products[product].count>0) {
                tbBasket.insertAdjacentHTML('beforeend', newPosition);
            }
        }
    },
    /**
     * Удаление информации о старой версии к
     */
    clearTable: function () {
        let tbBasket = document.getElementById('tbBasket');
        if (tbBasket != undefined) {
            tbBasket.parentNode.removeChild(tbBasket);
        }
    },
    /**
     * Удаление одной позиции из корзины
     * @param idProduct ID удаляемого объекта
     */
    clearPosition: function (idProduct) {
        if (this.products[idProduct].count > 1) {
            this.products[idProduct].count--;
        } else {
            delete this.products[idProduct];
        }
    },
    /**
     * Получение общей суммы
     */
    getAllSum: function () {
        let prisePosition = document.getElementById('allPrice');
        let allSum = 0;
        for (let product in this.products) {
            let positionSum = this.products[product].count * this.products[product].price;
            allSum += positionSum;
        }
        prisePosition.innerText = allSum;
    },
    /**
     * Назначение обработки события на кнопку удаления позиции из корзины
     */
    eventForClearPosition: function () {
        let clrButtons = document.getElementsByClassName('del-position');
        for (let i = 0; i < clrButtons.length; i++) {
            clrButtons[i].addEventListener('click', event => {
                let trProduct = event.target.parentNode.parentNode;
                let idDelProduct = trProduct.id.split('-')[1];
                this.clearPosition(idDelProduct);
                this.clearTable();
                this.paintTable();
                this.getDataToTable();
                this.getAllSum();
                this.eventForClearPosition();
                if ( event.cancelable ) { //  если событие может быть отменено и предотвращено
                    event.preventDefault();
                }
            });
        }
    },

    /**
     * Запускает весь механизм работы корзины
     */
    runCreateBasket: function (shopPosition) {
        this.addProduct(shopPosition);
        this.clearTable();
        this.paintTable();
        this.getDataToTable();
        this.getAllSum();
        this.eventForClearPosition();
    }


};
let shopPosition = {
    id: null,
    name: null,
    count: null,
    price: null,
    clearShopPosition: function () {
        shopPosition.id = null;
        shopPosition.name = null;
        shopPosition.count = null;
        shopPosition.price = null;
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
        basket.runCreateBasket(shopPosition);
        shopPosition.clearShopPosition();
        if ( e.cancelable ) { //  если событие может быть отменено и предотвращено
            e.preventDefault();
        }
    });
}



























