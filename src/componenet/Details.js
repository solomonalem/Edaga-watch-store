import React, { Component } from "react";
import { ProductConsumer } from "../ContextAPI/context";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import styled from "styled-components";
import ProductList from "./ProductList";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            price,
            company,
            img,
            title,
            inCart,
            review,
            stars,
            info,
          } = value.detailProduct;
          return (
            <DetailContainer className="container">
              <div className="row">
                <Link to="/" className="Link">
                  &larr; Back To Products
                </Link>
                <div className="col-10 mx-auto text-center text-slanted my-5">
                  <h2>{title}</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <h5>{title}</h5>
                  <hr></hr>
                  <h6>
                    Made by :<span className="text-capitalize">{company}</span>
                  </h6>
                  <h6>
                    Price :<span className="text">${price.toFixed(2)}</span>
                  </h6>

                  <h6>
                    <span className="star text-gray">
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                    </span>
                    &nbsp;
                    {stars} ({review})
                  </h6>
                  <h6>
                    <span className="description font-weight-bold">
                      Description :
                    </span>
                    <p>{info}</p>
                  </h6>
                  <div>
                    <Link to="/cart">
                      <button
                        className="detail-btn"
                        disabled={inCart ? true : false}
                        onClick={() => value.addToCartHandler(id)}
                      >
                        {inCart ? "in-cart" : "Add To Cart"}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <hr></hr>

              <ProductList />
            </DetailContainer>
          );
        }}
      </ProductConsumer>
    );
  }
}
const DetailContainer = styled.div`
  .description {
    font-weight: 300;
    line-height: 3;
  }
  .Link {
    color: rgb(89, 21, 179);
    padding-top: 1rem;
  }

  .detail-btn {
    color: white;
    background: black;
    padding: 0.3rem 2rem;
    border-radius: 0.3rem;
    opacity: ${(props) => (props.cart ? 0.4 : 1)};
  }
  .star {
    font-weight: bold;
    font-size: 1rem;
  }
  .img-fluid {
    max-height: 26rem;
  }
`;
