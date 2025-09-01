// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара,
// процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.
function calculateFinalPrice(price, discount, tax) {
  price = price - price * (discount / 100);
  price += price * tax;
  return price;
}
console.log(calculateFinalPrice(100, 10, 0.2));
// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль.
// Если имя пользователя равно "admin" и пароль равен "123456",
// функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".
function checkAccess(userName, password) {
  return userName == "admin" && password == "123"
    ? "Доступ разрешен" // ПОЧЕМУ ПРЕТЕР ПЕРЕНОСИТ ТЕРНАРНЫЙ ОПЕРАТОР???
    : "Доступ запрещен";
}
console.log(checkAccess("admin", "123"));
// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.
const userTime = +prompt("Введите время");
(function getTimeOfDay(time) {
  switch (true) {
    case time >= 0 && time <= 5:
      return alert("Ночь");
      break;
    case time >= 6 && time <= 11:
      return alert("Утро");
      break;
    case time >= 12 && time <= 17:
      return alert("День");
      break;
    case time >= 18 && time <= 23:
      return alert("Вечер");
      break;
    default:
      return alert("Некорректное время");
      break;
  }
})(userTime);

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".
function findFirstEven(start, end) {
  while (start <= end) {
    if (start % 2 === 0) {
      return start;
    }
    start++;
  }
  return "Четных чисел нет";
}
console.log(findFirstEven(1, 10));
// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"
