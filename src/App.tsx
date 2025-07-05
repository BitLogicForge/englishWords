import {
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

import { menuItems } from "./config/menuItems";
import { useAppSelector } from "./store/hooks";

function App() {
  const darkMode = useAppSelector((state) => state.app.darkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <>
      <BrowserRouter basename="/englishWords">
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid size={{ xs: 12 }}>
                <Header />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Menu />
              </Grid>
              <Routes>
                {menuItems.map((item) => (
                  <Route
                    key={item.value}
                    path={`/${item.value}`}
                    element={
                      item.component && React.createElement(item.component)
                    }
                  />
                ))}
                <Route
                  path="/"
                  element={<Navigate to={`/${menuItems[0].value}`} replace />}
                />
              </Routes>
            </Grid>
            <Footer />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
