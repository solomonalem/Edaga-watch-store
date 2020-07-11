import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <div class="row">
        <div class="col">
          <h6>EDAGA COLLECTIONS</h6>
          <ul>
            <li>Latest Releases</li>
            <li>Products</li>
          </ul>
        </div>

        <div class="col">
          <h6>LET'S STAY CONNECTED</h6>
          <ul className="social-media">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-youtube"></i>
          </ul>
        </div>

        <div className="copy-right">
          <hr></hr>
          &copy; 2020
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  height: 50vh;
  width: 100%;
  padding: 3rem;
  background: #f0f3f4;
  ${"" /* background: #d0d3d4; */}

  .row {
    align-items: left;
    text-align: left;
    padding: 0rem;
  }
  .col {
    padding-left: 3rem;
  }
  .row ul {
    padding-left: 2rem;
  }
  .row li {
    list-style: none;
    color: black;
    cursor: pointer;
  }
  .row li:hover {
    color: #2e4053;
  }
  i:hover {
    color: #2e4053;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    border: 1px solid #2e4053;
    background: #bdc3c7;
  }
  .social-media {
    padding-right: 2rem;
  }
  .social-media i {
    margin-right: 2rem;

    cursor: pointer;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    border: 1px solid #bdc3c7;
    text-align: center;
    padding: 0.44rem;
    color: #2e4053;
  }
  .copy-right {
    width: 100vw;
    color: gray;

    padding: 2rem;
    text-align: center;
  }
  h6 {
    font-weight: bold;
    font-size: 0.9rem;
    padding-left: 2rem;
    color: black;
    word-spacing: 0.3rem;
    padding-bottom: 1rem;
  }
`;
