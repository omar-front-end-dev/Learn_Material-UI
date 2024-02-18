import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import "./Create.css";
import { teal } from "@mui/material/colors";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useState } from "react";
import axios from "axios";

const ColorBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(teal[500]),
  backgroundColor: teal[500],
  "&:hover": {
    backgroundColor: teal[900],
  },
}));
export const Create = () => {
  const [expense, setExpense] = useState({
    title: "",
    price: "",
  });

  const changeHandler = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/transaction", expense),
    setExpense({
      title: "",
      price: 0,
    });
  };
  return (
    <Box
      className="create-page"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "450px",
        mt: "40px",
      }}
      component={"form"}
      onSubmit={submitHandler}
    >
      <TextField
        onChange={changeHandler}
        name="title"
        required
        value={expense.title}
        fullWidth
        label="Add expense"
        sx={{ mb: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ShortcutIcon />
            </InputAdornment>
          ),
        }}
        variant="filled"
      />

      <TextField
        onChange={changeHandler}
        type="number"
        value={expense.price}
        name="price"
        required
        fullWidth
        label="Add price"
        sx={{ mb: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon />
            </InputAdornment>
          ),
        }}
        variant="filled"
      />
      <ColorBtn variant="contained" type="submit">
        Submit
        <ChevronRightIcon />
      </ColorBtn>
      
    </Box>
  );
};
