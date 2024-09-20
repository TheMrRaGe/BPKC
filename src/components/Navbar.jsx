import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [click, setClick] = useState(false);

  //Handles the scroll to each section
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };

  return (
    <Section id="navbar">
      <Nav>
        <Logo />
        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>
        <Menu click={click}>
          <ListItem onClick={() => scrollTo("home")}>Home</ListItem>
          <ListItem onClick={() => scrollTo("about")}>About Us</ListItem>
          <ListItem onClick={() => scrollTo("roadmap")}>Utility</ListItem>
          {/* <ListItem onClick={() => scrollTo("showcase")}>Art</ListItem> */}
          {/* <ListItem onClick={() => scrollTo("team")}>Team</ListItem> */}
          <ListItem onClick={() => scrollTo("faqs")}>FAQs</ListItem>
          <ListItem>
            <div className="mobile">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '8px' }}>
                <FontAwesomeIcon icon={faXTwitter} size="2x" />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTelegram} size="2x" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '8px' }}>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <Button
                text="Connect Wallet"
                link="/"
              />
              <Button
                text="Mint"
                link="/"
              />
            </div>
          </ListItem>
        </Menu>
        <div className="desktop">
          <div>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '8px' }}>
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '8px' }}>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
          <Button
            text="Connect Wallet"
            link="/"
          />
          <Button
            text="Mint"
            link="/"
          />
        </div>
      </Nav>
    </Section>
  );
};

const HamburgerMenu = styled.div`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background-color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${(props) =>
    props.click
      ? `translateX(-50%) rotate(90deg)`
      : `translateX(-50%) rotate(0)`};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  display: none;

  @media (max-width: 64em) {
    /* 1024px */
    display: flex;
  }

  &::before,
  &::after {
    content: "";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0")};
    background-color: ${(props) => props.theme.text};
    position: absolute;
  }

  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? `rotate(-40deg)` : `rotate(0)`)};
  }

  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? `rotate(40deg)` : `rotate(0)`)};
  }
`;

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;

  .desktop {
    display: flex;
    align-items: center;
  }

  .desktop button,a {
    margin-left: 5px;
  }

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    .desktop {
      display: none;
    }

    .mobile {
      display: inline-block;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 64em) {
    /* 1024px */
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.85)`};
    flex-direction: column;
    justify-content: center;
    backdrop-filter: blur(2px);
    transform: ${(props) =>
      props.click ? `translateY(0)` : `translateY(1000%)`};
    transition: all 0.3s ease;
    touch-action: none;
  }
`;

const ListItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
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

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
  }
`;
export default Navbar;
