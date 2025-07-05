import { Chip } from "@mui/material";
import { useAppSelector } from "../store/hooks";
export default function CurrentWord() {
  const currentWord = useAppSelector((state) => state.lesson.currentWord);
  return (
    <Chip
      label={currentWord}
      color="primary"
      sx={{
        height: "auto",
        padding: "12px",
        fontSize: "1.25rem",
        fontWeight: "bold",
        "& .MuiChip-label": {
          padding: "4px 8px",
        },
      }}
    />
  );
}
