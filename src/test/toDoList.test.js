
import {
  addToDo,
  removeOne,
  drag,
} from '../manipulateToDo';
import editToDo from '../index';
import toggleCompleted from '../completedToDo';
import localStorage from '../__mocks__/storage';

jest.mock('../manipulateToDo');
jest.mock('../index');
jest.mock('../completedToDo');

let description;

document.body.innerHTML = `
  <div>
    <input type="text" class="input" />
    <ul class="list-container"></ul>
    <button class="add-todo"></button>
    <button class="remove-todo"></button>
  </div>
`;

const populateUl = (data) => {
  document.querySelector('.list-container').innerHTML = '';
  data.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item.description;
    li.id = item.index;
    document.querySelector('.list-container').appendChild(li);
  });
};

describe('Add Items to the List', () => {
  test('Adding one item reflects in the storage', () => {
    description = 'Do the dishes';
    addToDo(description);

    const ulChildren1 = Array.from(document.querySelectorAll('.list-container > li')).length;
    populateUl(localStorage.getFromStorage());
    const ulChildren2 = Array.from(document.querySelectorAll('.list-container > li')).length;

    expect(ulChildren1 === 0 && ulChildren2 === 1).toBe(true);

    expect(localStorage.getLastElement()).toEqual({
      description: 'Do the dishes',
      index: 1,
      completed: false,
    });
  });

  test('Adding two more items reflects in the storage', () => {
    description = 'Go jugging';
    addToDo(description);
    description = 'Read the two novels';
    addToDo(description);

    const ulChildren1 = Array.from(document.querySelectorAll('.list-container > li')).length;
    populateUl(localStorage.getFromStorage());
    const ulChildren2 = Array.from(document.querySelectorAll('.list-container > li')).length;

    expect(ulChildren1 === 1 && ulChildren2 === 3).toBe(true);

    expect(localStorage.getFromStorage().length).toEqual(3);
  });

  test('Adding the forth item reflects in the storage', () => {
    description = 'Do one last thing';
    addToDo(description);
    expect(localStorage.getFromStorage().length).toEqual(4);
  });
});

describe('Remove Items from the List', () => {
  test('Able to remove the second item', () => {
    const allItems = localStorage.getFromStorage();
    const itemToRemove = allItems[1];
    removeOne(itemToRemove);
    expect(
      localStorage.getFromStorage().filter((todo) => todo.description === 'Go jugging').length,
    ).toEqual(0);
  });

  test('Able to remove the last item', () => {
    removeOne(localStorage.getLastElement());
    expect(
      localStorage.getFromStorage().filter((todo) => todo.description === 'Do one last thing').length,
    ).toEqual(0);
  });

  test('Able to remove all items', () => {
    localStorage.clearAll();
    expect(localStorage.getFromStorage().length).toEqual(0);
  });
});

describe('Edit Items in the List, Remove when empty', () => {
  test('Edit the second text from man to woman', () => {
    description = 'Man';
    addToDo(description);
    description = 'Read the two novels';
    addToDo(description);
    const firstTask = localStorage.getFromStorage()[0];
    editToDo(firstTask, 'Woman');
    expect(firstTask.description).toBe('Woman');
  });

  test('Edit the second text to empty', () => {
    const secondTask = localStorage.getFromStorage()[1];
    editToDo(secondTask, '');
    const { description } = secondTask;
    if (description === '') {
      removeOne(secondTask);
    }
    expect(localStorage.getFromStorage().length).toBe(1);
  });

  test("Edit the only remaining task description to 'Wash the car'", () => {
    const onlyRemainingTask = localStorage.getFromStorage()[0];
    editToDo(onlyRemainingTask, 'Wash the car');
    expect(onlyRemainingTask.description).toBe('Wash the car');
  });
});

describe('Update task completed status', () => {
  test('The completed prop of the first task should be true', () => {
    description = 'Code up an e-commerce website';
    addToDo(description);
    description = 'Review the pull request';
    addToDo(description);
    const firstTask = localStorage.getFromStorage()[0];
    toggleCompleted(firstTask);
    const { completed } = firstTask;
    expect(completed).toBe(true);
  });

  test('The completed prop of the first task is reverted to false', () => {
    const firstTask = localStorage.getFromStorage()[0];
    toggleCompleted(firstTask);
    const { completed } = firstTask;
    expect(completed).toBe(false);
  });

  test('The completed prop of the last task is changed to true', () => {
    const lastTask = localStorage.getLastElement();
    toggleCompleted(lastTask);
    const { completed } = lastTask;
    expect(completed).toBe(true);
  });
});