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

export default function SocialMediaSharing({ url }) {
  const iconStyles = {
    border: `2px solid ${COLORS.PURPLES.MAIN}`,
    borderRadius: "50%",
  };

  return (
    <SocialMediaContainer>
      <FacebookShareButton url={url}>
        <FacebookIcon
          size={36}
          iconFillColor={COLORS.PURPLES.MAIN}
          bgStyle={{ fill: "none" }}
          style={iconStyles}
        />
      </FacebookShareButton>
      <FacebookMessengerShareButton url={url}>
        <FacebookMessengerIcon
          size={36}
          iconFillColor={COLORS.PURPLES.MAIN}
          bgStyle={{ fill: "none" }}
          style={iconStyles}
        />
      </FacebookMessengerShareButton>
      <EmailShareButton url={url}>
        <EmailIcon
          size={36}
          iconFillColor={COLORS.PURPLES.MAIN}
          bgStyle={{ fill: "none" }}
          style={iconStyles}
        />
      </EmailShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon
          size={36}
          iconFillColor={COLORS.PURPLES.MAIN}
          bgStyle={{ fill: "none" }}
          style={iconStyles}
        />
      </LinkedinShareButton>
      <PinterestShareButton url={url}>
        <PinterestIcon
          size={36}
          iconFillColor={COLORS.PURPLES.MAIN}
          bgStyle={{ fill: "none" }}
          style={iconStyles}
        />
      </PinterestShareButton>
      <RedditShareButton url={url}>
        <RedditIcon
          size={36}
          iconFillColor={COLORS.PURPLES.MAIN}
          bgStyle={{ fill: "none" }}
          style={iconStyles}
        />
      </RedditShareButton>
      <TumblrShareButton url={url}>
        <TumblrIcon
          size={36}
          iconFillColor={COLORS.PURPLES.MAIN}
          bgStyle={{ fill: "none" }}
          style={iconStyles}
        />
      </TumblrShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon
          size={36}
          iconFillColor={COLORS.PURPLES.MAIN}
          bgStyle={{ fill: "none" }}
          style={iconStyles}
        />
      </TwitterShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon
          size={36}
          iconFillColor={COLORS.PURPLES.MAIN}
          bgStyle={{ fill: "none" }}
          style={iconStyles}
        />
      </WhatsappShareButton>
      <WorkplaceShareButton url={url}>
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
