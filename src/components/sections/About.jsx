import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Section id="about">
      <div style={{padding: '50px 0px', backgroundColor: 'black', color: 'white'}}>
        <div className="container">
          <h2>
            Our mission is to continuously provide value to the $PITTY community, and the Solana blockchain as whole, through the development of innovative technology and real-world business applications.
          </h2>
        </div>
      </div>
      <div style={{padding: '50px 0px' }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>
                Bored Pitty Kennel Club Digital Collectibles
                <span>5000</span>
              </h2>
              <p>Unique Digital Collectibles</p>
              <p>Living on the Solana Blockchain</p>
            </div>
            <div className="col">
              
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: white;
  color: black;
`;

export default About;
