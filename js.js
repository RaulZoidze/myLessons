'use strict';

let start1 = document.getElementById('start'),//
btnPlus = document.getElementsByTagName('button'),
incomePlus = btnPlus[0],
expensesPlus = btnPlus[1],
additIncomeItem = document.querySelectorAll('.additional_income-item'),
depBox = document.querySelector('.deposit_checkmark'),
budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],//accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
additIncomValue = document.getElementsByClassName('additional_income-value')[0],
additExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
targetMonthValue = document.getElementsByClassName('target_month-value')[0],
targetAmount = document.querySelector('.target-amount'),
salaryAmount = document.querySelector('.salary-amount'),
incomeTitle = document.querySelector('.income-title'),
expensesTitle = document.querySelector('.expenses-title'),
additExpenses = document.querySelector('additional_expenses'),
expensesItems = document.querySelectorAll('.expenses-items') ,
periodSelect = document.querySelector('.period-select'),
additExpensesItem = document.querySelector('.additional_expenses-item'),
incomeItem = document.querySelectorAll('.income-items');



// узнаем бюджет и валидность


let appData = {
    income:{},
    addIncome:[],
    incomeMonth: 0,
    expenses:{},
    addExpenses:[],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit:0,
    budget:0,
    budgetDay:0,
    budgetMonth:0,
    expensesMonth:0,
    //запуск нашего проекта
    start: function (){  
        if ( salaryAmount.value === ''){
          alert('Ошибка, поле "Месячный Доход,должно быть заполнено!');
          return;
        }
        appData.budget = salaryAmount.value;        
    
        appData.getExpenses();

        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();

        appData.showResult();
    },
    //добавление поля для ввода
    addExpensesBlock : function() {
        let cloneExpenses = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpenses, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items') ;
          if(expensesItems.length === 3){
              expensesPlus.style.display = 'none';
          }
    },
    //вывод рассходов
    getExpenses : function() {
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = +item.querySelector('.expenses-amount').value;
            
            if(itemExpenses!== '' && cashExpenses !== '') {
              appData.expenses[itemExpenses] = cashExpenses;
            }
        });    
    },
//ДОП. заработок
    getIncome: function() {
          incomeItem.forEach(function(item) {
           let itemIncome = item.querySelector('.income-title');
           let cashIncome = +item.querySelector('.income-amount');

            if(itemIncome !=='' && cashIncome !== '') {
              appData.income[itemIncome] = +cashIncome;
            };
            
          })
          for(let key in appData.income){
                appData.incomeMonth += +appData.income[key]
              }; 
    },
//возможные расходы
    getAddExpenses: function () {
      let addExpenses = additExpensesItem.value.split(',');
      addExpenses.forEach(function(item){
        item = item.trim();
        if (item !== ''){
          appData.addExpenses.push(item); 
        }
      })
    },
//возможные доходы
    getAddIncome: function() {
      additIncomeItem.forEach(function(item) {
        let itemValue = item.value.trim();
        if (itemValue !== '') {
          appData.addIncome.push(itemValue)
        }
      })
    },
    // результат всех подсчетов
    showResult: function() {
      budgetMonthValue.value = appData.budgetMonth;
      budgetDayValue.value = appData.budgetDay;
      expensesMonthValue.value = appData.expensesMonth;
      additExpensesValue.value = appData.addExpenses.join(', ');
      additIncomValue.value = appData.addIncome.join(', ');
      targetMonthValue.value = Math.ceil(appData.getTargetMonth());
      incomePeriodValue.value = appData.calcSavedMoney();
      
    },
    
    /*asking: function(){

      

      let addExpenses = prompt ("Перечислите возможные расходы за рассчитываемый период через запятую","кот,бензин,продукты") ;
          appData.addExpenses = addExpenses.toLowerCase().split(",");
          appData.deposit = confirm("Есть ли у вас депозит в банке?");
    },*/

// цикл,задает вопрос:ответ 2 раза
       
    getExpensesMonth:function () { 
      for(let key in appData.expenses) {
        appData.expensesMonth += appData.expenses[key];
      }
      return appData.expensesMonth;
      },
      
//возвращаем накопления за месяц
    getBudget: function () {  
      appData.budgetMonth = (+appData.budget + +appData.incomeMonth) - appData.expensesMonth;  
      appData.budgetDay = appData.budgetMonth / 30;
      },

//сколько до цели
    
    getTargetMonth: function () { 
      return targetAmount.value / appData.budgetMonth ;
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
      return appData.budgetMonth * periodSelect.value;
    }

  };
  start1.addEventListener('click' , appData.start);
  expensesPlus.addEventListener('click' , appData.addExpensesBlock)
