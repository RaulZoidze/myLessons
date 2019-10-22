"use strict";

 
 let  money;
  while (isNaN(money) || money === '' || money === null){
    money = +prompt("Ваш месячный доход?", 23000);
     };

let  income = "Фриланс", 
     addExpenses = prompt (" Перечислите возможные расходы за рассчитываемый период через запятую "),      
     deposit = confirm("Есть ли у вас депозит в банке?"), 
     costsFirst1= prompt ("Какие обязательные ежемесячные расходы у вас есть?") ;
let  costsFirst2; 
while (isNaN(costsFirst2) || costsFirst2 === '' || costsFirst2 === null){
    costsFirst2 = prompt("Во сколько это обойдется?", 1000);
     };
let  costsFirst3= prompt ("Какие обязательные ежемесячные расходы у вас есть?") ,
     costsFirst4;
while (isNaN(costsFirst4) || costsFirst4 === '' || costsFirst4 === null){
    costsFirst4 = prompt("Во сколько это обойдется?", 1000);
     };
let  mission = 50000, 
     period = 6 ,
     budgetMonth = money - costsFirst2 - costsFirst4,
     budgetDay = budgetMonth / 30,
     output,
     sum,
     accumulatedMonth,
     getMonth;
     
let showTypeOf = function(data) {
    console.log(data,typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
     
//Сумма обязательных расходов
 function getExpensesMonth() {
      sum = costsFirst2 + costsFirst4; 
      return ; 
  };
getExpensesMonth();

//Расходы - доходы
function getAccumulatedMonth () {
       accumulatedMonth = money-sum;    
       return ; 
  };
getAccumulatedMonth();
       

//возвращаем период до цели
function getTargetMonth () {
       getMonth = mission / accumulatedMonth;
       return ; 
}
getTargetMonth();



//логи
console.log("накопления за месяц :" + accumulatedMonth);
console.log(Math.ceil((mission / budgetMonth)) + " месяцев до цели ");  







//console.log("Период " + period + " месяцев");
//console.log("Цель заработать " + mission + " долларов");
//console.log(addExpenses.toLowerCase().split(','));
//console.log(budgetDay % 30 + " Остаток от деления");
//console.log(budgetMonth + ' Месячный Бюджет');

//console.log("Дневной Бюджет " + Math.floor(budgetDay));


//Считаем уровень дохода
let getStatusIncome = function() {
  if   (budgetDay >= 800){  
        return "Высокий уровень дохода"  ;     
    }else if (budgetDay >= 300 && budgetDay < 800){ 
        return "Средний уровень дохода" ;
    }else if (budgetDay >= 0 && budgetDay < 300) {
        return "Низкий уровень дохода" ;
    }else  {
        return "Что то пошло не так";} 
};

console.log(getStatusIncome());




