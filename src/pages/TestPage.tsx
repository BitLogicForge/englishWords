import { Grid } from "@mui/material";
import words from "../data/wordsall.json";
const HomePage = () => {
  return (
    <>
      <Grid size={{ xs: 12 }}>TestPage </Grid>
      <Grid size={{ xs: 12 }}>words length{words.length} </Grid>
    </>
  );
};

export default HomePage;
