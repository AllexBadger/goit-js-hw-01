const logItems = function (array) {
  let len = array.length;
  for (let i = 0; i < len; i += 1) {
    let count = i + 1;
    console.log(`${count} : ${array[i]}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
