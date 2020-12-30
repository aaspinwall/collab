import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Timer from "../../../components/timer";
import Card from "../../../components/ui/card";
import { GET_ROOM_BY_ID } from "../../../components/polloTest/GetRoomData";
import { useLazyQuery } from "@apollo/client";
import { COLORS } from "../../../styles/colors";
import { useRouter } from "next/router";
import CheckboxForm from "../../../components/ui/form/checkbox";
import Head from "next/head";
import NameGenerator from "../../../components/userNames";

export default function VotingRoom() {
  const { query } = useRouter();
  // timerProps are passed to the Timer component to style the countdown animation
  const timerProps = {
    size: 250,
    strokeWidth: 15,
    circleOneStroke: `${COLORS.PURPLES.MAIN}`,
    circleTwoStroke: `${COLORS.PURPLES.LIGHT}`,
  };

  const [userName, setUserName] = useState(null);

  const [roomData, setRoomData] = useState(null);
  const [getRoomByID, { loading, data }] = useLazyQuery(GET_ROOM_BY_ID, {
    onCompleted: ({ roomByID: { roomData } }) => setRoomData(roomData),
  });

  useEffect(() => {
    setUserName(localStorage.getItem("name"));
    getRoomByID({ variables: { id: query.id } });
    console.log(roomData);
  }, [query]);

  if (!roomData) {
    return (
      <div>
        {/* We can add a loading icon, this is here while the data is fetched */}
        Waiting for data...
      </div>
    );
  }

  return (
    <Container>
      <Head>
        <title>Voting Room {`${query.id}`}!</title>
      </Head>
      <Header>Voting Page</Header>

      <Description>
        This page will be where the voting itself takes place
      </Description>
      {/* time has to be Number() as it is passed as a string */}
      {!userName ? (
        <NameGenerator
          content={{ title: "Welcome to", subtitle: query.id }}
          callback={(userName) => setUserName(userName)}
        />
      ) : (
        <Card>
          <h3 style={{ textAlign: "center" }}>{userName}</h3>
          <Timer
            key={Number(roomData.timeLimit)}
            time={Number(roomData.timeLimit)}
            onTimeIsUp={(message) => alert(message)}
            {...timerProps}
          />
          <CheckboxForm voteOptions={roomData.voteOptions} />
          <Link href="/" passHref>
            <LinkHome>Home</LinkHome>
          </Link>
        </Card>
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

const Header = styled.h1`
  color: white;
  text-align: center;
  margin-top: 0;
  padding-top: 15px;
  font-size: 3rem;
`;

const Description = styled.p`
  color: white;
  margin-left: 1rem;
`;

const LinkHome = styled.a`
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
