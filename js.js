'use strict'
let money,
  addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую","Кот,Бензин,Продукты"),
  costsFirst1,
  costsFirst3,
  income = "фриланс",
  deposit = confirm("Есть ли у вас депозит в банке?"),
  mission = 100000,
  period = 6,
  budgetMonth,
  budgetDay,
  expensesAmount;

// узнаем бюджет и валидность
let start = function () {
  do {
    money = +prompt("Ваш месячный доход?", 50000);
  }
  while (isNaN(money) || money == '' || money == null);
};
start();

// возвращаем обязательные расходы + валидность
let getExpensesMonth = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
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
    };
expensesAmount = getExpensesMonth();



//возвращаем накопления за месяц
let accumulatedMonth;
function getAccumulatedMonth() {
  accumulatedMonth = money - expensesAmount;
}
getAccumulatedMonth();

//возвращаем период до цели
budgetMonth = money - expensesAmount;
budgetDay = budgetMonth / 30;

let getMonth;
function getTargetMonth() {
  getMonth = mission / accumulatedMonth;
  if (getMonth < 0) {
    return "цель не будет достигнута ";
  } else {
    return "цель будет достигнута за  :" + Math.floor(getMonth) + " месяца";
  }
}
getTargetMonth();

//возвращаем уровень дохода
let getStatusIncome = function () {
  if (budgetDay >= 800) {
    return ("Высокий уровень дохода");
  } else if (budgetDay <= 300 && budgetDay >= 800) {
    return ("Средний уровень дохода");
  } else {
    return ("Что то пошло не так");
  }
};

//возвращаем тип данных
let showTypeOf = function (data) {
  console.log(data, typeof (data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

//лог
console.log("сумма обязательных расходов :" + expensesAmount);
console.log("накопления за месяц :" + accumulatedMonth);
console.log(getTargetMonth());
console.log(getStatusIncome());
console.log("месячный доход :", +money);
console.log(addExpenses.split(','));
console.log("депозит в банке :" + deposit);