import { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import Link from "next/link";
import styled from "styled-components";

import Timer from "../../../components/timer";
import Card from "../../../components/ui/card";
import { GET_ROOM_BY_ID } from "../../../components/polloTest/GetRoomData";
import { DELETE_VOTING_ROOM } from "../../../components/polloTest/DeleteRoom";
import { COLORS } from "../../../styles/colors";
import { useRouter } from "next/router";
import CheckboxForm from "../../../components/ui/form/checkbox";
import Head from "next/head";
import NameGenerator from "../../../components/userNames";

export default function VotingRoom() {
  const { query } = useRouter();
  const [deleteVotingRoom] = useMutation(DELETE_VOTING_ROOM);
  const [userName, setUserName] = useState(null);
  const [canVote, setCanVote] = useState(true);

  const [roomData, setRoomData] = useState(null);
  const [getRoomByID, { loading, data }] = useLazyQuery(GET_ROOM_BY_ID, {
    onCompleted: ({ roomByID: { roomData } }) => setRoomData(roomData),
  });

  useEffect(() => {
    if (!canVote) {
      deleteVotingRoom({
        variables: {
          id: query.id,
        },
      });
      alert("This voting room is closed");
    }
  }, [canVote]);

  useEffect(() => {
    setUserName(localStorage.getItem("name"));
    getRoomByID({ variables: { id: query.id } });
    console.log(roomData);
  }, [query]);

  // timerProps are passed to the Timer component to style the countdown animation
  const timerProps = {
    size: 250,
    strokeWidth: 15,
    circleOneStroke: `${COLORS.PURPLES.MAIN}`,
    circleTwoStroke: `${COLORS.PURPLES.LIGHT}`,
  };

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
            onTimeIsUp={() => setCanVote(false)}
            {...timerProps}
          />
          <CheckboxForm roomID={query.id} voteOptions={roomData.voteOptions} />
          <Links>
            <Link href={`/results/${query.id}`} passHref>
              <LinkHome>Results</LinkHome>
            </Link>
            <Link href={`/`} passHref>
              <LinkHome>Home</LinkHome>
            </Link>
          </Links>
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

const LinkHome = styled.a`
  margin-top: 15px;
  padding: 8px;
  font-weight: bold;
  letter-spacing: 2px;
  border: 2px solid ${COLORS.PURPLES.MAIN};
  color: ${COLORS.PURPLES.MAIN};
  cursor: pointer;
  flex: 1;
  text-align: center;
  transition: all 0.2s;

  &:active {
    background: #e5e5e5;
    box-shadow: inset 0px 0px 5px #c1c1c1;
    outline: none;
    transform: scale(0.9);
  }
  &:hover {
    flex: 3;
    background-color: ${COLORS.PURPLES.MAIN};
    color: ${COLORS.SHADES.OFFWHITE};
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;

  ${LinkHome}:first-of-type {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right: none;
  }
  ${LinkHome}:last-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
