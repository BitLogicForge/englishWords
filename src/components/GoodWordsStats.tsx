import { Box, Chip, Paper, Typography } from "@mui/material";
import { useAppSelector } from "../store/hooks";

export default function GoodWordsStats() {
  const goodWords = useAppSelector((state) => state.lesson.goodWords);

  // Get only the most recent 5 good answers
  const recentGoodWords = goodWords.slice(-5);

  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        mt: 3,
        backgroundColor: goodWords.length > 0 ? "#f0fff4" : "#f5f5f5",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography
          variant="h6"
          color={goodWords.length > 0 ? "success" : "text.secondary"}
        >
          Correct Answers: {goodWords.length}
        </Typography>

        {recentGoodWords.length > 0 && (
          <>
            <Typography variant="subtitle2" color="text.secondary">
              Recent correct answers:
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {recentGoodWords.reverse().map((word, index) => (
                <Chip
                  key={index}
                  label={word}
                  color="success"
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
