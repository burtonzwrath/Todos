import axios from "axios";
const URL= "https://612687da3ab4100017a68fd8.mockapi.io/todos/"
export const getTodos = () => {
  return axios
    .get(URL)
    .then((resp) => resp.data);
};

export const deleteTodo = (todo) => {
  return axios
    .delete(URL + todo.id)
    .then((resp) => resp.data);
};

export const createTodos = (todo) => {
  return axios.post(URL, todo, {
    headers: { "Content-Type": "application/json" },
  });
};

export const updateTodos=(todo)=>{
  return axios.put ( URL + todo.id)
      .then ((resp)=>resp.data
  )}
