import React from "react";
import styled from "styled-components";

export default function CartItem({ item, value }) {
  const { id, title, img, price, count } = item;
  const { decrement, increment, removeItem } = value;

  return (
    <CartItemContainer>
      <div className="img">
        <img
          className="img-fluid"
          src={img}
          style={{ maxWidth: "8rem", height: "8rem" }}
          alt="products"
        />
      </div>
      <div className="item-options">
        <div>
          <h5>{title}</h5>
          <h6>${price.toFixed(2)}</h6>
          <span className="stock">In Stock</span>
        </div>
        <div className="quantity">
          <span className="btn minus" onClick={() => decrement(id)}>
            &minus;
          </span>
          <span className="btn">{count}</span>
          <span className="btn" onClick={() => increment(id)}>
            +
          </span>
        </div>

        <div className="delete-btn">
          <div onClick={() => removeItem(id)}>Delete</div>
        </div>
      </div>

      <div className="total-price">
        <strong>${price.toFixed(2)}</strong>
      </div>
    </CartItemContainer>
  );
}
const CartItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding-top: 0.5rem;
  .item-options {
    left: 12rem;
    width: 55%;
  }
  .item-options h5 {
    color: #0066c0;
    font-weight: bold;
    font-size: 1rem;
  }

  .img {
    width: 30%;
    height: auto;
    padding-left: 2rem;
  }
  .total-price {
    width: 15%;
    text-align: center;
    color: #b12704;
  }
  .stock {
    color: green;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .btn {
    border: 1px solid #f2f3f4;
    margin: 0.1rem;
    font-size: 0.8rem;
    padding: 0.1rem;
    border-radius: 50%;
    height: 1.5rem;
    width: 1.5rem;
    font-weight: bold;
    background: #d6dbdf;
    color: #5d6d7e;
  }
  .btn:hover {
    border: 1px solid #5d6d7e;
    background: #5d6d7e;
    color: white;
  }
  .delete-btn {
    color: #0066c0;
    font-size: 0.7rem;
    padding: 0.3rem 0;
    cursor: pointer;
  }
  @media only screen and (max-width: 500px) {
    .item-options {
      padding-left: 3rem;
    }
  }
`;
