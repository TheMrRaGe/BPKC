import React from "react";
import styled from "styled-components";
import values from "../../assets/values.png";
import video from "../../assets/Nfts/pitty-nfts.mov";

const About = () => {
  return (
    <Section id="about">
      <div style={{padding: '50px 0px', backgroundColor: 'black', color: 'white'}}>
        <div className="container">
          <h2 style={{ fontWeight: '500' }}>
            Our mission is to create a culture of success through education, the development of innovative technology, and rewarding our community.
          </h2>
        </div>
      </div>
      <div style={{padding: '50px 0px'}}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 align-self-center">
              <video src={video} width="100%" autoPlay muted loop />
            </div>
            <div className="col-12 col-md-6 text-center">
              <div className="row align-items-center">
                <div className="col-2">
                  <p style={{ fontSize: '5rem'}}>P</p>
                </div>
                <div className="col-10 text-start">
                  <b>Persistence</b>
                  <p style={{ margin: '0' }}>We consistently push the envelope inside and outside the community to grow despite any setbacks we may face.</p>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-2">
                  <p style={{ fontSize: '5rem'}}>I</p>
                </div>
                <div className="col-10 text-start">
                  <b>Innovation</b>
                  <p style={{ margin: '0' }}>We utilize our collective consciousness to innovate and create new standards for communities in Web3.</p>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-2">
                  <p style={{ fontSize: '5rem'}}>T</p>
                </div>
                <div className="col-10 text-start">
                  <b>Technology</b>
                  <p style={{ margin: '0' }}>We create tools & applications proprietary to the $PITTY community, as well as public-facing applications for added project revenue and community rewards.</p>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-2">
                  <p style={{ fontSize: '5rem'}}>T</p>
                </div>
                <div className="col-10 text-start">
                  <b>Tactfulness</b>
                  <p style={{ margin: '0' }}>We operate strategically in the interest of our community and move within the current meta(s) while maintaining an edge.</p>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-2">
                  <p style={{ fontSize: '5rem'}}>Y</p>
                </div>
                <div className="col-10 text-start">
                  <b>You-First Community</b>
                  <p style={{ margin: '0' }}>We operate with the community at the forefront of every decision made. The culture that we create is based on diversity and family dynamics.</p>
                </div>
              </div>
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
