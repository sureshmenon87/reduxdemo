//modern way to create store
import { configureStore } from "@reduxjs/toolkit";
//import reducer from "./tasks/reducer_old";
//import reducer from "./tasks/reducer";

//import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "./tasks/tasks";
import employeeReducer from "./employees/index";
/*const rootReducer = combineReducers({
  tasks: reducer,
  employee: employeeReducer,
});*/
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    employee: employeeReducer,
  },
});
export default store;
