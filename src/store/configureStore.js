//modern way to create store
import { configureStore } from "@reduxjs/toolkit";
//import reducer from "./tasks/reducer_old";
//import reducer from "./tasks/reducer";

import reducer from "./tasks/tasks";
const store = configureStore({ reducer });
export default store;
