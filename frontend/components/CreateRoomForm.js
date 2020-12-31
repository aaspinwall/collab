import React, { createRef, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Card from "../components/ui/card";
import CopyToClipboard from "../components/ui/copytoclipboard";
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
} from "../styles/button";

export default function CreateRoomForm() {
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
  const createOptionsArray = () => {
    setOptions([individualOption.current.value, ...options]);
    individualOption.current.value = "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createOptionsArray();
  };
  const handleRemoveOption = (event, index) => {
    event.preventDefault();
    const updatedOptions = options.filter((option, id) => id !== index);
    setOptions(updatedOptions);
  };
  // this adds the array of options to the database
  const submitRoom = async () => {
    const res = await addRoom({
      variables: {
        name: createRoomName.current.value, // to change
        id: placeholderRoomID, // being generated on the backend -> taking it out throws a zillion errors
        timeLimit: createTimeLimit.current.value,
        voteOptions: options,
      },
    });

    const { success, message, room } = res.data.addRoom;

    // clears the List
    if (success) {
      setCreated(true);
      setRoomId(room.id);
      setOptions([]);
    } else {
      alert(message);
    }
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        {/* Fix variable names */}
        {/* useRef for the two below input to validate variables: name, timelimit*/}
        <RoomName>
          <Label>
            Room Name
            <Input type="text" placeholder="Room Name" ref={createRoomName} />
          </Label>
        </RoomName>
        <TimeLimit>
          <Label>
            Time limit (in seconds)
            <Input
              type="number"
              placeholder="Time Limit"
              ref={createTimeLimit}
            />
          </Label>
        </TimeLimit>
        <Options>
          <Label>
            Add some options
            <AddOptionContainer>
              <OptionInput
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
      {created && (
        <div>
          <Card>
            <div>Share with your friends</div>
            <CopyToClipboard
              text={`${location.origin}/room/voting-room/${roomId}`}
            />
            <Boop rotation={15}>
              <Link href={`/room/voting-room/${roomId}`}>
                <Button styles={TakeMeToVoteStyles}>
                  Take Me To The Vote!
                </Button>
              </Link>
            </Boop>
          </Card>
        </div>
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
const RoomName = styled.div``;
const Label = styled.label`
  text-align: center;
  font-weight: bold;
  font-size: 1.6rem;
  display: block;
  padding: 5px;
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
`;
const AddOptionContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 5px;
  background-color: ${COLORS.SHADES.OFFWHITE};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  height: 40px;
  width: 240px;
`;
const OptionInput = styled.input`
  background-color: ${COLORS.SHADES.OFFWHITE};
  border: none;
  border-radius: 20px;
  height: 40px;
  margin: 0 0 0 5px;
  width: 195px;
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
  padding-right: 5px;
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
