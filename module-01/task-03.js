const ADMIN_PASSWORD = "jqueryismyjam";
let message;

message = prompt("Введите пароль:");

if (message === "jqueryismyjam") {
  console.log((message = "Добро пожаловать!"));
} else if (message === null) {
  console.log((message = "Отменено пользователем!"));
} else if (message !== "jqueryismyjam") {
  console.log((message = "Доступ запрещен, неверный пароль!"));
}

alert(message);

/*const input = prompt('Are you longest order?');
console.log(input);*/
