//OLD way to create store
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./tasks/reducer_old";
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
