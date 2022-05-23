import { createTodos, deleteTodo, getTodos } from "../../services/service";

export const DELETE_TODO = "DELETE_TODO";
export const SAVE_TODO = "SAVE_TODO";
export const SET_TODO = "SET_TODO";
export const GET_NEW_TODOS = "GET_NEW_TODOS";

export const setTodo = (payload) => ({
  type: SET_TODO,
  payload,
});

export const getNewTodos = (payload) => ({
  type: GET_NEW_TODOS,
  payload,
});

export const fetchTodosThunk = () => {
  return function (dispatch) {
    getTodos().then((data) => dispatch(getNewTodos(data)));
  };
};

export const deleteTodoThunk = (payload) => {
  return function (dispatch, getState) {
    const todos = getState();
    const newTodos = todos.todos.filter((todo) => todo.id !== payload.id);
    deleteTodo(payload).then(() => dispatch(getNewTodos(newTodos)));
    dispatch(getNewTodos(newTodos));
  };
};

export const createTodoThunk = (payload) => {
  return function (dispatch, getState) {
    const todos = getState();
    const newTodos = [...todos.todos, payload];
    createTodos(payload).then(() => dispatch(getNewTodos(newTodos)));
  };
};
