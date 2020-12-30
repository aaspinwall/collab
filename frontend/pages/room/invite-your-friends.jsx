import React, { useRef, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { COLORS } from "../../styles/colors";
import SocialMediaSharing from "../../components/SocialMediaSharing";
import Button from "../../components/ui/sample_button";
import { GoToVotingStyles, CopyLinkStyles } from "../../styles/button";

export default function InviteYourFriends() {
  const [copySuccess, setCopySuccess] = useState(false);
  const textToCopyRef = useRef(null);

  const copyToClipboard = (ev) => {
    ev.preventDefault();

    const newTextArea = document.createElement("textarea");

    newTextArea.value = textToCopyRef.current.innerText;

    document.body.appendChild(newTextArea);

    newTextArea.select();

    document.execCommand("copy");

    document.body.removeChild(newTextArea);

    setCopySuccess(true);
  };

  return (
    <Container>
      <Head>
        <title>Invite Your Friends!</title>
      </Head>
      <FormContainer>
        <Header>
          Invite Your
          <br />
          Friends
        </Header>
        <GeneratedLink ref={textToCopyRef}>Link</GeneratedLink>
        <Button
          children={copySuccess ? "Copied!" : "Copy"}
          styles={CopyLinkStyles}
          onClick={copyToClipboard}
        />
        <GenericMessage>
          or
          <br />
          share to social media
        </GenericMessage>
        <SocialMediaSharing />
        <Button
          children={"Go To Voting"}
          styles={GoToVotingStyles} /* onClick={} */
        />
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
`;

const Header = styled.h1`
  color: ${COLORS.SHADES.BLACK};
  text-align: center;
  margin: 0 0 30px;
  padding-top: 15px;
  font-size: 2rem;
  text-transform: uppercase;
`;
const GeneratedLink = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.5em;
  border-radius: 20px;
  width: 100%;
  height: 40px;
  margin: 20px 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  background-color: ${COLORS.SHADES.OFFWHITE};
  color: ${COLORS.SHADES.BLACK};
  transition: all 0.2s ease-in-out;
`;
const GenericMessage = styled.p`
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
`;
