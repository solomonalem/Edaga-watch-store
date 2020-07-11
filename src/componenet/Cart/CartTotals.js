import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductProvider from "../../ContextAPI/context";
import PayPal from "./PayPal";
export default function CartTotals({ value, history }) {
  const { cartTotal, cartTax, cartSubTotal, clearCart } = value;
  return (
    <CartTotalsContainer>
      <div>
        <h5>Total Price</h5>
      </div>
      <hr></hr>
      <div>
        <h6>
          <span>SubTotal : ${cartSubTotal.toFixed(2)} </span>
        </h6>
        <h6>
          <span>Tax : ${cartTax.toFixed(2)} </span>
        </h6>
        <hr />
        <h6>
          <span>Total : ${cartTotal.toFixed(2)} </span>
        </h6>
      </div>
      <div>
        <PayPal total={cartTotal} clearCart={clearCart} history={history} />
        <Link to="/">
          <button
            className="remove-all-btn"
            type="button"
            onClick={() => clearCart()}
          >
            Remove All
          </button>
        </Link>
      </div>
    </CartTotalsContainer>
  );
}

const CartTotalsContainer = styled.div`
  padding: 1rem;
  background: #f4f6f6;
  flex: 1 1 20rem;
  text-align: right;
  padding-right: 5rem;
  margin: 0 2rem;

  height: 100%;
  border-radius: 0.3rem;
  border: 1px solid #eaecee;
  .remove-all-btn {
    background: #f4f6f6;
    border-radius: 1rem;
    padding: 0.13rem 2.8rem;
    margin: 1rem 0;
    font-size: 0.7rem;
    border: 2px solid #0066c0;
    font-weight: bold;
    color: #0066c0;
  }
  .remove-all-btn:hover {
    color: #b12704;
  }
  h5,
  h6 {
    font-weight: bold;
    color: #454545;
  }
`;
