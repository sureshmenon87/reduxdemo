import { createReducer } from "@reduxjs/toolkit";
import { addTask, removeTask, taskCompleted } from "./action";
let id = 0;
const initialState = [];
export default createReducer(initialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      state.push({
        id: id++,
        task: action.payload.task,
        completed: false,
      });
    })
    .addCase(removeTask, (state, action) => {
      return state.filter((task) => task.id != action.payload.id);
    })
    .addCase(taskCompleted, (state, action) => {
      const task = state.find((t) => t.id === action.payload.id);
      if (task) {
        task.completed = true;
      }
    });
});
