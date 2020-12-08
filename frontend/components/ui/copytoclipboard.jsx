import React, { useState, useRef } from "react";

import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import styled from "styled-components";

// Reverted to using both clipboard_api and execCommand
// we pass the text string as  props to the child component CopyToClipBoardButton
// so in a parent component we would do <CopyToClipboardButton text={someText}/>
//and that will copy the string to the clipboard
//Paste away!!

//TODO: finetune styling.

const CopyToClipBoardButton = ({ text }) => {
  const [copy, setCopy] = useState(false);
  const inputRef = useRef(null);

  const handleClick = async () => {
    //if the clipboard_api is not supported we use the ol' excCommand to copy to clipboard.
    if (!navigator.clipboard) {
      inputRef.current.select();
      document.execCommand("copy");
    }
    const textToCopy = inputRef.current.value;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopy(true);
    } catch (err) {
      console.log("Failed to copy:", err);
    }
  };
  return (
    <Wrapper>
      <span>Copy invitation link:</span>
      <Input
        ref={inputRef}
        value={text}
        readOnly={true}
        className="ctcbb-input"
      />
      <IconWrapper>
        <AssignmentOutlinedIcon onClick={() => handleClick()} />
      </IconWrapper>
      {copy ? (
        <IconWrapper>
          <CheckCircleOutlineIcon color="primary" />
        </IconWrapper>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

//a minimal styling for now

const Wrapper = styled.div`
  white-space: nowrap;
  input,
  div,
  svg {
    display: inline-block;
    white-space: normal;
    vertical-align: middle;
  }
`;
const Input = styled.input`
  border: none;
  border-bottom: 2px solid black;
  overflow: hidden;
`;

//I wrap the icon(an svg) in a div so it's easier to manipulate and place where we want. Couldn't do it without doing that.
const IconWrapper = styled.div``;

export default CopyToClipBoardButton;
