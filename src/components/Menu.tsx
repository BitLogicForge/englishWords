import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { menuItems } from "../config/menuItems";
import { setPage } from "../store/appSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.app.page);
  useEffect(() => {
    const path = location.pathname.substring(1) || menuItems[0].value;
    dispatch(setPage(path));
  }, [location, dispatch]);

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    dispatch(setPage(newValue));
    navigate(`/${newValue}`);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
      <Tabs value={page} onChange={handleChange} scrollButtons="auto" centered>
        {menuItems.map((item) => (
          <Tab key={item.value} label={item.label} value={item.value} />
        ))}
      </Tabs>
    </Box>
  );
};

export default Menu;
