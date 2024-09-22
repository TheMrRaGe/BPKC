import React from "react";
import styled from "styled-components";
import FooterBanner from "./FooterBanner";
import Logo from "./Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Section>
      <FooterBanner />
      <Container>
        <LeftContent>
          <Logo />
          <IconList>
            <a href="https://x.com/BoredPITTY" target="_blank" rel="noopener noreferrer" style={{ marginRight: '8px',  color: 'black' }}>
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </a>
            <a href="https://t.me/+y8Mk0hbTDVc1ZGJh" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} size="2x" style={{ marginRight: '8px',  color: 'black' }}/>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '8px',  color: 'black' }}>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </IconList>
        </LeftContent>

        <ListItems>
          <Item onClick={() => scrollTo("home")}>Home</Item>
          <Item onClick={() => scrollTo("about")}>About Us</Item>
          <Item onClick={() => scrollTo("utility")}>Utility</Item>
          <Item onClick={() => scrollTo("mint")}>NFT</Item>
          <Item onClick={() => scrollTo("team")}>Team</Item>
          <Item onClick={() => scrollTo("faqs")}>FAQs</Item>
        </ListItems>
      </Container>
      <Credits>
        <span>
          &copy;{new Date().getFullYear()} Bored Pitty Kennel Club. All Rights Reserved.
        </span>
      </Credits>
    </Section>
  );
};

const Credits = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: underline;
  }

  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;

    span {
      margin-bottom: 1rem;
    }
  }
`;

const Item = styled.li`
  width: fit-content;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

const ListItems = styled.ul`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 48em) {
    display: none;
  }
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 90%;

    h1 {
      font-size: ${(props) => props.theme.fontxxxl};
    }
  }
`;

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default Footer;
