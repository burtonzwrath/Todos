import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  deleteTodoThunk,
  fetchTodosThunk,
  updateTodosThunk,
} from "../../store/actions/actions";
import TodosList from "./TodosList";
import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";

export default function TodosContainer({ open }) {
  const todos = useSelector((state) => state.todos);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onItemClick = (todo) => {
    dispatch(updateTodosThunk(todo));
  };
  function removeTodo(todo) {
    dispatch(deleteTodoThunk(todo));
  }

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, []);

  return (
    <Box>
      <TodosList
        removeTodo={removeTodo}
        todos={todos}
        onItemClick={onItemClick}
      />

      <Button
        variant="outlined"
        onClick={() => navigate("/create")}
        sx={{
          marginLeft: "300px",
          marginTop: "50px",
          marginBottom: "30px",
          fontSize: "30px",
          backgroundColor: "lightseagreen",
          color: "white",
        }}
      >
        Create new TODO
      </Button>
      {open ? <Form open={open} /> : ""}
    </Box>
  );
}
