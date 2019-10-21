"use strict";

let  money = prompt (" Ваш месячный доход? " , 22000) , 
     income = "Фриланс", 
     addExpenses = prompt (" Перечислите возможные расходы за рассчитываемый период через запятую "),      
     deposit = confirm("Есть ли у вас депозит в банке?"), 
     costsFirst1= prompt ("Какие обязательные ежемесячные расходы у вас есть?") ,
     costsFirst2= prompt ("Во сколько это обойдется?") ,
     costsFirst3= prompt ("Какие обязательные ежемесячные расходы у вас есть?") ,
     costsFirst4= prompt ("Во сколько это обойдется?") ,
     mission = 1000000, 
     period = 6 ,
     budgetMonth = money - costsFirst2 - costsFirst4,
     budgetDay = budgetMonth / 30,
     output;

console.log(typeof money );
console.log(typeof income);
console.log(typeof deposit);
console.log (income.length);
console.log("Период " + period + " месяцев");
console.log("Цель заработать " + mission + " долларов");
console.log(addExpenses.split(','));
console.log(budgetDay % 30 + " Остаток от деления");
console.log(budgetMonth + ' Месячный Бюджет');
console.log(Math.ceil((mission / budgetMonth)) + " месяцев до цели ");  
console.log(budgetDay + " Дневной Бюджет");        

if   (budgetDay >= 800){  
        output = "Высокий уровень дохода"  ;     
    }
else if (budgetDay >= 300 && budgetDay < 800 ) {
        output = "Средний уровень дохода" ;
    }
else if (budgetDay >= 0 && budgetDay < 300) {
        output = "Низкий уровень дохода" ;
    }
else  {
        output = "Что то пошло не так";
    }
         console.log(output);
