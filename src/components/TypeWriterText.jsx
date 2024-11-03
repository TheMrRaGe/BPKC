import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";
import whitepaper from "../assets/whitepaper-v1.pdf";

const TypeWriterText = () => {
  return (
    <>
      <Title>
        <p style={{ color: 'black' }}>A Kennel of Blockchain Utility </p>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class="text-1">Trading Bots</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-2">NFTs</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-3">Community Rewards</span>`)
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      {/* <Subtitle>Bored of the average pump'n'dump? Join us in changing how Solana coins serve their communities!</Subtitle> */}
      <Subtitle>Changing how Solana tokens serve their communities!</Subtitle>
      <ButtonContainer style={{ marginBottom: '50px'}}>
        <Button text="Our Utility" link="#utility"/>
        <Button text="White Paper" link={whitepaper} style={{ marginTop: '10px !important' }}/>
      </ButtonContainer>
    </>
  );
};

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  font-weight: 500;
  width: 80%;
  color: black;
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: monospace;
  }

  .text {
    &-1 {
      color: lightseagreen;
    }
    &-2 {
      color: goldenrod;
    }
    &-3 {
      color: orangered;
    }
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }

  @media (max-width: 40em) {
    width: 90%;
  }
`;

const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => `rgba(${props.theme.Rgba}, 0.6)`};
  line-height: 2rem;
  margin-bottom: 1rem;
  font-weight: 500;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }

  button {
    margin-right: 10px;
    margin-top: 10px;
  }
`;
export default TypeWriterText;
