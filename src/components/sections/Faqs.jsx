import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";

const Faqs = () => {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      bottom: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    });
    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="faqs">
      <Title>FAQs</Title>
      <Container>
        <Box>
          <Accordion title="WHAT IS BPKC (BORED PITTY KENNEL CLUB)? ">
          BPKC (BORED PITTY KENNEL CLUB) started as a meme coin deployed on the Solana blockchain via the pump.fun platform. Although it was initially a research and development project for the current dev team, it quickly gained traction and is here to stay. On top of the coin sits various utility detailed in the <a href="#utility">Utility</a> section.
          </Accordion>
          <Accordion title="HOW DO I PURCHASE $PITTY OR BPKC NFTs?">
            $PITTY tokens are most popularly purchased through the Phantom wallet. Some other platforms/options include: <a href="https://dexscreener.com/solana/b195fs89ssbjtkucyfnodyg1hcfhrruvdv57hxvaeplc" target="_blank" rel="noreferrer">Dexscreener</a>.<br /><br />
            BPKC NFTs have been minted out can be purchased on secondary markets including: <a href="https://opensea.io/collection/bored-pitty-kennel-club" target="_blank" rel="noreferrer">OpenSea</a>, <a href="https://magiceden.us/marketplace/bored_pitty_kennel_club" target="_blank" rel="noreferrer">Magic Eden</a>, <a href="https://www.tensor.trade/trade/bored_pitty_kennel_club" target="_blank" rel="noreferrer">Tensor</a>
          </Accordion>
        </Box>
        <Box>
          <Accordion title="WHY SHOULD I PURCHASE $PITTY AND/OR NFTs?">
            We believe in rewarding our community for their loyalty by giving them exclusive access to our trading bot(s), airdrops for holding our BPKC NFTs, and doing giveaways to boost community morale. 
          </Accordion>
          <Accordion title="WHAT IS THE LONG-TERM GOAL FOR THIS PROJECT?">
            The long-term goal of this project is to create a sustainable ecosystem around the $PITTY token and BPKC NFTs.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: white;
  color: black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  font-weight: 500;
  color: black;
  margin: 1rem auto;
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *::last-child {
      & > *::first-child {
        margin-top: 0;
      }
    }
  }
`;

const Box = styled.div`
  width: 45%;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

export default Faqs;
