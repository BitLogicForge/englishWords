import { Grid } from "@mui/material";
import SEO from "../components/SEO";
import Settings from "../components/Settings";

const SettingsPage = () => {
  return (
    <>
      <SEO
        title="Settings - English Words Vocabulary Trainer | Customize Your Learning"
        description="Customize your English vocabulary learning experience. Toggle themes, adjust difficulty, enable hints, and personalize settings for optimal learning outcomes."
        keywords="English vocabulary settings, learning customization, vocabulary trainer settings, theme toggle, difficulty adjustment, learning preferences"
        canonicalUrl="https://bitlogicforge.github.io/englishWords/settings"
      />
      <Grid size={{ xs: 12 }}>
        <Settings />
      </Grid>
    </>
  );
};

export default SettingsPage;
