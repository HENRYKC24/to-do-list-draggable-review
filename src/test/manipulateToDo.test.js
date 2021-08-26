jest.mock("../manipulateToDo");

import { addToDo } from "../manipulateToDo";

// const input = document.createElement("input");
// input.type = "text";
// input.className = "input";
// input.value = "Do the dishes";
const description = "Do the dishes";

describe("Testing Add List", () => {
  test("Adding one item reflects in the storage", () => {
    expect(addToDo(description)).toEqual([
      {
        description: "Do the dishes",
        index: 1,
        completed: false,
      },
    ]);
  });

  test("Adding one item reflects in the storage", () => {
    addToDo(description);
    addToDo(description);
    expect(addToDo(description).length).toEqual(4);
  });

  test("Adding one item reflects in the storage", () => {
    expect(addToDo(description).length).toEqual(5);
  });
});
