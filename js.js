'use strict';

let start = document.getElementById('start'),
btnPlus = document.getElementsByTagName('button'),
incomePlus = btnPlus[0],
expensesPlus = btnPlus[1],
additIncomeItem = document.querySelectorAll('.additional_income_item'),
depBox = document.querySelector('#deposit_check'),
budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
additIncomValue = document.getElementsByClassName('additional_income-value')[0],
additExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
targetMonthValue = document.getElementsByClassName('target_month-value')[0],
targetAmount = document.querySelector('target-amount'),
salaryAmount = document.querySelector('.salary-amount'),
incomeTitle = document.querySelector('.income-title'),
incomeAmount = document.querySelector('.income-amount'),
expensesTitle = document.querySelector('.expenses-title'),
expensesItems = document.querySelectorAll('.expenses-items'),
additExpenses = document.querySelector('additional_expenses'),
periodSelect = document.querySelector('.period-select'),
additExpensesItem = document.querySelector('additional_expenses-item');

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
    percentDeposit: 0,
    moneyDeposit:0,
    mission: 100000,
    period:6,
    budget:money,
    budgetDay:0,
    budgetMonth:0,
    expensesMonth:0,
    asking: function(){

      if(confirm("Есть ли у вас дополнительный источник заработка?")) {
        let itemIncome,
            cashIncome;
    do {
        itemIncome = prompt("Какой у вас дополнительный заработок?", "Космонавт");
      }
        while (Number(itemIncome) || itemIncome === '' || itemIncome === null)
    do {
        cashIncome = prompt("Сколько вы на этом зарабатываете? ", "5000");
      }
        while (isNaN(cashIncome) || cashIncome == null || cashIncome == ''); 
        
        

        appData.income[itemIncome] = cashIncome;
      }

      let addExpenses = prompt ("Перечислите возможные расходы за рассчитываемый период через запятую","кот,бензин,продукты") ;
          appData.addExpenses = addExpenses.toLowerCase().split(",");
          appData.deposit = confirm("Есть ли у вас депозит в банке?");

// цикл,задает вопрос:ответ 2 раза
   
    for (let i = 0; i < 2; i++) {
      let question,
          cost;
    do {
        question = prompt("Какие обязательные ежемесячные расходы у вас есть?", " Самолет " + (i+1));
        }
        while (Number(question) || question === '' || question === null)
             
    do {
        cost = +prompt("Во сколько это обойдется?", 5000);
        }
          while (isNaN(cost) || cost == null || cost == ''); 
          appData.expenses[question] = cost;        
        }
   
      } ,
       
    getExpensesMonth:function () { 
      for(let key in appData.expenses) {
        appData.expensesMonth += appData.expenses[key];
      }
      return appData.expensesMonth;
      },
      
//возвращаем накопления за месяц
    getBudget: function () {  
      appData.budgetMonth = appData.budget - appData.expensesMonth;  
      appData.budgetDay = appData.budgetMonth / 30;
      },

//сколько до цели
    
    getTargetMonth: function () { 
      let getMonth = appData.mission / appData.budgetMonth ;
      if (getMonth <= 0 && isFinite(getMonth)) { 
        return "цель не будет достигнута ";
      } else {
        return "цель будет достигнута за  :" + Math.floor(getMonth) + " месяца";
      }
 
    },
 
      
//возвращаем уровень дохода
   
    getStatusIncome: function(){ 
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
    // По депозиту
    getInfoDeposit: function() {
      if(appData.deposit){
        do {
          appData.percentDeposit = +prompt("Какой годовой процент?","10")
        }
          while (isNaN(appData.percentDeposit) || appData.percentDeposit == null || appData.percentDeposit == ''); 

        do {
          appData.moneyDeposit = +prompt("Какая сумма заложена?" , "10000")
        }
          while (isNaN(appData.moneyDeposit) || appData.moneyDeposit == null || appData.moneyDeposit == ''); 
        
      }
    },
    // считаем за какой период накопим сумму учитывая наш бюджет
    calcSavedMoney: function () {
      return appData.budgetMonth * appData.period;
    }

  };
   
   


//Вызов метода
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit(); 
appData.calcSavedMoney();
//лог
console.log("сумма обязательных расходов :" + appData.expensesMonth);
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());

const  correсtName = appData.addExpenses.map(function(item){
  return item[0].toUpperCase() + item.slice(1).toLowerCase()
})
console.log(correсtName.join());
