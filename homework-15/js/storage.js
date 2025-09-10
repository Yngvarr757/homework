export const localStorageSet = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
export const localStorageUpload = (todos) => {
  return JSON.parse(localStorage.getItem("todos"));
};
