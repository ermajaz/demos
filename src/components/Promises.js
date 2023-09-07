import React from "react";
import styled from "styled-components";

function Promises() {
  return (
    <Container>
        <h3>Our Promises</h3>
      <PromiseDiv>
        <img src="/images/3_day.png" alt="" />
        <img src="/images/bestPricess.png" alt="" />
        <img src="/images/free_shippings.png" alt="" />
        <img src="/images/24hhh.png" alt="" />
      </PromiseDiv>
    </Container>
  );
}

export default Promises;

const Container = styled.div`
  // background: #090b13;
  // background:#f9f9f9;
  width: 100%;
  height: 50vh;
  color: black;
  padding: 0 1.5rem;
  margin: 5vh 0;
  border-top: 2px solid rgb(213, 208, 208);
  border-bottom: 2px solid rgb(213, 208, 208);
  h3 {
    font-family: "BrandonGrotesque", "Helvetica", "Arial", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: 5vh;
    text-align: center;
    padding: 2rem 0 1.4rem 0;
    color: black;
  }
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    padding: 0;
    h3 {
      margin-bottom: 4vh;
      font-size: 1.8rem;
        padding: 1rem 0;
      text-align: center;
    }
  }
`;
const PromiseDiv = styled.div`
  display: grid;
  color: black;

  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  place-items: center;
  img {
   width: 125px;
   height: 125px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
