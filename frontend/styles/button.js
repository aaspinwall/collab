import { COLORS } from "./colors";

export const SubmitButtonStyles = {
  background: `${COLORS.PURPLES.LIGHT}`,
  background: `linear-gradient(135deg, ${COLORS.PURPLES.MAIN} 0%, ${COLORS.PURPLES.LIGHT} 150%)`,
  position: "relative",
  transition: "all 0.2s ease-in-out",
  zIndex: "100",
  borderRadius: `20px`,
  padding: `10px 20px`,
  fontSize: `1.25em`,
  letterSpacing: "2px",
  color: `${COLORS.SHADES.OFFWHITE}`,
  fontWeight: "bold",
  border: "none",
  outline: "none",
  textTransform: "uppercase",
  transition: "background 0.2s ease-in-out",
  cursor: "pointer",
  height: "40px",
};

export const ReturnHomeStyles = {
  ...SubmitButtonStyles,
  width: "200px",
};

export const AddOptionStyles = {
  ...ReturnHomeStyles,
  width: "35px",
  height: "35px",
  padding: "5px",
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const RemoveOptionStyles = {
  ...AddOptionStyles,
  width: "20px",
  height: "20px",
};

export const InfoStyles = {
  ...ReturnHomeStyles,
  padding: "20px",
};

export const SubmitVote = {
  ...SubmitButtonStyles,
  marginTop: "17.5px",
};

export const SubmitNameChoice = {
  ...SubmitButtonStyles,
  flex: "1",
};

export const ShuffleNames = {
  ...SubmitButtonStyles,
  marginRight: "15px",
};

export const TakeMeToVoteStyles = {
  ...SubmitButtonStyles,
};
