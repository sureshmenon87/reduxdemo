// using slice in redux

import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const employeeSlice = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push({
        id: id++,
        name: action.payload.name,
      });
    },
    removeTask: (state, action) => {
      return state.filter((emp) => emp.id != action.payload.id);
    },
  },
});

export const { addEmployee, removeEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
