let price;
let message;
message = prompt("В какую страну хотите сделать доставку?");

if (message === null) {
  message = alert("Отменено пользователем!");
}

switch (message) {
  case "Китай":
    price = 100;
    message = alert(`Доставка в ${message} будет стоить ${price} кредитов`);
    break;

  case "Чили":
    price = 250;
    message = alert(`Доставка в ${message} будет стоить ${price} кредитов`);
    break;

  case "Австралия":
    price = 170;
    message = alert(`Доставка в ${message} будет стоить ${price} кредитов`);
    break;

  case "Индия":
    price = 80;
    message = alert(`Доставка в ${message} будет стоить ${price} кредитов`);
    break;

  case "Индия":
    price = 120;
    message = alert(`Доставка в ${message} будет стоить ${price} кредитов`);
    break;

  default:
    alert((message = "В вашей стране доставка не доступна"));
}

/*Китай - 100 кредитов
Чили - 250 кредитов
Австралия - 170 кредитов
Индия - 80 кредитов
Ямайка - 120 кредитов
*/
