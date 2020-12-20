import { COLORS } from "./colors";

export const SubmitButtonStyles = {
  background: `${COLORS.PURPLES.LIGHT}`,
  background: `linear-gradient(135deg, ${COLORS.PURPLES.MAIN} 0%, ${COLORS.PURPLES.LIGHT} 150%)`,
  position: "relative",
  transition: "all 0.2s ease-in-out",
  zIndex: "100",
  borderRadius: `10px`,
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
};

export const ReturnHomeStyles = {
  ...SubmitButtonStyles,
  width: "200px",
};

export const AddOptionStyles = {
  ...ReturnHomeStyles,
  marginBottom: "10px",
};

export const InfoStyles = {
  ...ReturnHomeStyles,
  padding: "20px",
};

export const SubmitVote = {
  ...SubmitButtonStyles,
  marginTop: '17.5px',
}