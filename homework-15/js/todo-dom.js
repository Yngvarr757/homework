import { todoKeys } from "./constants.js";
import {
  createTodo,
  deleteTodoById,
  completeTodoById,
} from "./todo-service.js";
import { localStorageSet } from "./storage.js";

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todosList = document.querySelector(".todos");

const createTodoElement = (todo) => {
  const todoElement = document.createElement("li");
  todoElement.dataset.id = todo[todoKeys.id];
  todoElement.classList.add("todo");
  todoElement.innerHTML = `
              <div class="todo-text">${todo[todoKeys.text]}</div>
          <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
    `;
  todosList.prepend(todoElement);
  return todoElement;
};

export const renderTodos = (todos) => {
  todosList.innerHTML = "";
  todos.forEach((todo) => {
    const todoElement = createTodoElement(todo);
    if (todo[todoKeys.is_completed]) {
      todoElement.classList.add("completed");
    }
    todosList.prepend(todoElement);
  });
};

const handleCreateTodo = (todos, text) => {
  const newToDo = createTodo(todos, text);
  createTodoElement(newToDo);
  localStorageSet(todos);
};

export const initTodoHandlers = (todos) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    // НЕ ОБЯЗАТЕЛЬНО ПИСАТЬ text == "", можно !text потому что пустая строка вернет false
    if (!text) {
      input.value = "";
      return;
    }
    handleCreateTodo(todos, text);
    input.value = "";
  });

  todosList.addEventListener("click", (e) => {
    const todo = e.target.closest(".todo");
    if (!todo) return;
    if (e.target.matches(".button-complete")) {
      completeTodoById(todos, Number(todo.dataset.id));
      localStorageSet(todos);
      todo.classList.toggle("completed");
    }
    if (e.target.matches(".button-delete")) {
      deleteTodoById(todos, Number(todo.dataset.id));
      localStorageSet(todos);
      todo.remove();
    }
  });
};
