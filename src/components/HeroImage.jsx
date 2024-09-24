import React from "react";
import styled from "styled-components";
import heroLogo from "../assets/hero-logo.png";

const HeroImage = () => {
  return (
    <HeroImageContainer style={{ display: 'contents' }}>
      <img src={heroLogo} alt="Bored Pitty Kennel Club utility"></img>
    </HeroImageContainer>
  );
};

const HeroImageContainer = styled.div`
  width: 80%;

  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;

export default HeroImage;
