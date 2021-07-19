import React, { createRef, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Card from "../components/ui/card";
import CopyToClipboard from "../components/ui/copytoclipboard";
import Social from "../components/SocialMediaSharing";
import { COLORS } from "../styles/colors";
import ADD_ROOM from "./polloTest/CreateVoteOptions";
import { useMutation } from "@apollo/client";
import Boop from "./animations/Boop";
import Button from "./ui/sample_button";
import {
  SubmitButtonStyles,
  AddOptionStyles,
  RemoveOptionStyles,
  TakeMeToVoteStyles,
  PresetTimeStyles,
} from "../styles/button";

export default function CreateRoomForm() {
  const presetTimes = [3, 5, 10];
  const [presetSelect, setPresetSelect] = useState("");
  const placeholderRoomID = "001"; // roomId is handled by function, needs a placeholder however for some reason
  // these are the options being set
  const [options, setOptions] = useState([]);
  const [created, setCreated] = useState(false);
  const [addRoom] = useMutation(ADD_ROOM);
  // setting roomId here is used to access the Link to bring the user to the created-room
  // TODO: Access the roomId in a cleaner way?
  const [roomId, setRoomId] = useState(null);
  // this is the individual option being set in the form that's pushed to the array of total options
  const individualOption = createRef(null);
  // Creates the room ID (Will be replaced by automated function)
  const createRoomId = createRef(null);
  // this creates the room name
  const createRoomName = createRef(null);
  // this creates the rooms times limit in seconds (TODO: Change seconds to minutes and
  // create a function to change minutes to seconds in timer function to simplify it for the user)
  // function that pushes individual optiuon to total options
  const createTimeLimit = createRef(null);

  // this adds the new option to the options array
  const createOptionsArray = () => {
    setOptions([individualOption.current.value, ...options]);
    individualOption.current.value = "";
  };

  // this checks if the option input is not empty
  const handleAddOption = (e) => {
    e.preventDefault();
    individualOption.current.value !== "" && createOptionsArray();
  };

  // this removes an option
  const handleRemoveOption = (event, index) => {
    event.preventDefault();
    const updatedOptions = options.filter((option, id) => id !== index);
    setOptions(updatedOptions);
  };

  // this adds the array of options to the database
  const submitRoom = async (ev) => {
    ev.preventDefault();
    const oneMillisecond = 1000;
    const limitInSeconds = createTimeLimit.current.value;
    const limitInMilliseconds = limitInSeconds * oneMillisecond;
    const timeLimit = Date.now() + limitInMilliseconds;
    const res = await addRoom({
      variables: {
        name: createRoomName.current.value, // to change
        id: placeholderRoomID, // being generated on the backend -> taking it out throws a zillion errors
        timeLimit: timeLimit.toString(),
        voteOptions: options,
      },
    });

    const { success, message, room } = res.data.addRoom;

    // clears the List
    if (success) {
      setCreated(true);
      setRoomId(room.id);
      setOptions([]);
      console.log(res.data);
    } else {
      alert(message);
    }
  };

  const handlePresetTime = (time) => {
    setPresetSelect(time);
    console.log(time);
  };

  const handleTimeLimitChange = (e) => {
    console.log("time limit change value", e.target.value)
    setPresetSelect(e.target.value)
  };

  return (
    <Container>
      {created ? (
        <Card>
          <ShareText>Share with your friends</ShareText>
          <Social url={`${location.origin}/room/voting-room/${roomId}`} />
          <CopyToClipboard
            text={`${location.origin}/room/voting-room/${roomId}`}
          />
          <Boop rotation={15}>
            <Link href={`/room/voting-room/${roomId}`}>
              <Button styles={TakeMeToVoteStyles}>Take Me To The Vote!</Button>
            </Link>
          </Boop>
        </Card>
      ) : (
        <FormContainer onSubmit={handleAddOption}>
          <Header>Create Your Room</Header>
          {/* Fix variable names */}
          {/* useRef for the two below input to validate variables: name, timelimit*/}
          <RoomName>
            <Label>
              Room Name
              <Input
                required
                type="text"
                placeholder="Room Name"
                ref={createRoomName}
              />
            </Label>
          </RoomName>
          <TimeLimit>
            <PresetTimes>
              {presetTimes.map((time) => {
                return (
                  <Button
                    styles={PresetTimeStyles}
                    type="button"
                    onClick={() => handlePresetTime(time)}
                  >
                    {time} Mins
                  </Button>
                );
              })}
            </PresetTimes>
            <Label>
              <Input
                id="formInput"
                required
                type="number"
                placeholder="Time Limit"
                ref={createTimeLimit}
                value={presetSelect ? presetSelect : ""}
                onChange={handleTimeLimitChange}
              />
            </Label>
          </TimeLimit>
          <Options>
            <Label>
              Add some options
              <AddOptionContainer>
                <OptionInput
                  required
                  type="text"
                  placeholder="Options"
                  ref={individualOption}
                />
                <Button children={"+"} styles={AddOptionStyles} />
              </AddOptionContainer>
            </Label>
          </Options>
          {options.length >= 1 && (
            <OptionList>
              {options &&
                options.map((option, index) => (
                  <OptionContainer key={index}>
                    <Option>{option}</Option>
                    <Button
                      children={"-"}
                      onClick={(event) => handleRemoveOption(event, index)}
                      styles={RemoveOptionStyles}
                    />
                  </OptionContainer>
                ))}
            </OptionList>
          )}
          <Button
            children={"Submit Room"}
            onClick={submitRoom}
            styles={SubmitButtonStyles} /* props={whateverElseWeNeed} */
          />
        </FormContainer>
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 25px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5);
`;
const Header = styled.h1`
  color: ${COLORS.SHADES.BLACK};
  text-align: center;
  margin-top: 0;
  padding-bottom: 15px;
  font-size: 2rem;
`;
const RoomName = styled.div``;
const Label = styled.label`
  text-align: center;
  font-weight: bold;
  font-size: 1.6rem;
  display: block;
  padding: 5px;
`;
const PresetTimes = styled.div`
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  display: block;
  width: 240px;
  margin-top: 5px;
  text-align: center;
  border: none;
  border-radius: 20px;
  height: 40px;
  background-color: ${COLORS.SHADES.OFFWHITE};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  outline: none;
`;
const AddOptionContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 2.5px;
  background-color: ${COLORS.SHADES.OFFWHITE};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  height: 40px;
  width: 237.5px;
`;
const OptionInput = styled.input`
  background-color: ${COLORS.SHADES.OFFWHITE};
  border: none;
  border-radius: 20px;
  height: 40px;
  margin: 0 0 0 5px;
  width: 195px;
  outline: none;
`;
const TimeLimit = styled.div`
  margin: 8px;
`;
const Options = styled.div`
  margin: 8px;
`;
const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  padding-right: 2.5px;
  margin-bottom: 5px;
  background-color: ${COLORS.SHADES.OFFWHITE};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
`;
const OptionList = styled.ul`
  margin: 0 auto 20px auto;
  padding: 0;
  height: 140px;
  overflow-y: auto;
  padding: 10px;

  &::-webkit-scrollbar {
    background-color: ${COLORS.PURPLES.LIGHT};
    width: 5px;
    border-radius: 2.5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2.5px;
    background-color: ${COLORS.PURPLES.MAIN};
  }
`;
const Option = styled.p`
  background-color: ${COLORS.SHADES.OFFWHITE};
  height: 100%;
  width: 150px;
  margin: 0;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ShareText = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  padding: 5px;
`;
