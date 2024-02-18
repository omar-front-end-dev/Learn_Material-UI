import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { PropTypes } from "prop-types";
const drawerWidth = 240;
export const Nav_Bar = ({ setShowAside, setDrawerType }) => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { xs: 0, sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            sx={{ display: { sm: "none" } }}
            onClick={() => {
              setDrawerType("temporary");
              setShowAside("block");
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }}>
            <Link
              underline="none"
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              My expenses
            </Link>
          </Typography>

          <Typography
            component="div"
            display={"flex"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Typography component="p">Omar Mohamed</Typography>
            <Avatar sx={{ color: "inherit" }}>0</Avatar>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

Nav_Bar.propTypes = {
  setShowAside: PropTypes.fun,
  setDrawerType: PropTypes.fun,
};
