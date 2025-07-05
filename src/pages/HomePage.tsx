import EmailIcon from "@mui/icons-material/Email";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";

const HomePage = () => {
  // Obfuscated email parts
  const emailParts = {
    user: "bitlogicforge",
    domain: "gmail",
    tld: "com",
  };

  const getEmail = () =>
    `${emailParts.user}@${emailParts.domain}.${emailParts.tld}`;

  const handleEmailClick = () => {
    // Use a small delay to make it harder for bots
    setTimeout(() => {
      window.location.href = `mailto:${getEmail()}`;
    }, 100);
  };
  return (
    <Grid size={{ xs: 12 }}>
      <Paper
        elevation={2}
        sx={{
          padding: 4,
          marginTop: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          color="primary"
        >
          English Vocabulary Trainer
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{
            fontSize: "1.1rem",
            maxWidth: "800px",
            margin: "0 auto 24px",
          }}
        >
          My small project for learning English vocabulary. Features over 3,000
          words from the Oxford word list.
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 3,
          }}
        >
          <Button
            variant="contained"
            startIcon={<EmailIcon />}
            onClick={handleEmailClick}
            sx={{
              borderRadius: 2,
              padding: "10px 20px",
              textTransform: "none",
              fontSize: "1rem",
            }}
          >
            Contact: {getEmail()}
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default HomePage;
