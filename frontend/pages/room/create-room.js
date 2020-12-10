import React, { createRef, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Layout from "../../components/layout";
import ADD_ROOM from "../../components/polloTest/CreateVoteOptions";
import { useMutation } from "@apollo/client";
export default function LandingPage() {
  const [options, setOptions] = useState([]);
  const [addRoom] = useMutation(ADD_ROOM);

  const optionData = createRef(null);
  const optionsPush = () => {
    setOptions([optionData.current.value, ...options]);
    optionData.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    optionsPush();
  };

  const submitRoom = () => {
    addRoom({
      variables: {
        name: "Testing Room", // to change
        id: "123", // we will generate this on backend
        timeLimit: "500",
        voteOptions: options,
      },
    });
  };

  return (
    <Layout title="Create A Room">
      <Container>
        <Header>Create A Room Page</Header>
        <Description>
          This page will be used to create a room / have the configurations for
          the room
        </Description>
        <Link href="/landing">
          <Button>Home</Button>
        </Link>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            {/* Fix variable names */}
            {/* useRef for the two below input to validate variables: name, timelimit*/}
            {/* <input type="text" placeholder="Room Name" />
            <input type="number" placeholder="Time Limit in seconds" /> */}

            <input type="text" placeholder="Options" ref={optionData} />
            <input type="submit" />
          </form>
          <div>
            {options.map((option) => (
              <p>{option}</p>
            ))}
          </div>
          <button onClick={submitRoom}>Submit Room</button>
        </FormContainer>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  /* background-color: #eb5e28; */
  background: linear-gradient(to left top, #fff 50%, #eb5e28 50%);
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FormContainer = styled.div``;

const Header = styled.h1`
  color: #293241;
  text-align: center;
  margin-top: 0;
  padding-top: 15px;
  font-size: 3rem;
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
