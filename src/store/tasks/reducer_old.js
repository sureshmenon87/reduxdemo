import { addTask, removeTask, taskCompleted } from "./action";
let id = 0;
function reducer(state = [], action) {
  switch (action.type) {
    case addTask.type:
      return [
        ...state,
        { id: id++, task: action.payload.task, completed: false },
      ];
    case removeTask.type:
      return state.filter((task) => task.id != action.payload.id);
    case taskCompleted.type:
      return state.map((task) => {
        if (task.id === action.payload.id) {
          task.completed = true;
        }
        return task;
      });
    default:
      return state;
  }
}

export default reducer;
