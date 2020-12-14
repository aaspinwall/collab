import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Timer from "../../../components/timer";
import { GET_ROOM_BY_ID } from "../../../components/polloTest/GetRoomData";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CheckboxForm from "../../../components/ui/form/checkbox";

export default function VotingRoom() {
  const { query } = useRouter();

  const [roomData, setRoomData] = useState(null);
  const [getRoomById, { loading, data }] = useLazyQuery(GET_ROOM_BY_ID, {
    onCompleted: ({ roomById: { roomData } }) => setRoomData(roomData),
  });

  useEffect(() => {
    getRoomById({ variables: { id: query.roomId } });
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
      <Header>Voting Page</Header>

      <Description>
        This page will be where the voting itself takes place
      </Description>
      {/* time has to be Number() as it is passed as a string */}
      <Timer
        key={200}
        time={Number(roomData.timeLimit)}
        onTimeIsUp={(message) => alert(message)}
      />
      <CheckboxForm voteOptions={roomData.voteOptions} />
      <Link href="/">
        <Button>Home</Button>
      </Link>
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
`;

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
