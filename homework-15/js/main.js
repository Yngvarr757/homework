import { localStorageUpload } from "./storage.js";
import { renderTodos, initTodoHandlers } from "./todo-dom.js";

const todos = localStorageUpload() || [];

document.addEventListener("DOMContentLoaded", () => {
  renderTodos(todos);
  initTodoHandlers(todos);
});
