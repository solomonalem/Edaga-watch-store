import React from "react";
import CartItem from "./CartItem";
import styled from "styled-components";

export default function CartList({ value }) {
  console.log(value);
  return (
    <CartListContainer>
      {value.cart.map((item) => (
        <React.Fragment>
          <hr></hr>
          <CartItem key={item.id} value={value} item={item} />
          <hr></hr>
        </React.Fragment>
      ))}
    </CartListContainer>
  );
}

const CartListContainer = styled.div`
  flex: 3 1 50rem;
  padding-right: 0rem;
  margin-right: 1rem;
`;
