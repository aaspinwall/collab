import React from "react";
import Timer from "../../components/timer";
import Card from "../../components/ui/card";
import CopyToClipBoardButton from "../../components/ui/copytoclipboard";
import Modal from "../../components/ui/modal";
import styled from "styled-components";

export default function Development() {
  // Testing Copy to clipboard
  const [textToBeCopied, setTextToBeCopied] = React.useState("");

  //   const [text, setText] = React.useState(null);

  const state = {
    size: 250,
    strokeWidth: 15,
    circleOneStroke: "#d9edfe",
    circleTwoStroke: "orange",
  };

  function handleChange(e) {
    console.log(e, "change");
    setTextToBeCopied(e.target.value);
  }

  return (
    <>
      <div>
        <Card>
          <form>
            <label>
              Text to be copied:
              <input
                type="text"
                value={textToBeCopied}
                onChange={handleChange}
              />
            </label>
            {/* <input type="submit" value="Set Copy State" /> */}
          </form>
        </Card>
      </div>
      <Card>
        <CopyToClipBoardButton text={textToBeCopied} />
      </Card>
      <Timer time={50} {...state} />
      <Modal>
        <StyledForm>
          <label>Name</label>
          <input />
          <label>Email</label>
          <input />
          <button className="button">Submit</button>
        </StyledForm>
      </Modal>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  & label {
    padding: 10px;
  }
  .button {
    margin-top: 15px;
  }
`;
