import { Drawer, Typography } from "@mui/material";
import { Aside_Links } from "../Aside_Links/Aside_Links";
import { PropTypes } from "prop-types";

const drawerWidth = 240;

export const App_Bar_Aside = ({
  setMode,
  showAside,
  drawerType,
  setShowAside,
  setDrawerType,
}) => {
  const showDrawer = () => {
    setShowAside("none");
    setDrawerType("permanent");
  };

  return (
    <Typography sx={{ width: drawerWidth }}>
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            display: { xs: showAside, sm: "block" },
          },
        }}
        variant={drawerType}
        anchor="left"
        open={true}
        onClose={showDrawer}
      >
        <Aside_Links setMode={setMode} />
      </Drawer>
    </Typography>
  );
};

App_Bar_Aside.propTypes = {
  setMode: PropTypes.fun,
  showAside: PropTypes.string,
  drawerType: PropTypes.string,
  setDrawerType: PropTypes.fun,
  setShowAside: PropTypes.fun,
};
