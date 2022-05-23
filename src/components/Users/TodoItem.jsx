import { Button, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AvatarIcon from "../Icons/AvatarIcon";

export default function todoItem({ todo, onItemClick, removeTodo }) {
  const style = (todo) => {
    return todo.complited === true ? "lightgreen" : "linen";
  };
  const style2 = (todo) => {
    return todo.complited === true ? "linen" : "lightgreen";
  };

  return (
    <TableRow
      onClick={() => onItemClick(todo)}
      sx={{
        backgroundColor: style(todo),
        color: style2(todo),
        fontSize: "16px",
      }}
    >
      <TableCell sx={{ width: "60px" }}>
        <AvatarIcon todo={todo} />
      </TableCell>

      <TableCell
        sx={{
          color: "brown",
          backgroundColor: "lightgrey",
          marginLeft: "5px",
          fontSize: "20px",
        }}
      >
        {todo.title}
      </TableCell>

      <TableCell sx={{ maxWidth:"40px" }}>
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          sx={{ fontSize: "16px", backgroundColor: "lightcoral" }}
          onClick={() => removeTodo(todo)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
