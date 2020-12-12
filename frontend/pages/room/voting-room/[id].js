import { useEffect, useState } from 'react';
import Link from "next/link";
import styled from "styled-components";
import Layout from "../../../components/layout";
import Timer from "../../../components/timer";
import UserForm from '../../../components/UserForm';
import { GET_ROOM_BY_ID } from '../../../components/polloTest/GetRoomData';
import { useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router'

export default function VotingRoom() {
  const { query } = useRouter();

  const [roomData, setRoomData] = useState(null);
  const [getRoomByID, { loading, data }] = useLazyQuery(GET_ROOM_BY_ID, {
    onCompleted: ({ roomByID: { roomData } }) => setRoomData(roomData)
  });

  useEffect(() => {
    getRoomByID({ variables: { id: query.id } });
  }, [query]);

  return (
    <Layout title='Now Voting!'>
      <Container>
        <Header>Voting Page</Header>
        {/* Time should be based of roomData.timeLimit **********/ }
        <Timer key={200} onTimeIsUp={(message) => alert(message)} />

        <Description>
          This page will be where the voting itself takes place
        </Description>
        {roomData && roomData.voteOptions.map((option, id) => {

          // TODO: options.length return a checkbox in a form for each one
          return (
            <div key={`vote-option-${id}`}>
              <span>{option}</span>
            </div>
          )
        })}
        <Link href='/landing'>
          <Button>Home</Button>
        </Link>
      </Container>
      <UserForm />
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
