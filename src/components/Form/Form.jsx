import {
  Box,
  Button,
  FormGroup,
  InputLabel,
  Select,
  MenuItem,
  Modal,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createTodoThunk } from "../../store/actions/actions";
import { useNavigate } from "react-router-dom";

export default function Form({ open }) {
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/");
    dispatch(createTodoThunk(data));
  };

  return (
    <Modal open={open}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          border: "3px solid blue",
          borderRadius: "6px",
          width: "600px",
          height: "160px",
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          margin: "30px",
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <FormGroup
          sx={{ paddingLeft: "20px", fontSize: "20px", height: "120px" }}
        >
          <InputLabel htmlFor="nameInput" sx={{ color: "dodgerblue" }}>
            Title
          </InputLabel>
          <TextField
            {...register("title", {
              maxLength: {
                value: 25,
                message: "максимально количество симовлов 25",
              },
              required: "обязательно поле!",
            })}
            error={errors.title && errors.title.message !== ""}
            helperText={errors.title && errors.title.message}
          />
        </FormGroup>

        <FormGroup sx={{ width: "100px", height: "120px", fontSize: "20px" }}>
          <InputLabel sx={{ color: "dodgerblue" }} id="selectInput">
            Status
          </InputLabel>
          <Select
            {...register("complited", { required: "обязательное поле" })}
            labelId="selectInput"
            label="Status"
          >
            <MenuItem
              value={true}
              sx={{
                backgroundColor: "green",
                color: "white",
                border: "1px solid black",
              }}
            >
              Done
            </MenuItem>
            <MenuItem
              value="Undone"
              sx={{
                backgroundColor: "orange",
                color: "white",
                border: "1px solid black",
              }}
            >
              Undone
            </MenuItem>
          </Select>
          {errors.complited && (
            <span
              style={{ margin: 0, padding: 0, color: "red", fontSize: "13px" }}
            >
              Please choose any variant
            </span>
          )}
        </FormGroup>
        <Box
          sx={{
            width: "170px",
            marginLeft: "20px",
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "40px",
          }}
        >
          <Button
            sx={{ backgroundColor: "lightsteelblue" }}
            variant="outlined"
            type="submit"
            disabled={!isDirty}
          >
            Save
          </Button>
          <Button
            sx={{ color: "red" }}
            variant="outlined"
            onClick={() => navigate("/")}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Modal>
  );
}
