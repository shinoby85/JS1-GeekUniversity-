'use strict';
//Исполнение

task_1();  //Первое задание

task_2();  //Второе задание

task_3();  //Третье задание

task_4();  //Четвертое задание

task_5();  //Пятое задание

task_6();  //Шестое задание

/**
 * Вывод последовательности чисел
 */
function task_1() {
    console.log("************************* Данные задания 1 *************************");
    for (let i = 0; i <=10 ; i++) {
        if (i==0){
            console.log(`${i} - это ноль`)
        }
        else if (i%2==0){
            console.log(`${i} - четное число`)
        }
        else {
            console.log(`${i} - нечетное число`)
        }
    }
}

/**
 * Вывод в консоль значеий из комментариев
 */
function task_2() {
    console.log("************************* Данные задания 2 *************************");
    const post = {
        author: "John", //вывести этот текст
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2 //вывести это число
                }
            },
            {
                userId: 5, //вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", //вывести этот текст
                rating: {
                    likes: 3,
                    dislikes: 1
                }
            },
        ]
    }
    console.log(post.author);
    console.log(post.comments[0].rating.dislikes);
    console.log(post.comments[1].userId);
    console.log(post.comments[1].text);
}

/**
 * Применение скидки 15%
 */
function task_3() {
    console.log("************************* Данные задания 3 *************************");
    const products = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];
    products.forEach(function (product) {
        product.price=product.price-(product.price*15/100);
        console.log(product.price);
    })
}

/**
 *  Обработка данных товаров
 */
function task_4() {
    console.log("************************* Данные задания 4 *************************");
    const products = [
        {
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg",
            ]
        },
        {
            id: 5,
            price: 499,
            photos: []
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg"
            ]
        },
        {
            id: 8,
            price: 78,
        },
    ];

    //Получение товаров у которых есть фото
    let productsWithPhotos=products.filter(product=>{
        if ("photos" in product) {
            return product.photos.length > 0;
        }
        return false;
    });
    console.log(productsWithPhotos);

    //Сортировка массива по значению стоимости
    products.sort((a,b)=>{
        if (a.price<b.price){
            return -1;
        }
        else if(a.price>b.price){
            return 1;
        }
        else
            return 0;

    });
    console.log(products);
}

/**
 * Вывод чисел от 0 до 9
 */
function task_5() {
    console.log("************************* Данные задания 5 *************************");
    for (let i = 0; i <=9; i++,console.log(i-1)) {
    }
}

/**
 * Формирование пирамиды
 */
function task_6(){
    console.log("************************* Данные задания 6 *************************");
    let line="*";
    for (let i = 0; i < 20; i++) {
        console.log(line);
        line+="*";
    }
}