import { Grid } from "@mui/material";
import SEO from "../components/SEO";
import words from "../data/wordsall.json";

const TestPage = () => {
  return (
    <>
      <SEO
        title="Vocabulary Test - English Words Trainer | Test Your Knowledge"
        description="Test your English vocabulary knowledge with our comprehensive assessment. Evaluate your progress and identify areas for improvement in your English learning journey."
        keywords="English vocabulary test, vocabulary assessment, English knowledge test, vocabulary quiz, language proficiency test, English learning evaluation"
        canonicalUrl="https://bitlogicforge.github.io/englishWords/test"
      />
      <Grid size={{ xs: 12 }}>TestPage </Grid>
      <Grid size={{ xs: 12 }}>words length{words.length} </Grid>
    </>
  );
};

export default TestPage;
