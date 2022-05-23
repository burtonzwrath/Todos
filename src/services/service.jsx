import axios from "axios";
const URL= "https://612687da3ab4100017a68fd8.mockapi.io/todos/"
export const getTodos = () => {
  return axios
    .get(URL)
    .then((resp) => resp.data);
};

export const deleteTodo = (user) => {
  return axios
    .delete(URL + user.id)
    .then((resp) => resp.data);
};

export const createTodos = (user) => {
  return axios.post(
      URL,
    user,
    { headers: { "Content-Type": "application/json" } }
  );
};

