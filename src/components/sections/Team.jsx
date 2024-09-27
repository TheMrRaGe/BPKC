import React from "react";
import styled from "styled-components";
import doug from "../../assets/Team/doulas-slayton.png";
import jacob from "../../assets/Team/jacob-juszkowski.png";
import heath from "../../assets/Team/heath-dale.png";
import jon from "../../assets/Team/jonathan-mccarron.png";
import lefty from "../../assets/Team/lefty.png";
import cashmoneyhoney from "../../assets/Team/cashmoney-honey.png";
import andrew from "../../assets/Team/andrew.png";
import davin from "../../assets/Team/davin.png";
import robin from "../../assets/Team/robin.png";
import jay from "../../assets/Team/jay.png";
import chris from "../../assets/Team/chris.png";
import dave from "../../assets/Team/dave.png";
import uber from "../../assets/Team/uber.png";

const Team = () => {
    return (
        <Section id="team">
            <div style={{padding: '50px 0px' }}>
                <div className="container">
                    <div class="row section-heading justify-content-center text-center wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDuration: '0.3s', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                        <div>
                            <Title>Our Team</Title>
                            <p>Our team of Web3 developers excel in blockchain innovation. We combine technical skill with professional expertise to create groundbreaking, decentralized digital solutions.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm my-3">
                            <div class="hover-top-in text-center">
                                <div class="overflow-hidden z-index-1 position-relative px-5"><img class="rounded-circle border border-5 border-white shadow" src={doug} title="" alt="" /></div>
                                <div class="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in" style={{ color: 'black'}}>
                                    <h6 class="fw-700 mb-1">Douglas Slayton</h6><small>Founder / CEO</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm my-3">
                            <div class="hover-top-in text-center">
                                <div class="overflow-hidden z-index-1 position-relative px-5"><img class="rounded-circle border border-5 border-white shadow" src={jacob} title="" alt="" /></div>
                                <div class="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in" style={{ color: 'black'}}>
                                    <h6 class="fw-700 mb-1">Jacob Juszkowski</h6><small>Co-Founder / CTO</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm my-3">
                            <div class="hover-top-in text-center">
                                <div class="overflow-hidden z-index-1 position-relative px-5"><img class="rounded-circle border border-5 border-white shadow" src={andrew} title="" alt="" /></div>
                                <div class="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in" style={{ color: 'black'}}>
                                    <h6 class="fw-700 mb-1">Andrew Maclean</h6><small>Chief Marketing Officer</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm my-3">
                            <div class="hover-top-in text-center">
                                <div class="overflow-hidden z-index-1 position-relative px-5"><img class="rounded-circle border border-5 border-white shadow" src={robin} title="" alt="" /></div>
                                <div class="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in" style={{ color: 'black'}}>
                                    <h6 class="fw-700 mb-1">Robin Chadwell</h6><small>The Architect</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm my-3">
                            <div class="hover-top-in text-center">
                                <div class="overflow-hidden z-index-1 position-relative px-5"><img class="rounded-circle border border-5 border-white shadow" src={heath} title="" alt="" /></div>
                                <div class="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in" style={{ color: 'black'}}>
                                    <h6 class="fw-700 mb-1">Heath Dale</h6><small>Software Developer</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm my-3">
                            <div class="hover-top-in text-center">
                                <div class="overflow-hidden z-index-1 position-relative px-5"><img class="rounded-circle border border-5 border-white shadow" src={jay} title="" alt="" /></div>
                                <div class="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in" style={{ color: 'black'}}>
                                    <h6 class="fw-700 mb-1">Jay Vince</h6><small>Software Developer</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm my-3">
                            <div class="hover-top-in text-center">
                                <div class="overflow-hidden z-index-1 position-relative px-5"><img class="rounded-circle border border-5 border-white shadow" src={lefty} title="" alt="" /></div>
                                <div class="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in" style={{ color: 'black'}}>
                                    <h6 class="fw-700 mb-1">Lefty Calls</h6><small>Lead Community Manager</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm my-3">
                            <div class="hover-top-in text-center">
                                <div class="overflow-hidden z-index-1 position-relative px-5"><img class="rounded-circle border border-5 border-white shadow" src={jon} title="" alt="" /></div>
                                <div class="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in" style={{ color: 'black'}}>
                                    <h6 class="fw-700 mb-1">Jonathan McCarron</h6><small>Community Ambassador</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm my-3">
                            <div class="hover-top-in text-center">
                                <div class="overflow-hidden z-index-1 position-relative px-5"><img class="rounded-circle border border-5 border-white shadow" src={chris} title="" alt="" /></div>
                                <div class="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in" style={{ color: 'black'}}>
                                    <h6 class="fw-700 mb-1">Chris B.</h6><small>Community Ambassador</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm my-3">
                            <div class="hover-top-in text-center">
                                <div class="overflow-hidden z-index-1 position-relative px-5"><img class="rounded-circle border border-5 border-white shadow" src={cashmoneyhoney} title="" alt="" /></div>
                                <div class="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in" style={{ color: 'black'}}>
                                    <h6 class="fw-700 mb-1">CashMoneyHoney</h6><small>Community Ambassador</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm my-3">
                            <div class="hover-top-in text-center">
                                <div class="overflow-hidden z-index-1 position-relative px-5"><img class="rounded-circle border border-5 border-white shadow" src={davin} title="" alt="" /></div>
                                <div class="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in" style={{ color: 'black'}}>
                                    <h6 class="fw-700 mb-1">Davin Riera</h6><small>Angel Investor / Advisor</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm my-3">
                            <div class="hover-top-in text-center">
                                <div class="overflow-hidden z-index-1 position-relative px-5"><img class="rounded-circle border border-5 border-white shadow" src={dave} title="" alt="" /></div>
                                <div class="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in" style={{ color: 'black'}}>
                                    <h6 class="fw-700 mb-1">DaveDFS</h6><small>Web3 Advisor</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm my-3">
                            <div class="hover-top-in text-center">
                                <div class="overflow-hidden z-index-1 position-relative px-5"><img class="rounded-circle border border-5 border-white shadow" src={uber} title="" alt="" /></div>
                                <div class="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in" style={{ color: 'black'}}>
                                    <h6 class="fw-700 mb-1">Ubergeek</h6><small>Web3 Advisor</small>
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
  background-color: black;
  color: white;

  img {
    border-radius: 10px;
    width: 100%;
  }

  .row {
    margin-bottom: 25px;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  font-weight: 500;
  color: white;
  margin: 1rem auto;
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

export default Team;
