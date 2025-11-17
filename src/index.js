import {
  addTask,
  completeTask,
  fetchTodo,
  removeTask,
} from "./store/tasks/action";
import store from "./store/store";
console.log("Redux Starter Project!!");
console.log(store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated...", store.getState());
});
store.dispatch(addTask("Task 0"));
//unsubscribe();
store.dispatch(removeTask(0));

store.dispatch(addTask("Task 1"));
store.dispatch(addTask("Task 2"));
store.dispatch(addTask("Task 3"));
store.dispatch(completeTask(3));
store.dispatch(fetchTodo());
console.log(store.getState());
