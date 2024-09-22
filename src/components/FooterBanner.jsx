import React from "react";
import styled from "styled-components";

import img1 from "../assets/Nfts/1.png";
import img2 from "../assets/Nfts/2.png";
import img3 from "../assets/Nfts/3.png";
import img4 from "../assets/Nfts/4.png";
import img5 from "../assets/Nfts/5.png";
import img6 from "../assets/Nfts/6.png";
const FooterBanner = () => {
  return (
    <Section>
      <ImgContainer>
        <img src={img1} alt="Bored Pitty Kennel Club" />
        <img src={img2} alt="Bored Pitty Kennel Club" />
        <img src={img3} alt="Bored Pitty Kennel Club" />
        <img src={img4} alt="Bored Pitty Kennel Club" />
        <img src={img5} alt="Bored Pitty Kennel Club" />
        <img src={img6} alt="Bored Pitty Kennel Club" />
      </ImgContainer>
      {/* <Title>
        Join the <br /> Club
      </Title>
      <BtnContainer>
        <JoinNow>Join Now</JoinNow>
      </BtnContainer> */}
    </Section>
  );
};

const Section = styled.div`
  width: 100vw;
  height: 25rem;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => `rgba(0,0,0, 0.9)`};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 15rem;
    height: auto;
  }

  @media (max-width: 48em) {
    img {
      width: 10rem;
      height: auto;
    }
  }
`;

// const Title = styled.h1`
//   font-size: ${(props) => props.theme.fontxxxl};
//   font-weight: 500;
//   text-transform: capitalize;
//   color: ${(props) => props.theme.body};
//   text-shadow: 1px 1px 2px ${(props) => props.theme.text};
//   padding: 1rem 2rem;
//   z-index: 10;
//   width: 35%;

//   @media (max-width: 64em) {
//     font-size: ${(props) => props.theme.fontxxl};
//     width: 40%;
//     text-align: center;
//   }

//   @media (max-width: 48em) {
//     font-size: ${(props) => props.theme.fontxl};
//     width: 100%;
//     padding: 2rem 0;
//   }
// `;

export default FooterBanner;
