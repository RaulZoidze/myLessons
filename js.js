'use strict'
//перемещение книг
let books = document.querySelectorAll('.books'),                /////
    book = document.querySelectorAll('.book');  
    console.log(book);
                /////

books[0].insertBefore(book[0], book[2]);                /////
books[0].insertBefore(book[4], book[2]);                /////
books[0].insertBefore(book[2], book[5]);                /////
books[0].insertBefore(book[5], book[2]);                /////
 
//Меняем фон
let back = document.querySelector('body');
back.setAttribute('style', 'background-image: url(./image/adv.jpg)');               /////

//книга 3
let elem3 = document.querySelectorAll('a');             /////
elem3[2].textContent = 'Книга 3. this и Прототипы Объектов'             /////
//реклама!              /////
let noAdv = document.querySelectorAll('body'),              /////
    chilAdv = document.querySelectorAll('div');             /////
noAdv[0].removeChild(chilAdv[6]);               /////
//восстановление порядка в главах и во всем мире в перспективе     
//книга 2
let ulBook2 = book[0].querySelector('ul'),              
    liBook2 = ulBook2.querySelectorAll('li');   

ulBook2.insertBefore(liBook2[2],liBook2[10]);
ulBook2.insertBefore(liBook2[6],liBook2[4]);
ulBook2.insertBefore(liBook2[8],liBook2[4]);
//книга 5
let ulBook5 = book[5].querySelector('ul'),
    liBook5 = ulBook5.querySelectorAll('li');

ulBook5.insertBefore(liBook5[9],liBook5[2]);
ulBook5.insertBefore(liBook5[3],liBook5[2]);
ulBook5.insertBefore(liBook5[4],liBook5[2]);
ulBook5.insertBefore(liBook5[5],liBook5[8]);
//книга 6
let ulBook6 = book[2].querySelector('ul'),
    liBook6 = ulBook6.querySelectorAll('li'),
    clone = liBook6[8].cloneNode();
//добавил Ли
liBook6[8].appendChild(clone).textContent= 'Глава 8: За пределами ES6';
console.log( liBook6);


    

    
