import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { COLORS } from "../../styles/colors";
import CreateRoomForm from "../../components/CreateRoomForm";

export default function CreateRoomPage() {
  return (
    <Container>
      <Head>
        <title>Create A Room!</title>
      </Head>
      <Header>Create Your Room</Header>
      <CreateRoomForm />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  .overflow {
      width: 200px;
      max-height: 100px;
      overflow: auto;
      list-style-type: none;
      border: 1px solid black;
      border-radius: 8px;
      box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.3);
      padding: 5px 8px;
      text-align: center;
    };
  };
  .each-option {
      border-bottom: 1px solid black;
      &:last-child {
      border-bottom: none;
    };
  };
  `;

const Header = styled.h1`
  color: ${COLORS.SHADES.OFFWHITE};
  text-align: center;
  margin-top: 0;
  padding-top: 15px;
  font-size: 2rem;
`;
