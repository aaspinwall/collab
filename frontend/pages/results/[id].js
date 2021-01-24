import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Card from "../../components/ui/card";
import { GET_RESULTS } from "../../components/polloTest/GetRoomData";
import { useLazyQuery } from "@apollo/client";
import { COLORS } from "../../styles/colors";
import { useRouter } from "next/router";
import Head from "next/head";

export default function VotingRoom() {
  const { query } = useRouter();
  // timerProps are passed to the Timer component to style the countdown animation
  const [roomData, setRoomData] = useState(null);
  const [roomResults, { loading, data }] = useLazyQuery(GET_RESULTS, {
    onCompleted: ({ roomByID: { roomData } }) => setRoomData(roomData),
  });

  useEffect(() => {
    roomResults({ variables: { id: query.id } });
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

  const { id, name, voteOptions, voters } = roomData;

  return (
    <Container>
      <Head>
        <title>Voting Room {`${query.id}`}!</title>
      </Head>
      <Header>{`Results for ${name}`}</Header>

      <Description>Results page</Description>
      <Card>
        <h3>Options submitted</h3>
        <h3>
          {voteOptions.map((option, i) => (
            <p key={`option-${i}`}>{option}</p>
          ))}
        </h3>
      </Card>
      <Card>
        <h4>Who voted?</h4>
        {voters.map((voter, i) => (
          <div key={`voteropts-${i}`}>
            {`${voter.name} voted for `}
            <span>{voter.voteData}</span>
          </div>
        ))}
      </Card>
      <Card>
        <h1>The winner is</h1>
        <p>do your magic with the code</p>
      </Card>
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
