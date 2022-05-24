import UserItem from "./TodoItem";
import {
  Table,
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@mui/material";

export default function TodosList({
  todos,
  removeTodo,
  onItemClick = { onItemClick },
}) {
  return (
    <TableContainer>
      <Table sx={{ maxWidth: "800px", marginLeft: "50px", marginTop: "50px" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "dimgrey", fontSize: "20px" }}>
              Status
            </TableCell>
            <TableCell align="center" sx={{ color: "dimgrey", fontSize: "30px" }}>
              Todos
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {todos.map((item, index) => (
            <UserItem
              key={index}
              id={index}
              todo={item}
              removeTodo={removeTodo}
              onItemClick={onItemClick}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
