'use strict'
//перемещение книг
let books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book');

books[0].insertBefore(book[0], book[2]);
books[0].insertBefore(book[4], book[2]);
books[0].insertBefore(book[2], book[5]);
books[0].insertBefore(book[5], book[2]);
 
//Меняем фон
let fon = document.querySelector('body');
fon.setAttribute('style', 'background-image: url(./image/adv.jpg)');

//книга 3
let elem3 = document.querySelectorAll('a');
elem3[2].textContent = 'Книга 3. this и Прототипы Объектов'
//реклама!
let noAdv = document.querySelectorAll('body'),
    chilAdv = document.querySelectorAll('div');
noAdv[0].removeChild(chilAdv[6]);
//восстановление порядка в главах и во всем мире в перспективе 
let chapter = document.querySelectorAll('ul'),
    level = document.querySelectorAll('li');
//книга 2
chapter[1].insertBefore(level[12],level[10]);
chapter[1].insertBefore(level[14],level[10]);
chapter[1].insertBefore(level[8],level[16]);
console.log(chapter,level);
//книга 5
chapter[4].insertBefore(level[45],level[38]);
chapter[4].insertBefore(level[39],level[38]);
chapter[4].insertBefore(level[40],level[38]);
chapter[4].insertBefore(level[41],level[44]);
//книга 6
//добавляем главу книге 6
let clone = level[56].cloneNode();
    chapter[5].appendChild(clone).textContent='Глава 8: За пределами ES6';
//....
   

    

    