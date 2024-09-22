import React from "react";
import styled from "styled-components";
import values from "../../assets/values.png";

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
      <div style={{padding: '50px 0px'}}>
        <div className="container">
          <div className="row">
            <div className="col align-self-center">
              <h2 style={{ fontSize: '4em', fontWeight: '500', margin: '0'}}>
                Bored Pitty Kennel Club Digital Collectibles
              </h2>
              <h2 style={{ fontSize: '7em', margin: '0'}}>5000</h2>
              <p style={{ fontSize: '2em', fontWeight: '550', margin: '0'}}>Unique Digital Collectibles</p>
              <p style={{ fontSize: '2em'}}>Living on the Solana Blockchain</p>
            </div>
            <div className="col align-self-center">
              <img src={values} alt="Bored Pitty Kennel Club values" />
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
