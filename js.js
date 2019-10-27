'use strict';
// узнаем бюджет и валидность
let money,
    start = function () {
    do {
      money = +prompt("Ваш месячный доход?", 15000);  
    }
    while (isNaN(money) || money == '' || money == null);
    };
start();

let appData = {
    income:{},
    addIncome:[],
    expenses:{},
    addExpenses:[],
    deposit: false,
    mission: 100000,
    period:6,
    budget:money,
    budgetDay:0,
    budgetMonth:0,
    expensesMonth:0,
    asking: function(){
      let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую","Кот,Бензин,Продукты");
          appData.addExpenses = addExpenses.toLowerCase().split(',');
          appData.deposit = confirm("Есть ли у вас депозит в банке?");
// цикл,задает вопрос:ответ 2 раза
      let costsFirst1,
          costsFirst3, 
          count,
          str;
        for (let i = 0; i < 2; i++) {
         if (i === 0) {
      do {costsFirst1 = prompt("Какие обязательные ежемесячные расходы у вас есть?", " Квартира ");}
          while (Number(costsFirst1) || costsFirst1 === '' || costsFirst1 === null)
             str = costsFirst1;}
         if (i === 1) {
      do {costsFirst3 = prompt("Какие обязательные ежемесячные расходы у вас есть?", " Самолет ");}
          while (Number(costsFirst3) || costsFirst3 === '' || costsFirst3 === null)
             str = costsFirst3;}
      do {
        count = +prompt("Во сколько это обойдется?", 5000);
        }
          while (isNaN(count) || count == null || count == '');
        appData.expenses[str] = count;
        } 
       
      
      },
    getExpensesMonth:function () {
      for (var key in appData.expenses) { 
         return appData.expensesMonth += +appData.expenses[key];
        }
      },
//возвращаем накопления за месяц

    getBudget: function () {  
      appData.budgetMonth = money - appData.expensesMonth;
        //appData.budgetDay ;
        },

//сколько до цели

    getTargetMonth: function () { 
      let getMonth = appData.mission / appData.budgetMonth;//budgetMonth
       ////////////////////////////////////////
        if (+getMonth  <= 0 || getMonth != isFinite()) {
          return "цель не будет достигнута ";
        } else {
          return "цель будет достигнута за  :" + Math.floor(getMonth) + " месяца";
        }
    },

//возвращаем уровень дохода
   
    getStatusIncome: function(){ 
      appData.budgetDay = appData.budgetMonth / 30;
      if   (appData.budgetDay >= 800){  
        return "Высокий уровень дохода"  ;     
      }
      else if (appData.budgetDay >= 300 && appData.budgetDay < 800 ) {
        return "Средний уровень дохода" ;
      }
      else if (appData.budgetDay >= 0 && appData.budgetDay < 300) {
        return "Низкий уровень дохода" ;
      }
      else  {
        return "Что то пошло не так";}
    },
  }

//Вызов метода
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

//лог
console.log("сумма обязательных расходов :" + appData.getExpensesMonth());
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());

for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key + ': ');  // + appData[key])
}
