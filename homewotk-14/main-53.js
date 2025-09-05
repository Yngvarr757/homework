// Задание 1.
// Дан массив пользователей:
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];
// Добавьте в конец массива двух пользователей:
users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true }
);
console.log(users);

// 2 способ
users[4] = { name: "Ann", age: 19, isAdmin: false };
users[5] = { name: "Jack", age: 43, isAdmin: true };
console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.
function getUserAverageAge(array) {
  let averageAge = 0;
  array.forEach((value) => {
    averageAge += value.age;
  });
  return averageAge / array.length;
}
console.log(getUserAverageAge(users));
// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.
function getAllAdmins(array) {
  let allAdmins = [];
  array.forEach((value) => {
    if (value.isAdmin === true) {
      allAdmins.push(value);
    }
  });
  return allAdmins;
}

console.log(getAllAdmins(users));
// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.
function first(arr, n) {
  if (n === 0) {
    return [];
  } else if (n === undefined) {
    return [arr[0]];
  } else if (arr.length >= n) {
    const firstArr = [];
    for (let i = 0; i < n; i++) {
      firstArr.push(arr[i]);
    }
    return firstArr;
  } else {
    return console.error("Данные указаны не верено");
  }
}
console.log(first(users, 4));
