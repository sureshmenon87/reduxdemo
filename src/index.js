/*import {
  addTask,
  taskCompleted,
  fetchTodo,
  removeTask,
} from "./store/tasks/action";*/
import store from "./store/configureStore";
import { addEmployee } from "./store/employees";
import { addTask, removeTask, completedTask } from "./store/tasks/tasks";

console.log("Redux Starter Project!!");
console.log(store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated...", store.getState());
});

store.dispatch(addTask({ task: "Task 0" }));
//unsubscribe();
store.dispatch(removeTask({ id: 0 }));

store.dispatch(addTask({ task: "Task 1" }));
store.dispatch(addTask({ task: "Task 2" }));
store.dispatch(addTask({ task: "Task 3" }));
store.dispatch(completedTask({ id: 3 }));
//store.dispatch(fetchTodo()); // use store.js that use thunk
store.dispatch(addEmployee({ name: "Harley" }));
console.log(store.getState());
