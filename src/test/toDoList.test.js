
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