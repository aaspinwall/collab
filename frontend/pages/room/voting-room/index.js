import Head from "next/head";
import { useEffect, useState, createRef } from "react";
import Link from "next/link";
import Card from "../../../components/ui/card";
import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export default function VotingRoomEmpty() {
  const [roomID, setRoomID] = useState("");
  const onChange = (e) => {
    e.persist();
    setRoomID(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Voting Room Not Found</title>
      </Head>
      <Container>
        <Card>
          <h2>RoomID missing</h2>
          <span>Please enter your Voting Room ID here</span>
          <input type="text" onChange={onChange} />
          <Link href={`voting-room/${roomID}`}>
            <a>Submit</a>
          </Link>
        </Card>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  height: 60%;
  justify-content: center;
  flex-direction: column;
  input {
    padding: 5px 10px;
    margin: 15px 0;
  }
  h2 {
    font-size: 2rem;
    margin: 15px 0 0;
  }
  span {
    font-style: italic;
    font-size: 1.5rem;
  }
  a {
    border: 1px solid ${COLORS.PURPLES.MAIN};
    border-radius: 8px;
    background: ${COLORS.PURPLES.MAIN};
    padding: 8px 16px;
    text-align: center;
    width: 50%;
    margin: 0 auto;
    color: white;
    font-size: 15px;
    letter-spacing: 1.5px;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.4);
    &:active {
      background-color: ${COLORS.PURPLES.LIGHT};
      color: ${COLORS.PURPLES.MAIN};
      transform: scale(0.95);
    }
  }
`;
