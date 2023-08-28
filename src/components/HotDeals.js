import React from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { accessories } from "../data";
import h1 from "../img/parts/hot_deals.png";

const HotDeals = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
    },
  };

  return (
    <Container>
      <h3>Hot Deals</h3>
      <StyledCarousel responsive={responsive}>
        {accessories.map((data) => (
          <Card key={data.id}>
            <HotDeal src={h1} alt="" />
            <ItemImg src={data.img} alt={data.name} />
            <ItemDetail>
              <ItemRating>
                <Rating>4.3</Rating>
                <StarIcons style={fontS} />
                <Line>|</Line>
                <NoOfRating> 313</NoOfRating>
              </ItemRating>
              <ItemName>{data.name}</ItemName>
              <ItemData>30.4cm Analogue Wall Clock</ItemData>
              <ItemPrice>
                <CurrentPrice>Rs. 599</CurrentPrice>
                <OriginalPrice>Rs. 1499</OriginalPrice>
                <Discount> 60% OFF</Discount>
              </ItemPrice>
            </ItemDetail>
          </Card>
        ))}
      </StyledCarousel>
      <StyledCarousel responsive={responsive}>
        {accessories.map((data) => (
          <Card key={data.id}>
            <HotDeal src={h1} alt="" />
            <ItemImg src={data.img} alt={data.name} />
            <ItemDetail>
              <ItemRating>
                <Rating>4.3</Rating>
                <StarIcons style={fontS} />
                <Line>|</Line>
                <NoOfRating> 313</NoOfRating>
              </ItemRating>
              <ItemName>{data.name}</ItemName>
              <ItemData>30.4cm Analogue Wall Clock</ItemData>
              <ItemPrice>
                <CurrentPrice>Rs. 599</CurrentPrice>
                <OriginalPrice>Rs. 1499</OriginalPrice>
                <Discount> 60% OFF</Discount>
              </ItemPrice>
            </ItemDetail>
          </Card>
        ))}
      </StyledCarousel>
    </Container>
  );
};

export default HotDeals;

const Container = styled.div`
  width: 88%;
  height: auto;
  padding: 2rem;
  // overflow: hidden;
  margin: auto;
  h3 {
    font-family: "BrandonGrotesque", "Helvetica", "Arial", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: 5vh;
    text-align: center;
    padding: 2rem 0 1.5rem 0;
    color: black;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    h3 {
      font-size: 1.8rem;
      padding: 0.5rem 0 0 0;
    }
  }
`;
const StyledCarousel = styled(Carousel)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.6rem 0;
  margin-bottom: 2.5rem;
`;
const Card = styled.div`
  position: relative;
  width: 18vw;
  min-width: 16vw;
  height: 60vh;
  background: white;
  color: black;
  margin: 0 1rem;
  border: 0.0625rem solid #dee1e7;
  border-radius: 0.0625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    border-color: transparent;
    box-shadow: 0 0 15px 0 rgba(93, 93, 93, 0.3);
  }
  @media (max-width: 768px) {
    width: 45vw;
    height: 38vh;
    margin: 0.5rem 0.7rem;
  }
`;
const HotDeal = styled.img`
  position: absolute;
  width: 9rem;
  height: 9rem;
  margin: -2.85rem 0 0 13.1vw;
  transition: all 1s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    margin: -2.85rem 0 0 26vw;
  }
`;
const ItemImg = styled.img`
  width: 100%;
  height: 78%;
  @media (max-width: 768px) {
    width: 100%;
    height: 70%;
  }
`;
const ItemDetail = styled.div`
  width: 100%;
  height: 22%;
  display: flex;
  padding: 0.5rem 1rem;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 768px) {
    height: 30%;
    padding: 0.7rem;
  }
`;
const ItemRating = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  background: #f0eeeb;
  opacity: 0.8;
  padding: 0.2rem 0.3rem;
  border-radius: 3px;
  font-weight: bolder;
  margin-bottom: 1.2rem;
  justify-content: space-between;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 768px) {
    width: 60%;
    margin-bottom: 1.3rem;
  }
`;
const Rating = styled.span`
  font-size: 0.9rem;
`;
const StarIcons = styled(StarIcon)`
  color: gold;
`;
const Line = styled.span`
  margin-bottom: 2px;
`;
const NoOfRating = styled.span`
  font-size: 0.9rem;
`;
const ItemName = styled.span`
  font-family: "BrandonGrotesque", "Helvetica", "Arial", sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
   @media (max-width: 768px) {
    letter-spacing: 0.05rem;
    font-size: 0.8rem;
  }
`;
const ItemData = styled.p`
  font-size: 0.8rem;
  margin: 0.7rem 0 0.6rem;
  color: #3b3a38;
  @media (max-width: 768px) {
    margin: 0.7rem 0 0.6rem;
    font-size: 0.6rem;
  }
`;
const ItemPrice = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.2rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const CurrentPrice = styled.p`
  margin: 0;
  font-size: 1rem;
  // font-weight: 500;
  text-transform: capitalize;
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;
const OriginalPrice = styled.p`
  text-decoration-line: line-through;
  margin: 0;
  color: gray;
  letter-spacing: 0.5px;
  font-size: 0.8rem;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;
const Discount = styled.p`
  color: red;
  margin: 0;
  font-size: 1.3rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const fontS = {
  fontSize: "20",
};
