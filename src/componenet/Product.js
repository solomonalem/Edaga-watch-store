import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../ContextAPI/context";

export default class Product extends Component {
  render() {
    const { id, stars, review, img, title, inCart, price } = this.props.product;
    return (
      <ProductConsumer>
        {(value) => (
          <ProductItem className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
              <div
                className="image-container align-sself-center pl-5 pt-5"
                onClick={() => value.detailHandler(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
              </div>
              <div className="card-footer d-block">
                <p className="align-self-center mb-0">{title}</p>

                <h6 className="mb-0">
                  <span className="mr-1">$</span>
                  {price.toFixed(2)}
                </h6>
                <Link to="/cart">
                  <button
                    className="cart-btn"
                    disabled={inCart ? true : false}
                    onClick={() => value.addToCartHandler(id)}
                  >
                    {inCart ? <p disabled>In Cart</p> : <p>Add To Cart</p>}
                  </button>
                </Link>
              </div>
            </div>
          </ProductItem>
        )}
      </ProductConsumer>
    );
  }
}

const ProductItem = styled.div`
  .card {
    border: none;
    transition: all 1s ease-out;
  }
  .card-footer {
    border: none;
    background: transparent;
    text-align: center;
    transition: all 1s ease-out;
  }
  .cart-btn {
    border: none;
    background: black;
    color: white;
    border: 0.1rem solid black;
    border-radius: 0.2rem;
    padding: 0rem 0.5rem;
    font-size: 0.7rem;
  }
  .cart-btn p {
    margin-bottom: 0rem !important;
    padding: 0.1rem 0.4rem;
    font-size: 0.6rem;
  }
  .card-footer p {
    font-family: "lato";
    text-transform: uppercase;
  }
  .card-img-top {
    height: 13rem;
    width: 9rem;
  }
  .image-container,
  .card-img-top {
    position: relative;
    transition: all 0.3s ease-out;
  }
  .image-container:hover .card-img-top {
    transform: scale(1.05);
    opacity: 0.5;
  }
 
  }
`;
