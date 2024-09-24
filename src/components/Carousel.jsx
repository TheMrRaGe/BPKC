import React from "react";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";

import img1 from "../assets/Nfts/1.png";
import img2 from "../assets/Nfts/2.png";
import img3 from "../assets/Nfts/3.png";
import img4 from "../assets/Nfts/4.png";
import img5 from "../assets/Nfts/5.png";
import img6 from "../assets/Nfts/6.png";
import img7 from "../assets/Nfts/7.png";
import img8 from "../assets/Nfts/8.png";
import img9 from "../assets/Nfts/9.png";
import img10 from "../assets/Nfts/10.png";

import Arrow from "../assets/Arrow.svg";

const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="Bored Pitty Kennel Club" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Bored Pitty Kennel Club" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Bored Pitty Kennel Club" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Bored Pitty Kennel Club" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="Bored Pitty Kennel Club" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="Bored Pitty Kennel Club" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="Bored Pitty Kennel Club" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="Bored Pitty Kennel Club" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="Bored Pitty Kennel Club" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="Bored Pitty Kennel Club" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  width: 25vw;
  height: 70vh;

  @media (max-width: 70em) {
    height: 60vh;
  }

  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
  }

  @media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
  }

  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
  }

  .swiper {
    height: 100%;
    width: 100%;

    &-slide {
      background-color: ${(props) => props.theme.carouselColor};
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }

    &-button-next {
      width: 4rem;
      right: 0;
      top: 60%;
      color: ${(props) => props.theme.text};
      background-image: url(${Arrow});
      background-position: center;
      background-size: cover;

      &::after {
        display: none;
      }

      @media (max-width: 64em) {
        width: 3rem;
      }

      @media (max-width: 30em) {
        width: 2rem;
      }
    }

    &-button-prev {
      width: 4rem;
      left: 0;
      top: 60%;
      color: ${(props) => props.theme.text};
      transform: rotate(180deg);
      background-image: url(${Arrow});
      background-position: center;
      background-size: cover;

      &::after {
        display: none;
      }

      @media (max-width: 64em) {
        width: 3rem;
      }

      @media (max-width: 30em) {
        width: 2rem;
      }
    }
  }
`;

export default Carousel;
