import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Brands() {
  return (
    <Container>
      <h3>OUR TOP BRANDS</h3>
      <OurBrand>
        <div>
          <Link to="/cratoni">
            <img src="/images/cratoni.png" alt="" />
          </Link>
        </div>

        <div>
          <Link to="/cratoni">
            <img src="/images/neco.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/cratoni">
            <img src="/images/kenda.png" alt="" />
          </Link>
        </div>
        <div>
          {" "}
          <Link to="/cratoni">
            <img src="/images/logan.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/cratoni">
            <img src="/images/joes.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/cratoni">
            <img src="/images/rst.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/cratoni">
            <img src="/images/rst.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/cratoni">
            <img src="/images/tekto.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/cratoni">
            <img src="/images/sunrace.png" alt="" />
          </Link>
        </div>
      </OurBrand>
      <ScrollableExclusiveBrand>
        <ExclusiveBrand>
          <div>
            <img src="/images/cratoni.png" alt="" />
          </div>

          <div>
            <img src="/images/sunrace.png" alt="" />
          </div>
          <div>
            <img src="/images/kenda.png" alt="" />
          </div>
          <div>
            {" "}
            <img src="/images/logan.png" alt="" />
          </div>
          <div>
            <img src="/images/neco.png" alt="" />
          </div>
          <div>
            <img src="/images/rst.png" alt="" />
          </div>
          <div>
            <img src="/images/joes.png" alt="" />
          </div>
          <div>
            <img src="/images/tekto.png" alt="" />
          </div>
        </ExclusiveBrand>
      </ScrollableExclusiveBrand>
    </Container>
  );
}

export default Brands;

const Container = styled.div`
  // background: #090b13;
  background: white;
  color: black;
  margin: 0 1.5rem;
  transition: 0.7s all ease;
  border-color: transparent;
  box-shadow: 0 0 15px 0 rgba(93, 93, 93, 0.3);
  border-radius: 5px;
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
    margin: 0;
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
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
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
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 15px;
  overflow: hidden;
  place-items: center;
  animation: scrollLeft 15s linear infinite;
  div {
    margin: 0.8rem 0;
    img {
      width: 80px;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
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
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
