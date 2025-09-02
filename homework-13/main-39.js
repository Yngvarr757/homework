// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.
const person = {
  name: "Igor",
  age: 18,
  drinkBeer: (taste) => {
    return console.log(`Выпил ${taste}`);
  },
};
console.log(person.name, person.age);
person.drinkBeer("Cомовское нефильтрованное :)");
// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым.
//  Если объект пуст - верните true, в противном случае false.
const a = {};
function isEmpty(object) {
  let iterCount = 0;
  for (let i in object) {
    object[i] ? iterCount++ : false;
  }
  if (iterCount <= 0) {
    return console.log("Объект пустой");
  } else {
    return console.log(`в объектке ${iterCount} элементов`);
  }
}
isEmpty(a);
// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications),
// которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.
const task = {
  title: "pvlcxpv",
  description: "dsnfdfxzrgsdth",
  isComplited: false,
};
const task2 = {
  title: "FDSF",
  description: "vbhdtuyftc",
  isComplited: false,
  a: 25,
  b: "324",
};

function cloneAndModify(object, modifications) {
  const clone = { ...object, ...modifications };
  return clone;
}
const clone = cloneAndModify(task2, task);
for (let i in clone) {
  console.log(clone[i]);
}
// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

function callAllMethods(object) {
  for (let i in object) {
    if (typeof object[i] == "function") {
      object[i]();
    }
  }
}
callAllMethods(myObject);
