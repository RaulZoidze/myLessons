'use strict';
// узнаем бюджет и валидность
let money,
    start = function () {
    do {
      money = +prompt("Ваш месячный доход?", 10000);  
    }
    while (isNaN(money) || money == '' || money == null);
    };
start();
let costsFirst1,
    costsFirst3,    
    budgetMonth,
    budgetDay,
    expensesAmount,
    accumulatedMonth,
    getMonth;



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
    },

// возвращаем обязательные расходы + валидность
    getExpensesMonth: function () {
      let sum = 0;
      for (let  i = 0; i < 2; i++) {
        if (i === 0) {
          costsFirst1 = prompt("Какие обязательные ежемесячные расходы у вас есть?","Квартира");
    }
        if (i === 1) {
          costsFirst3 = prompt("Какие обязательные ежемесячные расходы у вас есть?","Самолет");
    }
      let count;
        do {
          count = prompt("Во сколько это обойдется?", 5000);
    }
        while (isNaN(count) || count == null || count == '');
        sum += +count;
    }
        return sum;
    },
//возвращаем накопления за месяц
    accumulatedMonth: function getAccumulatedMonth() {
      accumulatedMonth = money - appData.getExpensesMonth();
    },

    getTargetMonth:function () {
      getMonth = appData.mission / accumulatedMonth;
        if (+getMonth  <= 0 || getMonth != isFinite()) {
          return "цель не будет достигнута ";
        } else {
          return "цель будет достигнута за  :" + Math.floor(getMonth) + " месяца";
        }

    },
//возвращаем уровень дохода
    getStatusIncome: function(){

      if   (budgetDay >= 800){  
        return "Высокий уровень дохода"  ;     
      }
      else if (budgetDay >= 300 && budgetDay < 800 ) {
        return "Средний уровень дохода" ;
      }
      else if (budgetDay >= 0 && budgetDay < 300) {
        return "Низкий уровень дохода" ;
      }
      else  {
        return "Что то пошло не так";}
    },
  }

//Вызов метода
//appData.asking();
//appData.getExpensesMonth();
//appData.accumulatedMonth();
//appData.getTargetMonth();
//appData.getStatusIncome();

//возвращаем период до цели
    budgetMonth = money - appData.getExpensesMonth();
    budgetDay = budgetMonth / 30;

//лог
console.log("сумма обязательных расходов :" + appData.getExpensesMonth());
console.log("накопления за месяц :" + accumulatedMonth);
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());
console.log("месячный доход :", +money);
console.log("депозит в банке :" + appData.deposit);