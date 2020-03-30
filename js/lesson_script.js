'use strict';
//Исполнение

task_1();  //Первое задание

task_2();  //Второе задание

task_3();  //Третье задание

/**
 * Вывод последовательности чисел
 */
function task_1() {
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
    console.log("************************* Данные задания 2 *************************");
    console.log(post.author);
    console.log(post.comments[0].rating.dislikes);
    console.log(post.comments[1].userId);
    console.log(post.comments[1].text);
}

function task_3() {
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