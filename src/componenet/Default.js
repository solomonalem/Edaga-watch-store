import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default class Default extends Component {
  render() {
    return (
      <DefaultContainer>
        <div className="default">
          <h3>SORRY</h3>
          <h5>We couldn't find that page</h5>
          <Link to="./" className="shop-btn">
            Continue-shopping
          </Link>
        </div>
      </DefaultContainer>
    );
  }
}
const DefaultContainer = styled.div`
  width: 100vw;
  height: 100vh;

  .default {
    padding:5rem;
    text-align: center;
    width: 100%;
    height: 100vh;
    background: #f4f4f4;
    border-radius: 0.3rem;
    border: 1px solid #aeb6bf;
  }
 h5{
  margin-bottom:3rem;
 }

  .shop-btn {
    
    background: black;
    border-radius: 0.3rem;
    border: 1px solid black !important;
    color: white;
    padding:.4rem 2rem;
  }
  }
`;
