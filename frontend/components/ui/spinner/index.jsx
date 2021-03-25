import styled from "styled-components";

const Spinner = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  animation-timing-function: cubic-bezier(1, 0.7, 0.1, 1);
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
