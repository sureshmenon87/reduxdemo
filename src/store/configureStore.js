//modern way to create store
import { configureStore } from "@reduxjs/toolkit";
//import reducer from "./tasks/reducer_old";
import reducer from "./tasks/reducer";
const store = configureStore({ reducer });
export default store;
