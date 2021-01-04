import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/colors";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TumblrShareButton,
  TumblrIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  WorkplaceShareButton,
  WorkplaceIcon,
} from "react-share";

export default function SocialMediaSharing() {
  const sharedURL = "www.WhateverURLWeWant.com/room/RoomID";
  const iconStyles = {
    border: `2px solid ${COLORS.PURPLES.MAIN}`,
    borderRadius: "50%",
  };

  return (
    <SocialMediaContainer>
      <FacebookShareButton url={sharedURL}>
        <FacebookIcon
          size={36}
          iconFillColor={COLORS.PURPLES.MAIN}
          bgStyle={{ fill: "none" }}
          style={iconStyles}
        />
      </FacebookShareButton>
      <FacebookMessengerShareButton url={sharedURL}>
        <FacebookMessengerIcon
          size={36}
          iconFillColor={COLORS.PURPLES.MAIN}
          bgStyle={{ fill: "none" }}
          style={iconStyles}
        />
      </FacebookMessengerShareButton>
      <EmailShareButton url={sharedURL}>
        <EmailIcon
          size={36}
          iconFillColor={COLORS.PURPLES.MAIN}
          bgStyle={{ fill: "none" }}
          style={iconStyles}
        />
      </EmailShareButton>
      <LinkedinShareButton url={sharedURL}>
        <LinkedinIcon
          size={36}
          iconFillColor={COLORS.PURPLES.MAIN}
          bgStyle={{ fill: "none" }}
          style={iconStyles}
        />
      </LinkedinShareButton>
      <PinterestShareButton url={sharedURL}>
        <PinterestIcon
          size={36}
          iconFillColor={COLORS.PURPLES.MAIN}
          bgStyle={{ fill: "none" }}
          style={iconStyles}
        />
      </PinterestShareButton>
      <RedditShareButton url={sharedURL}>
        <RedditIcon
          size={36}
          iconFillColor={COLORS.PURPLES.MAIN}
          bgStyle={{ fill: "none" }}
          style={iconStyles}
        />
      </RedditShareButton>
      <TumblrShareButton url={sharedURL}>
        <TumblrIcon
          size={36}
          iconFillColor={COLORS.PURPLES.MAIN}
          bgStyle={{ fill: "none" }}
          style={iconStyles}
        />
      </TumblrShareButton>
      <TwitterShareButton url={sharedURL}>
        <TwitterIcon
          size={36}
          iconFillColor={COLORS.PURPLES.MAIN}
          bgStyle={{ fill: "none" }}
          style={iconStyles}
        />
      </TwitterShareButton>
      <WhatsappShareButton url={sharedURL}>
        <WhatsappIcon
          size={36}
          iconFillColor={COLORS.PURPLES.MAIN}
          bgStyle={{ fill: "none" }}
          style={iconStyles}
        />
      </WhatsappShareButton>
      <WorkplaceShareButton url={sharedURL}>
        <WorkplaceIcon
          size={36}
          iconFillColor={COLORS.PURPLES.MAIN}
          bgStyle={{ fill: "none" }}
          style={iconStyles}
        />
      </WorkplaceShareButton>
    </SocialMediaContainer>
  );
}

const SocialMediaContainer = styled.div`
  width: 240px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, 40px);
  margin: 20px 0 30px 0;
`;
