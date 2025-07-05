import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Chip, Paper, Typography } from "@mui/material";
import { useAppSelector } from "../store/hooks";

interface WordsStatsProps {
  type: "good" | "bad";
  title?: string;
  recentTitle?: string;
  limit?: number;
}

export default function WordsStats({
  type,
  title,
  recentTitle,
  limit = 5,
}: WordsStatsProps) {
  const words = useAppSelector((state) =>
    type === "good" ? state.lesson.goodWords : state.lesson.badWords,
  );

  // Get only the most recent words up to the limit
  const recentWords = words.slice(-limit);

  // Determine styling based on type
  const getConfig = () => {
    if (type === "good") {
      return {
        backgroundColor: "#f0fff4",
        color: "success",
      };
    } else {
      return {
        backgroundColor: "#fff4f4",
        color: "error",
      };
    }
  };

  const config = getConfig();

  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        mt: 3,
        // backgroundColor: words.length > 0 ? config.backgroundColor : "#f5f5f5",
        height: "100%", // Make sure both papers have the same height
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography
          variant="h6"
          color={words.length > 0 ? config.color : "text.secondary"}
        >
          {title || (type === "good" ? "Correct Answers" : "Incorrect Answers")}
          : {words.length}
        </Typography>

        {recentWords.length > 0 && (
          <>
            <Typography variant="subtitle2" color="text.secondary">
              {recentTitle ||
                (type === "good"
                  ? "Recent correct answers:"
                  : "Recent incorrect answers:")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {recentWords
                .slice()
                .reverse()
                .map((word, index) => (
                  <Chip
                    key={index}
                    label={word}
                    icon={type === "good" ? <CheckIcon /> : <CloseIcon />}
                    color={config.color as "success" | "error"}
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
