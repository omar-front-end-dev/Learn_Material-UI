import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
  Divider,
  ListItem,
} from "@mui/material";
import { PropTypes } from "prop-types";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import ProfileIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, useLocation } from "react-router-dom";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { teal } from "@mui/material/colors";




export const Aside_Links = ({ setMode }) => {
  const theme= useTheme();
  let { pathname } = useLocation();
  
  const links_list = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "create", icon: <CreateIcon />, path: "/create" },
    { text: "Profile", icon: <ProfileIcon />, path: "/profile" },
    { text: "Setting", icon: <SettingsIcon />, path: "/Setting" },
  ];

  return (
    <List disablePadding>
      <ListItem sx={{ display: "flex", justifyContent: "center", mb: "7px" }}>
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "themeMode",
              theme.palette.mode === "light" ? "dark" : "light"
            );
            setMode(theme.palette.mode === "light" ? "dark" : "light");
          }}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon sx={{ color: "orange" }} />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </ListItem>

      <Divider />
      <>
        {links_list.map((link, index) => {
          return (
            <NavLink key={index} style={{ color: "inherit"}} to={link.path}>
              <ListItemButton sx={{backgroundColor :  pathname === link.path ? teal[500] : null }}>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.text} />
              </ListItemButton>
            </NavLink>
          );
        })}

        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </>
    </List>
  );
};

Aside_Links.propTypes = {
  setMode: PropTypes.string,
};
