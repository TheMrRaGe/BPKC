import React from "react";
import styled from "styled-components";

const Utility = () => {
    return (
        <Section id="utility">
            <div style={{padding: '50px 0px' }}>
                <div className="container">
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div class="section-title text-center mb-4 pb-2">
                                <Title>Utility</Title>
                                <p class="text-muted para-desc mx-auto mb-0">
                                    Experience unmatched utility in the crypto world with our Web3 solutions, combining powerful NFTs, sophisticated trading bots, and the speed of the Solana blockchain for a seamless, next-gen digital experience. As a holder, you gain access to:
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                            <div class="card service-wrapper rounded border-0 shadow p-4">
                                <div class="icon text-center text-custom h1 shadow rounded bg-white">
                                    <span class="uim-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="1em"><path d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z"/></svg></span>
                                </div>
                                <div class="content mt-4">
                                    <h5 class="title">Trading Bots</h5>
                                    <p class="text-muted mt-3 mb-0">Dominate the market with our advanced trading bots, engineered for optimal performance to give you a competitive edge in the crypto trading arena.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                            <div class="card service-wrapper rounded border-0 shadow p-4">
                                <div class="icon text-center text-custom h1 shadow rounded bg-white">
                                    <span class="uim-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em"><path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg></span>
                                </div>
                                <div class="content mt-4">
                                    <h5 class="title">NFTs</h5>
                                    <p class="text-muted mt-3 mb-0">Discover our exclusive NFTs, each a unique digital asset designed to provide tangible value and unlock premium content experiences in the crypto space.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                            <div class="card service-wrapper rounded border-0 shadow p-4">
                                <div class="icon text-center text-custom h1 shadow rounded bg-white">
                                    <span class="uim-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="1em"><path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z"/></svg></span>
                                </div>
                                <div class="content mt-4">
                                    <h5 class="title">Community</h5>
                                    <p class="text-muted mt-3 mb-0">Join a community where every member's voice is heard through our lively telegram, social media presence, live voice chat forums, voting, and more.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                            <div class="card service-wrapper rounded border-0 shadow p-4">
                                <div class="icon text-center text-custom h1 shadow rounded bg-white">
                                    <span class="uim-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="1em"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg></span>
                                </div>
                                <div class="content mt-4">
                                    <h5 class="title">Web3 Development</h5>
                                    <p class="text-muted mt-3 mb-0">Constantly see value through the development of innovative technology that showcases the power and security of the blockchain.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                            <div class="card service-wrapper rounded border-0 shadow p-4">
                                <div class="icon text-center text-custom h1 shadow rounded bg-white">
                                    <span class="uim-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="1em"><path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48 0 224 28.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16L0 352c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-224-80 0zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128l0 224c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16l-80 0zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"/></svg></span>
                                </div>
                                <div class="content mt-4">
                                    <h5 class="title">Partnerships</h5>
                                    <p class="text-muted mt-3 mb-0">Gain access to valuable partnerships including, but not limited to apparel, development services, consulting, and much more.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                            <div class="card service-wrapper rounded border-0 shadow p-4">
                                <div class="icon text-center text-custom h1 shadow rounded bg-white">
                                    <span class="uim-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em"><path d="M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z"/></svg></span>
                                </div>
                                <div class="content mt-4">
                                    <h5 class="title">Rewards</h5>
                                    <p class="text-muted mt-3 mb-0">All utility is designed to strategically add value to the ecosystem and provide further rewards to the community.</p>
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

  img {
    border-radius: 10px;
    width: 100%;
  }

  .row {
    margin-bottom: 25px;
  }

f.service-container {
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.service-container .icon {
  margin-top: 5%;
  font-size: 38px;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.service-container .number-icon .icon-2 {
  height: 70px;
  width: 70px;
  line-height: 80px;
  border-radius: 64% 36% 55% 45% / 76% 72% 28% 24% !important;
  border-color: #f89d36 !important;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.service-container .number-icon .icon-2 i {
  font-size: 30px;
}

.service-container .number-icon .number {
  position: absolute;
  top: 0;
  right: 70px;
  left: 0;
  height: 35px;
  width: 35px;
  margin: 0 auto;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.service-container .number-icon .number span {
  line-height: 30px;
}

.service-container .content .number {
  font-size: 40px;
  color: #dee2e6;
}

.service-container .content .title {
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.service-container.hover-bg {
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.service-container.hover-bg .smooth-icon {
  position: absolute;
  bottom: -40px;
  right: -20px;
  font-size: 60px;
  color: #f8f9fa;
  -webkit-transition: all 0.8s ease;
  transition: all 0.8s ease;
}

.service-container.hover-bg:hover {
  background-color: #f89d36;
}

.service-container.hover-bg:hover .content .title {
  color: #fffff !important;
}

.service-container.hover-bg:hover .content .serv-pera {
  color: #fafafb !important;
}

.service-container.hover-bg:hover .smooth-icon {
  font-size: 100px;
  opacity: 0.2;
  bottom: -20px;
  right: 10px;
}

.service-container:hover {
  background-color: #ffffff;
  -webkit-box-shadow: 0 10px 25px rgba(47, 60, 78, 0.15) !important;
          box-shadow: 0 10px 25px rgba(47, 60, 78, 0.15) !important;
}

.service-container:hover .icon {
  color: #f89d36;
  -webkit-animation: mover 1s infinite alternate;
          animation: mover 1s infinite alternate;
}

.service-container:hover .number-icon .icon-2 {
  background-color: #f89d36;
  border-radius: 50% !important;
}

.service-container:hover .number-icon .icon-2 i {
  color: #ffffff !important;
}

.service-container:hover .number-icon .number {
  color: #ffffff;
  background: #f89d36 !important;
  border-color: #ffffff !important;
}

.service-container:hover .content .title {
  color: #f89d36;
}

.service-container a:hover,
.service-container a .title:hover {
  color: #f89d36 !important;
}

@-webkit-keyframes mover {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-15px);
            transform: translateY(-15px);
  }
}

@keyframes mover {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-15px);
            transform: translateY(-15px);
  }
}

.service-wrapper {
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.service-wrapper .icon {
  width: 60px;
  height: 60px;
  line-height: 45px;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.service-wrapper .content .title {
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  font-weight: 500;
}

.service-wrapper .big-icon {
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 0.05;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.service-wrapper:hover {
  -webkit-box-shadow: 0 10px 25px rgba(47, 60, 78, 0.15) !important;
          box-shadow: 0 10px 25px rgba(47, 60, 78, 0.15) !important;
  background: white;
  -webkit-transform: translateY(-8px);
          transform: translateY(-8px);
  border-color: transparent !important;
}

.service-wrapper:hover .icon {
  background: white !important;
  color: white !important;
}

.service-wrapper:hover .big-icon {
  z-index: -1;
  opacity: 0.1;
  font-size: 160px;
}

.text-custom {
    color: black !important;
}

.uim-svg {
    display: inline-block;
    height: 1em;
    vertical-align: -0.125em;
    font-size: inherit;
    fill: black;
}
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

export default Utility;
