import { DELETE_TODO, SAVE_TODO, GET_NEW_TODOS } from "../actions/actions";

const INITIAL_STATE = {
  todos: [],
  newTodo: {},
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_NEW_TODOS:
      return { ...state, todos: payload };
    case SAVE_TODO:
      const savedTodos = [...state.todos, payload];
      return { todos: savedTodos };
    case DELETE_TODO:
      const deleteTodo = state.todos.filter((todo) => todo.id !== payload.id);
      return { todos: deleteTodo };
    default:
      return state;
  }
}
