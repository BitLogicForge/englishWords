import { Box, Chip, Paper, Typography } from "@mui/material";
import { useAppSelector } from "../store/hooks";

export default function BadWordsStats() {
  const badWords = useAppSelector((state) => state.lesson.badWords);

  // Get only the most recent 5 bad answers
  const recentBadWords = badWords.slice(-5);

  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        mt: 3,
        backgroundColor: badWords.length > 0 ? "#fff4f4" : "#f5f5f5",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography
          variant="h6"
          color={badWords.length > 0 ? "error" : "text.secondary"}
        >
          Incorrect Answers: {badWords.length}
        </Typography>

        {recentBadWords.length > 0 && (
          <>
            <Typography variant="subtitle2" color="text.secondary">
              Recent incorrect answers:
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {recentBadWords.reverse().map((word, index) => (
                <Chip
                  key={index}
                  label={word}
                  color="error"
                  size="small"
                  variant="outlined"
                  sx={{ width: "fit-content" }}
                />
              ))}
            </Box>
          </>
        )}
      </Box>
    </Paper>
  );
}
