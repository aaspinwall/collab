import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";
import { COLORS } from "../../styles/colors";

export default function InviteYourFriends() {
  return (
    <Container>
      <Head>
        <title>Invite Your Friends!</title>
      </Head>
      <FormContainer>
        <Header>Invite Your Friends</Header>
        <p>Link</p>
        <button>Copy</button>
        <p>or</p>
        <p>Share to social media</p>
        <SocialMediaContainer>
          <Link href={"/"}>Instagram</Link>
          <Link href={"/"}>Facebook</Link>
          <Link href={"/"}>Twitter</Link>
          <Link href={"/"}>LinkedIn</Link>
          <Link href={"/"}>What's App</Link>
          <Link href={"/"}>Snapchat</Link>
          <Link href={"/"}>Reddit</Link>
        </SocialMediaContainer>
        <button>Go To Voting</button>
      </FormContainer>
    </Container>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 25px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5);
`;
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
  color: ${COLORS.SHADES.BLACK};
  text-align: center;
  margin-top: 0;
  padding-top: 15px;
  font-size: 2rem;
`;
const SocialMediaContainer = styled.div``;
