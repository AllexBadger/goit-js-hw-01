let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let message;

message = prompt("Сколько дройдов хотите купить?");

if (message === null) {
  console.log((message = "Отменено пользователем!"));
} else if ((totalPrice = message * pricePerDroid)) {
}

if (totalPrice >= credits) {
  console.log((message = "Недостаточно средств на счету!"));
} else if ((credits = credits - totalPrice)) {
  console.log(
    `Вы купили ${message} дроидов, на счету осталось ${credits} кредитов.`
  );
  console.log("Спасибо за покупку!");
}

