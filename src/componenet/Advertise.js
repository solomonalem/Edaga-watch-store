import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../ContextAPI/context";
export default function Advertise() {
  return (
    <ProductConsumer>
      {(value) => {
        const { img } = value.detailProduct;

        return (
          <AdvertiseContainer className="container">
            <div className="advertise">
              <ul>
                <div className="col-10 mx-auto col-md-6 my-3">
                  {" "}
                  <img src={img} alt="product" />
                </div>

                <div className="col-10 mx-auto col-md-6 my-3">
                  <h4>
                    MODERN WELL DESIGNED PRODUCTS <div id="border"></div>
                  </h4>

                  <p>
                    Best brand in the world you don't just see the time you see
                    the world,you see future. Hold your future control your
                    destiny Best brand in the world you don't just see the time
                    you see the world,you see future. Hold your future control
                    your destiny
                  </p>
                </div>
              </ul>
              <hr></hr>
            </div>
          </AdvertiseContainer>
        );
      }}
    </ProductConsumer>
  );
}
const AdvertiseContainer = styled.div`
  height: 110vh;
  .advertise {
    height: 100vh;
    width: 115%;
    margin-bottom: 6rem;
    padding: 0;
    margin: 6rem -8rem;
    background: black;
    transition: all 1s linear;
  }
  .advertise img {
    animation: rotation 8s infinite linear;
    max-width: 25rem;
  }
  .advertise ul {
    display: flex;
    justify-content: space-around;
  }
  .advertise h4 {
    color: white;
    padding: 2rem 8rem;
    font-family: "lato";
    position: relative;
    text-align: center;
    word-spacing: 0.5rem;
  }
  #border {
    border-bottom: 2px solid #fff;
    position: absolute;
    text-align: center;
    bottom: 10px;
    color: white;
    height: 0rem;
    width: 4rem;
    margin-right: 3rem;
    right: 36%;
  }
  .advertise p {
    color: white;
    padding: 1rem 4rem;
    text-align: center;
    font-family: "Philosopher";
  }
  @media only screen and (max-width: 780px) {
    height: 160vh;
    .advertise {
      height: 150vh;
      width: 100%;
      margin: 3rem 0;
    }
    .advertise ul {
      display: block;
    }
    .advertise img {
      max-width: 20rem;
    }
    .advertise h4 {
      margin: 1rem 0;
      padding: 1rem 0;
      border-bottom: 0.1rem solid white;
    }
    .advertise p {
      color: white;
      padding: 1rem 0rem;
    }
    .advertise ul div {
      display: block;
    }
    #border {
      display: none;
    }
  }
  @media only screen and (max-width: 507px) {
    .advertise {
      height: 200vh;
      width: 100%;
      margin: 3rem 0;
    }
    .advertise ul {
      display: block;
      padding: 0;
    }
    .advertise h4 {
      margin: 1rem 0;
    }
    .advertise p {
      color: white;
      padding: 1rem 0rem;
    }
    .advertise ul div {
      display: block;
    }
    #border {
      display: none;
      padding: rem 0;
    }
    .advertise img {
      font-size: 0.3rem !important;
      width: 80vw;
    }
  }
  @keyframes rotation {
    0% {
      transform: rotateY(0deg);
    }
    30% {
      transform: rotateY(45deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
`;
