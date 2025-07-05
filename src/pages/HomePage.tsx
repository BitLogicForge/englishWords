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
          variant="h6"
          component="h2"
          gutterBottom
          align="center"
          color="text.secondary"
          sx={{ fontStyle: "italic", marginBottom: 3 }}
        >
          Nauka słownictwa angielskiego dla Polaków
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{
            fontSize: "1.2rem",
            maxWidth: "900px",
            margin: "0 auto 24px",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          Welcome to an interactive English vocabulary learning platform
          designed specifically for Polish speakers. Master over 3,000 essential
          English words from the Oxford word list through engaging exercises
          that help you build your vocabulary step by step.
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{
            fontSize: "1.1rem",
            maxWidth: "800px",
            margin: "0 auto 24px",
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          Witamy na interaktywnej platformie do nauki słownictwa angielskiego,
          zaprojektowanej specjalnie dla Polaków. Opanuj ponad 3000 podstawowych
          słów angielskich z listy Oxford dzięki angażującym ćwiczeniom, które
          pomogą Ci krok po kroku budować swoje słownictwo.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            gap: 3,
            marginTop: 4,
            marginBottom: 3,
          }}
        >
          <Box sx={{ textAlign: "center", flex: 1, maxWidth: "250px" }}>
            <Typography variant="h6" color="primary" gutterBottom>
              📝 Two Learning Modes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Practice with multiple choice options or test yourself by typing
              the correct answer
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center", flex: 1, maxWidth: "250px" }}>
            <Typography variant="h6" color="primary" gutterBottom>
              📊 Progress Tracking
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Monitor your learning progress with detailed statistics of correct
              and incorrect answers
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center", flex: 1, maxWidth: "250px" }}>
            <Typography variant="h6" color="primary" gutterBottom>
              🎯 Smart Learning
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Focus on words you haven't mastered yet with our intelligent word
              selection system
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            marginTop: 4,
            padding: 3,
            backgroundColor: "action.hover",
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" color="primary" gutterBottom>
            How to use / Jak korzystać:
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ maxWidth: "600px" }}
          >
            1. Go to the <strong>Exercise</strong> page to start learning
            <br />
            2. Choose between writing mode or multiple choice options
            <br />
            3. Toggle hints and settings to customize your experience
            <br />
            4. Track your progress in the statistics below each exercise
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ maxWidth: "600px", fontStyle: "italic" }}
          >
            1. Przejdź do strony <strong>Exercise</strong>, aby rozpocząć naukę
            <br />
            2. Wybierz między trybem pisania a opcjami wielokrotnego wyboru
            <br />
            3. Włącz podpowiedzi i ustawienia, aby dostosować swoje
            doświadczenie
            <br />
            4. Śledź swoje postępy w statystykach poniżej każdego ćwiczenia
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            marginTop: 3,
            padding: 3,
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Ready to start learning? / Gotowy do rozpoczęcia nauki?
          </Typography>
          <Typography variant="body2" align="center">
            Navigate to the Exercise page to begin your English vocabulary
            journey!
          </Typography>
        </Box>

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
