// using slice in redux

import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: id++,
        task: action.payload.task,
        completed: false,
      });
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id != action.payload.id);
    },
    completedTask: (state, action) => {
      const task = state.find((t) => t.id === action.payload.id);
      if (task) {
        task.completed = true;
      }
    },
  },
});

export const { addTask, removeTask, completedTask } = taskSlice.actions;
export default taskSlice.reducer;
