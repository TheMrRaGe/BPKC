import React from "react";
import styled from "styled-components";
import heroLogo from "../assets/hero-logo.png";

const CoverVideo = () => {
  return (
    <VideoContainer style={{ display: 'contents' }}>
      <img src={heroLogo} alt="Bored Pitty Kennel Club hero image"></img>
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  width: 80%;

  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;

export default CoverVideo;
