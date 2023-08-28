import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Brands() {
  return (
    <Container>
      <h3>OUR TOP BRANDS</h3>
      <OurBrand>
          <div>
            <Link to="/asics">
              <img src="/images/asics.png" alt="" />
            </Link>
          </div>

          <div>
            <Link to="/asics">
              <img src="/images/cube.png" alt="" />
            </Link>
          </div>
          <div>
            <Link to="/asics">
              <img src="/images/gowewear.png" alt="" />
            </Link>
          </div>
          <div>
            {" "}
            <Link to="/asics">
              <img src="/images/lowa.png" alt="" />
            </Link>
          </div>
          <div>
            <Link to="/asics">
              <img src="/images/schewale.png" alt="" />
            </Link>
          </div>
          <div>
            <Link to="/asics">
              <img src="/images/swear.png" alt="" />
            </Link>
          </div>
        </OurBrand>
      <ScrollableExclusiveBrand>
        <ExclusiveBrand>
        <div>
          <img src="/images/asics.png" alt="" />
        </div>

        <div>
          <img src="/images/cube.png" alt="" />
        </div>
        <div>
          <img src="/images/gowewear.png" alt="" />
        </div>
        <div>
          {" "}
          <img src="/images/lowa.png" alt="" />
        </div>
        <div>
          <img src="/images/schewale.png" alt="" />
        </div>
        <div>
          <img src="/images/swear.png" alt="" />
        </div>
      </ExclusiveBrand>
      </ScrollableExclusiveBrand>
    </Container>
  );
}

export default Brands;

const Container = styled.div`
  background: #090b13;
  background: white;
  color: black;
  h3 {
    font-family: "BrandonGrotesque", "Helvetica", "Arial", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: 5vh;
    text-align: center;
    padding: 2rem 0 0.5rem 0;
    color: black;
  }
  // padding-bottom: 4rem;
  @media (max-width: 768px) {
    h3 {
      margin-bottom: 2vh;
      font-size: 1.5rem;
      padding: 1rem 0 0 0;
      text-align: center;
    }
    div {
      a {
        img {
          width: 7rem;
        }
      }
    }
  }
`;
const OurBrand = styled.div`
  background: #090b13;
  background: white;
  color: black;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  place-items: center;
  div {
    margin: 2rem 0;
    a {
      text-align: center;
      img {
        width: 150px;
      }
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    // margin-left:15vw;
  }
`;
const ScrollableExclusiveBrand = styled.div`
  overflow: hidden;
  width: 100%;
  background: #f2f1ed;
`;
const ExclusiveBrand = styled.div`
  width: auto;
  color: black;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  place-items: center;
  animation: scrollLeft 15s linear infinite;

  div {
    margin: 0.8rem 0;
    img {
      width: 80px;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
    padding: 0 1rem;
    div {
      margin: 0.5rem 0;
      img {
        width: 50px;
      }
    }
  }

  @keyframes scrollLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-100% + 6px));
    }
  }
`;
