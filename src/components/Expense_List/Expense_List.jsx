import axios from "axios";
import { Expense_Item } from "../Expense_Item/ExpenseItem";
import { PropTypes } from "prop-types";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export const Expense_List = ({ data, setData }) => {
  const { palette } = useTheme();

  const removeHandler = (id) => {
    let filterData = data.filter((ele) => ele.id != id);
    console.log(filterData);
    axios.delete(`http://localhost:3000/transaction/${id}`);
    setData(filterData);
  };

  let totalPrice = data
    .reduce((acc, current) => (acc += +current.price), 0)
    .toFixed(1);

  return (
    <>
      {data.length != 0 ? (
        data.map((item) => {
          return (
            <>
              <Expense_Item
                key={item.id}
                item={item}
                removeHandler={removeHandler}
              />
            </>
          );
        })
      ) : (
        <Typography
          variant="h3"
          sx={{ color: palette.mode == "dark" ? "#fff" : "#000" }}
        >
          There are no expenses
        </Typography>
      )}
      <Typography variant="h6" sx={{ py: 1, textAlign: "center" }}>
        your spend 👉 {totalPrice}$
      </Typography>
    </>
  );
};

Expense_List.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.fun,
};
