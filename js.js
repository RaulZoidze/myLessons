"use strict"

let  money = 22000, 
     income = "Фриланс", 
     addExpenses = "Квартира,машина,кот".toLowerCase(),
     deposit = true, 
     mission = 500000, 
     period = 6 ,
     budgetDay = money / 30;

console.log(typeof money );
console.log(typeof income);
console.log(typeof deposit);
console.log (income.length);
console.log("Период " + period + " месяцев");
console.log("Цель заработать " + mission + " долларов");
console.log(addExpenses.split(','));
console.log(budgetDay + " Дневной Бюджет");
console.log(budgetDay % 30 + " Остаток от деления");




