import React, { createRef, useState } from "react";
import Link from "next/link";
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
      <Header>Create A Room Page</Header>
      <Description>
        This page will be used to create a room / have the configurations for
        the room
      </Description>
      <Link href="/" passHref>
        <Anchor>Home</Anchor>
      </Link>
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

const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.85);
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
    font-size: 1.6rem;
  }
`;

const Header = styled.h1`
  color: ${COLORS.SHADES.OFFWHITE};
  text-align: center;
  margin-top: 0;
  padding-top: 15px;
  font-size: 2rem;
`;

const Description = styled.p`
  color: ${COLORS.SHADES.OFFWHITE};
  margin-left: 1rem;
`;

const Anchor = styled.a`
  margin-top: 15px;
  padding: 8px;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 2px;
  border: 3px solid ${COLORS.MAINDARKGREY};
  cursor: pointer;
  &:active {
    background: #e5e5e5;
    box-shadow: inset 0px 0px 5px #c1c1c1;
    outline: none;
    transform: scale(0.9);
  }
`;
