import { createAction } from "@reduxjs/toolkit";
export const fetchTodo = () =>
  async function (dispatch, getState) {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();

    dispatch(addTask(data.title));
  };

export const addTask = createAction("ADD_TASK");
export const removeTask = createAction("REMOVE_TASK");
export const taskCompleted = createAction("TASK_COMPLETED");
