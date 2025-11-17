import { ADD_TASK, COMPLETED_TASK, REMOVE_TASK } from "./actionTypes";

export const fetchTodo = () =>
  async function (dispatch, getState) {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();

    dispatch(addTask(data.title));
  };

export const addTask = (task) => {
  return { type: ADD_TASK, payload: { task: task } };
};

export const removeTask = (id) => {
  return { type: REMOVE_TASK, payload: { id: id } };
};

export const completeTask = (id) => {
  return { type: COMPLETED_TASK, payload: { id: id } };
};
