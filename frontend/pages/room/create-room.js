import React, { createRef, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Layout from "../../components/layout";
import ADD_ROOM from "../../components/polloTest/CreateVoteOptions";
import { useMutation } from "@apollo/client";
export default function LandingPage() {
  // these are the options being set
  const [options, setOptions] = useState([]);
  const [addRoom] = useMutation(ADD_ROOM);
  // this is the individual option being set in the form that's pushed to the array of total options
  const individualOption = createRef(null);
  // Creates the room ID (Will be replaced by automated function)
  const createRoomID = createRef(null);
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
  // this adds the array of options to the database
  const submitRoom = () => {
    addRoom({
      variables: {
        name: createRoomName.current.value, // to change
        id: createRoomID.current.value, // we will generate this on backend
        timeLimit: createTimeLimit.current.value,
        voteOptions: options,
      },
    });
    console.log(
      createRoomName.current.value,
      createTimeLimit.current.value,
      options
    );
    // clears the List
    setOptions([]);
  };

  return (
    <Container>
      <Header>Create A Room Page</Header>
      <Description>
        This page will be used to create a room / have the configurations for
        the room
      </Description>
      <Link href="/">
        <Button>Home</Button>
      </Link>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          {/* Fix variable names */}
          {/* useRef for the two below input to validate variables: name, timelimit*/}
          <div>
            <label>
              Room Name
              <input type="text" placeholder="Room Name" ref={createRoomName} />
            </label>
          </div>
          <div>
            <label>
              Room ID (ex: 1A3E)
              <input type="text" placeholder="Room ID" ref={createRoomID} />
            </label>
          </div>
          <div>
            <label>
              {" "}
              Time limit (in seconds)
              <input
                type="number"
                placeholder="Time Limit in seconds"
                ref={createTimeLimit}
              />
            </label>
          </div>
          <div>
            <label>
              Add some options
              <input type="text" placeholder="Options" ref={individualOption} />
            </label>
          </div>
          <div>
            <input type="submit" value="Add Option" />
          </div>
          <button onClick={submitRoom}>Submit Room</button>
        </form>
      </FormContainer>
      <ul className="overflow">
        {options &&
          options.map((option, index) => (
            <li key={index}>
              <p>{option}</p>
            </li>
          ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  /* background-color: #eb5e28; */
  background: linear-gradient(to left top, #fff 50%, #eb5e28 50%);
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  .overflow {
    width: 200px;
    overflow: auto;
    list-style-type: none;
  }
`;

const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: ghostwhite;
    padding: 25px;
    margin: 15px;
    border-radius: 10px;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5);
  }
  div {
    margin: 8px;
  }
  input {
    width: 200px;
    margin-top: 5px;
  }
  input,
  label {
    display: block;
    padding: 5px;
  }
  label {
    font-weight: bold;
  }
`;

const Header = styled.h1`
  color: #293241;
  text-align: center;
  margin-top: 0;
  padding-top: 15px;
  font-size: 2rem;
`;

const Description = styled.p`
  color: #293241;
  margin-left: 1rem;
`;

const Button = styled.button`
  margin-top: 15px;
  padding: 8px;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 2px;
  border: 3px solid #293241;
  cursor: pointer;
  &:active {
    background: #e5e5e5;
    box-shadow: inset 0px 0px 5px #c1c1c1;
    outline: none;
    transform: scale(0.9);
  }
`;
