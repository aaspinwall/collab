import styled from "styled-components";

// We will eventually have a design system with proper sizes
// for now this is a placeholder
const sizes = {
  small: { fontSize: "1rem", padding: "1rem" },
  medium: { fontSize: "1.5rem", padding: "1.2rem" },
  large: { fontSize: "2rem", padding: "1.7rem" },
};

const Button = styled.button`
  :hover {
    filter: brightness(1.3);
  }
`;

export default Button;
