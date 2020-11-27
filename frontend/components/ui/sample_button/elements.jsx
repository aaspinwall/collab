import styled from "styled-components";

// We will eventually have a design system with proper sizes
// for now this is a placeholder
const sizes = {
  small: { fontSize: "1rem", padding: "1rem" },
  medium: { fontSize: "1.5rem", padding: "1.2rem" },
  large: { fontSize: "2rem", padding: "1.7rem" },
};

const Button = styled.button`
  background: ${(props) => props.background || "#9D8AFF"};
  border-radius: ${(props) => (props.sharp ? 0 : "40px")};
  padding: ${(props) => sizes[props.size].padding};
  font-size: ${(props) => sizes[props.size].fontSize};
  letter-spacing: 2px;
  color: ${(props) => props.color || "white"};
  font-weight: bold;
  border: none;
  text-transform: uppercase;
  transition: filter 0.2s ease-in-out;

  :hover {
    filter: brightness(1.3);
  }
`;
export default Button;
