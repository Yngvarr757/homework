"use strict";
const todosKeys = {
  id: "id",
  text: "text",
  is_compleated: "is_compleated",
};
const todos = [];

const createTodos = (todos, text, date) => {
  if (text != undefined && text.length > 1 && typeof text != "number") {
    const obj = {
      [todosKeys.id]: todos.length + 1,
      [todosKeys.text]: `${text}`,
      [todosKeys.is_compleated]: false,
    };
    todos.push(obj);
    console.log(todos);
    return obj;
  } else {
    return console.error("Название задачи введено не верно!");
  }
};
// const compleateTodoById = (todos, id) => {
//   return todo.find((someDo) => {
//     if (someDo.id == id && someDo.is_compleated == false) {
//       someDo.is_compleated = true;
//       return someDo;
//     } else if (someDo.id == id && someDo.is_compleated == true) {
//       someDo.is_compleated = false;
//       return someDo;
//     }
//   });

const compleateTodoById = (todos, id) => {
  const todo = todos.find((todoId) => todoId[todosKeys.id] == id);
  if (todo === undefined) {
    console.error(`ЗАДАЧА С id ${id} НЕ НАЙДЕНА`);
    return null;
  }
  todo[todosKeys.is_compleated] = !todo[todosKeys.is_compleated];
  return todo;
};
const deleteTodoById = (todos, id) => {
  const todo = todos.findIndex((todoId) => todoId[todosKeys.id] == id);
  if (todo === -1) {
    console.error(`ЗАДАЧА С id ${id} НЕ НАЙДЕНА`);
    return null;
  }
  todos.splice(todo, 1);
  console.log(todos);
};

console.log();
