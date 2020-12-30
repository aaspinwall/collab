import React, { useState } from "react";
import names from "./userNames.json";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import Button from "../ui/sample_button";
import { SubmitNameChoice, ShuffleNames } from "../../styles/button";

// not sure this is the cleanest way to operate
// the state is only used to rerender when the user presses shuffle
// the state itself is never used

const NameGenerator = ({ content, callback }) => {
  const { title, subtitle, instructions } = content;
  const [choice, setChoice] = useState([]);

  let nameChosen;
  let animalsIndexes = [];
  let adjectivesIndexes = [];
  let randomAnimals = [];
  let randomAdjectives = [];
  const animals = names.a;
  const adjectives = names.b;
  let radioValues;

  while (randomAnimals.length < 4 || randomAdjectives.length < 4) {
    const animalOption = Math.floor(Math.random() * animals.length);
    const adjectiveOption = Math.floor(Math.random() * adjectives.length);

    const isAnimalAlreadyIn = animalsIndexes.includes(animalOption);
    const isAdjectiveAlreadyIn = adjectivesIndexes.includes(adjectiveOption);

    if (!isAnimalAlreadyIn && randomAnimals.length !== 4) {
      animalsIndexes.push(animalOption);
      randomAnimals.push(animals[animalOption]);
    }
    if (!isAdjectiveAlreadyIn && randomAdjectives.length !== 4) {
      adjectivesIndexes.push(adjectiveOption);
      randomAdjectives.push(adjectives[adjectiveOption]);
    }
  }

  const handleNameChoiceSubmit = (ev) => {
    ev.preventDefault();
    console.log(nameChosen);
    localStorage.setItem('name', nameChosen)
    callback(nameChosen);
  };

  const handleRadioClick = (ev) => {
    radioValues = document.getElementsByName("name-choice");

    radioValues.forEach((radio) => {
      if (radio.checked) {
        nameChosen = radio.value;
      }
    });
  };

  const handleShuffle = (ev) => {
    ev.preventDefault();
    radioValues = document.getElementsByName("name-choice");
    radioValues.forEach((radio) => {
      if (radio.checked) {
        radio.checked = false;
      }
    });
    setChoice([]);
  };

  return (
    <Container>
      <GeneratorTitle>{title || "Welcome to"}</GeneratorTitle>
      <GeneratorSubTitle>{subtitle || "your choosing room"}</GeneratorSubTitle>

      <p>{instructions || "Pick your name"}</p>

      <NameForm>
        <NameChoice id={"name-choice"}>
          {randomAnimals.map((combo, index) => {
            const customName = `${randomAdjectives[index]} ${combo}`;
            return (
              <React.Fragment key={`namechoice-${index}`}>
                <NameRadio
                  type={"radio"}
                  name={"name-choice"}
                  value={customName}
                  id={customName}
                  onChange={handleRadioClick}
                />
                <NameLabel htmlFor={customName}>{customName}</NameLabel>
              </React.Fragment>
            );
          })}
        </NameChoice>
        <ButtonContainer>
          <Button
            onClick={handleShuffle}
            children={"Shuffle the names"}
            styles={ShuffleNames}
          />
          <Button
            onClick={handleNameChoiceSubmit}
            children={"Next"}
            styles={SubmitNameChoice}
          />
        </ButtonContainer>
      </NameForm>
    </Container>
  );
};

export default NameGenerator;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 15px;
  padding: 15px;
  margin-top: 50px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.6);
`;
const GeneratorTitle = styled.h1`
  text-transform: uppercase;
  font-size: 3em;
  margin: 0;
`;
const GeneratorSubTitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
`;
const NameForm = styled.form`
  width: 100%;
`;

const NameLabel = styled.label`
  cursor: pointer;
  user-select: none;
  text-align: center;
  font-weight: bold;
  font-size: 1.5em;
  border-radius: 20px;
  width: 100%;
  height: 40px;
  background-color: ${COLORS.SHADES.GREY};
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.SHADES.DARKGREY};
  transition: all 0.2s ease-in-out;

  :hover {
    background-color: ${COLORS.SHADES.OFFWHITE};
    color: ${COLORS.SHADES.BLACK};
  }
`;
const NameRadio = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: fixed;
  width: 0;
`;

const NameChoice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;

  ${NameRadio}:checked + ${NameLabel} {
    transform: scale(1.03);
    box-shadow: 0px 6px 27px -7px rgba(0, 0, 0, 0.75);
    background-color: ${COLORS.SHADES.OFFWHITE};
    color: ${COLORS.SHADES.BLACK};
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
