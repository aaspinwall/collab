import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

// We will eventually have a design system with proper sizes
// for now this is a placeholder
const sizes = {
  small: { fontSize: "1rem", padding: "1rem" },
  medium: { fontSize: "1.5rem", padding: "1.2rem" },
  large: { fontSize: "2rem", padding: "1.7rem" },
};

const Button = styled.button`
  :before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: "";
    opacity: 0;
    z-index: -100;
    border-radius: 20px;
    color: ${COLORS.SHADES.OFFWHITE};
    background: ${COLORS.PURPLES.LIGHT};
    background: linear-gradient(
      135deg,
      ${COLORS.PURPLES.MAIN} 60%,
      ${COLORS.PURPLES.LIGHT} 150%
    );
    transition: all 0.2s ease-in-out;
  }
  :hover,
  :focus {
    &:before {
      opacity: 1;
    }
  }
  :disabled {
    visibility: hidden;
  }
`;

export default Button;
