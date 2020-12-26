import React, { useState } from "react";
import styled from "styled-components";
import { SubmitVote } from "../../../styles/button";

const CheckboxForm = ({ voteOptions }) => {
  const [radioCheck, setRadioCheck] = useState(false);

  const handleRadioClick = () => {
    const radioButtons = document.getElementsByName("vote-options");
    radioButtons.forEach((radio) => {
      if (radio.checked) {
        setRadioCheck(radio.value);
      }
    });
  };
  const handleVoteSubmit = (ev) => {
    ev.preventDefault();
    console.log(radioCheck);

    // add functionality to go back to home page instead of having a dedicated home button
  };

  return (
    <Container>
      <form>
        <fieldset id={"vote-options"} className={"radio-container"}>
          {voteOptions.map((option, index) => {
            return (
              <div key={`vote-option-${index}`} className="vote-option">
                <label htmlFor={option}>{option}</label>
                <input
                  type="radio"
                  name="vote-options"
                  value={option}
                  onClick={handleRadioClick}
                />
              </div>
            );
          })}
        </fieldset>
        <button disabled={!radioCheck} onClick={handleVoteSubmit}>
          Submit Your Vote!
        </button>
      </form>
    </Container>
  );
};

export default CheckboxForm;

const Container = styled.div`
  background-color: ghostwhite;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5);

  form {
    display: flex;
    flex-direction: column;
    padding: 35px;

    .vote-option {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
      label {
        padding-left: 10px;
        margin-bottom: 8px;
      }
    }
    .radio-container {
      border: 0;
      margin: 0;
      padding: 0;
    }
  }
`;
