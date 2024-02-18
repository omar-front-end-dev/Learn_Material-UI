import { IconButton, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PropTypes } from "prop-types"

export const Expense_Item = ({ item, removeHandler}) => {


    
    



  return (
    <>
      <Paper
        sx={{
          display: "flex",
          width: { sm: "350px", xs: "300px" },
          justifyContent: "space-between",
          mt: "22px",
          pt: "27px",
          pb: "7px",
          position: "relative",
        }}
        elevation={2}
      >
        <Typography
          sx={{ ml: "16px", fontSize: "1.3em" }}
          variant="h6"
          color="inherit"
        >
          {item.title}
        </Typography>
        <Typography
          sx={{
            mr: "33px",
            fontWeight: "500",
            fontSize: "1.4em",
            opacity: "0.8",
          }}
          variant="h6"
          color="inherit"
        >
          ${item.price}
        </Typography>
        <IconButton onClick={() => removeHandler(item.id)} sx={{ position: "absolute", top: "0", right: "0" }}>
          <CloseIcon sx={{ fontSize: "20px" }} />
        </IconButton>
      </Paper>
    </>
  );
};

Expense_Item.propTypes = {
  item: PropTypes.object,
  removeHandler: PropTypes.fun,
};
