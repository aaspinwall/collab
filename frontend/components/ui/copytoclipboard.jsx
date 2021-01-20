import React, { useState, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { COLORS } from "../../styles/colors";

// Reverted to using both clipboard_api and execCommand
// we pass the text string as  props to the child component CopyToClipBoardButton
// so in a parent component we would do <CopyToClipboardButton text={someText}/>
//and that will copy the string to the clipboard
//Paste away!!

const fadeIn = keyframes`
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;

const CopyToClipBoardButton = ({ text }) => {
  const [copy, setCopy] = useState(false);
  const inputRef = useRef(null);

  const handleClick = async () => {
    //if the clipboard_api is not supported we use the ol' excCommand to copy to clipboard.
    if (!navigator.clipboard) {
      inputRef.current.select();
      document.execCommand("copy");
    }
    const textToCopy = inputRef.current.innerText;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopy(true);
    } catch (err) {
      console.log("Failed to copy:", err);
    }
  };
  return (
    <Wrapper>
      <LinkToCopy ref={inputRef}>{text.slice(7)}</LinkToCopy>
      {copy ? (
        <CopiedWrapper>
          <span className={"checked"}>Copied!</span>
        </CopiedWrapper>
      ) : (
        <CopyWrapper onClick={() => handleClick()}>
          <span>Copy</span>
        </CopyWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  white-space: nowrap;
  input {
    display: inline-block;
    white-space: normal;
    vertical-align: middle;
  }
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border: 2px solid ${COLORS.PURPLES.MAIN};
  border-radius: 10px;
  height: 35px;
`;
const LinkToCopy = styled.p`
  display: flex;
  align-items: center;
  border: none;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.85);
  height: 100%;
  width: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin: 0;
  padding: 0 10px;
  flex: 5;
  font-weight: bold;
  outline: none;
`;

const SharedStyles = css`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  font-size: 1.2em;
  font-weight: bold;
  height: 32px;
  width: 100%;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  outline: none;
`;

const CopyWrapper = styled.button`
  ${SharedStyles}
  background-color: ${COLORS.PURPLES.LIGHT};
  color: ${COLORS.SHADES.WHITE};
  border: 2px solid ${COLORS.PURPLES.LIGHT};
  margin: 0;

  :hover {
    background-color: ${COLORS.PURPLES.MAIN};
    border: 2px solid ${COLORS.PURPLES.MAIN};
  }
`;

const CopiedWrapper = styled.button`
  ${SharedStyles}
  background-color: ${COLORS.PURPLES.MAIN};
  color: ${COLORS.SHADES.WHITE};
  border: 2px solid ${COLORS.PURPLES.MAIN};
  margin: 0 -1px;

  .checked {
    animation: ${fadeIn} 0.8s linear;
  }
`;

export default CopyToClipBoardButton;
