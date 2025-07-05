import { Box, Typography } from "@mui/material";
import { settings } from "../config/settings";
const Footer = () => {
  return (
    <Box
      sx={{ mt: 4, pt: 2, borderTop: "1px solid #eee", textAlign: "center" }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} {settings.title}
      </Typography>
    </Box>
  );
};

export default Footer;
