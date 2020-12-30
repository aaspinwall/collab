import { useState } from "react";

//Little behaviour I couldn't get rid of, when clicking repeatedly on a box(because every does that), the text becomes selected.

//for now we use dummy data to display the voting choices
//Once everything is wired up we will have to change some names in the return.
// ie: votingOptions will become => voteOptions
import votingOptions from "./dummydata.json";

import styled from "styled-components";

import Checkbox from "./checkbox";

import OptionName from "./OptionName";

const VotingForm = ({ voteOptions, timeLimit }) => {
  const [checked, setChecked] = useState({ checked: false, option: "" });

  // this is to handle wether the input is checked or not for the styling.
  // And also associate the voted option to the correct index.

  const handleCheckBox = (index, option) => {
    setChecked((checked) => ({
      [index]: !checked[index],
      option,
    }));
  };

  // On submit we will send the chosen voteOption and
  // the timeLimit previously set by the room creator.
  // For now we just have an alert with the voted option and another one to prevent casting an empty ballot.

  const getTruthyValue = Object.values(checked)[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    //graphql submit poutine here
    if (getTruthyValue === false) {
      alert("Seems like you did not vote for anything");
    } else {
      alert(checked.option);
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, timeLimit)}>
        <VotingOptions>
          {votingOptions.map((option, index) => {
            return (
              <OptionSelection key={index}>
                <label>
                  <Checkbox
                    value={option}
                    checked={{ ...checked }}
                    index={index}
                    onChange={() => handleCheckBox(index, option)}
                  />
                </label>
                <OptionName
                  checked={{ ...checked }}
                  index={index}
                  onChange={() => handleCheckBox(index)}
                >
                  {option}
                </OptionName>
              </OptionSelection>
            );
          })}
        </VotingOptions>
        <SubmitButton type="submit"> SUBMIT</SubmitButton>
      </form>
    </>
  );
};

const VotingOptions = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OptionSelection = styled.li`
  display: flex;
  margin: 5px;
  width: 200px;
  justify-content: center;
  align-items: center;
`;

const SubmitButton = styled.button`
  border: none;
  outline: none;
  width: 150px;
  height: 25px;
  margin-left: 70px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-image: linear-gradient(to bottom right, #4a21bd, white);
`;

export default VotingForm;
