import React from "react";
import styled from "styled-components";
import values from "../../assets/values.png";
import video from "../../assets/Nfts/pitty-nfts.mov";

const About = () => {
  return (
    <Section id="about">
      <div style={{padding: '50px 0px', backgroundColor: 'black', color: 'white'}}>
        <div className="container">
          <h2>
            Our mission is to create a culture of success through education, the development of innovative technology, and rewarding our community.
          </h2>
        </div>
      </div>
      <div style={{padding: '50px 0px'}}>
        <div className="container">
          <div className="row">
            <div className="col align-self-center">
            <video src={video} width="100%" autoplay="true" muted="true" loop="true" />
            </div>
            <div className="col align-self-center text-center">
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
