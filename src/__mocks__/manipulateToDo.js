import { localStorage } from "./storage";

const addToDo = (description) => {
  let tasks = localStorage.getFromStorage();
  // const description = document.querySelector('.input').value;
  

  const data = {
    description,
    index: tasks.length + 1,
    completed: false,
  };

  tasks.push(data);
  localStorage.storeLocally(tasks);

  return tasks;
};

export { addToDo };