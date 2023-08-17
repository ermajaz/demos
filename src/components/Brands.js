import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Brands() {
  return (
    <Container>
      <h3>OUR TOP BRANDS</h3>
      <Brand>
        <div>
          <Link to="/home">
            <img src="/images/asics.png" alt="" />
          </Link>
        </div>

        <div>
          <Link to="/home">
            <img src="/images/cube.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/home">
            <img src="/images/gowewear.png" alt="" />
          </Link>
        </div>
        <div>
          {" "}
          <Link to="/home">
            <img src="/images/lowa.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/home">
            <img src="/images/schewale.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/home">
            <img src="/images/swear.png" alt="" />
          </Link>
        </div>
      </Brand>
    </Container>
  );
}

export default Brands;

const Container = styled.div`
  margin-bottom: 1rem;
  background: #090b13;
  h3 {
    padding: 2rem 0 0 2.5rem;
    letter-spacing: 4px;
    font-family: "Helvetica";
  }
  padding-bottom: 4rem;
  @media (max-width: 768px) {
    h3 {
        padding: 1rem 0;
      text-align: center;
    }
    div{
        a{
            img{
                width: 7rem;
            }
        }
    }
  }
`;
const Brand = styled.div`
  background: #090b13;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-left: 300px;
  div {
    a {
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-left:15vw;
  }
`;
