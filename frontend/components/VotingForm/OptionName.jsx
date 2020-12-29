import styled from "styled-components";

const VoteOption = styled.div`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
  margin: 5px;
  width: 200px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px #888888;
  background: ${(props) => (props.checked ? "white" : "#a6abd3")};
`;

const OptionName = ({ checked, index, ...props }) => {
  return <VoteOption checked={checked[index]} {...props}></VoteOption>;
};

export default OptionName;
