import React, { useState } from "react";
import styled from "styled-components";
import b2 from "../brandSpotlight/BS-2.jpg";
import b3 from "../brandSpotlight/BS-3.jpg";
import b4 from "../brandSpotlight/BS-4.jpg";
import b5 from "../brandSpotlight/BS-5.jpg";
import b6 from "../brandSpotlight/BS-6.jpg";

const BannersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 300px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  color: white;
  border: none;
  font-size: 40px;
  padding: 10px;
  cursor: pointer;

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`;

const Banner = () => {
  const b1 =
    "https://img.freepik.com/premium-vector/extra-bonus-offer-during-super-sale-campaign-announcement-header-banner-template-design-with-promotion-text-megaphone_419341-6.jpg?w=996";

  const banners = [b1, b2, b3, b4, b5, b6];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + banners.length) % banners.length);
  };

  return (
    <BannersContainer>
      <CarouselButton className="carousel-button prev" onClick={prevSlide}>
        &#8249;
      </CarouselButton>
      <BannerImage
        src={banners[currentIndex]}
        alt={`Banner ${currentIndex + 1}`}
      />
      <CarouselButton className="carousel-button next" onClick={nextSlide}>
        &#8250;
      </CarouselButton>
    </BannersContainer>
  );
};

export default Banner;