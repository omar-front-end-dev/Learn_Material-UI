import { Outlet } from "react-router-dom";
import { Nav_Bar } from "../components/Nav_Bar/Nav_Bar";
import { App_Bar_Aside } from "../components/App_Bar_Aside/App_Bar_Aside";
import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const drawerWidth = 240;

export const Layout = () => {
  let getThemToLocalStorage = localStorage.getItem("themeMode");
  const [mode, setMode] = useState(getThemToLocalStorage ?? "light");
  const [showAside, setShowAside] = useState("none");
  const [drawerType, setDrawerType] = useState("permanent");

  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <header>
          <Nav_Bar
            setShowAside={setShowAside}
            showAside={showAside}
            setDrawerType={setDrawerType}
          />
        </header>
        <aside>
          <App_Bar_Aside
            setMode={setMode}
            showAside={showAside}
            drawerType={drawerType}
            setDrawerType={setDrawerType}
            setShowAside={setShowAside}
          />
        </aside>

        <Box
          component={"main"}
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            p: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};
