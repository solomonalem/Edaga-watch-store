import React, { Component } from "react";
import Product from "./Product.js";
import Title from "./Title";
import Advertise from "./Advertise";

import { ProductConsumer } from "../ContextAPI/context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <hr></hr>
            <Title name="PRODUCTS  &nbsp; ON SALE " title="" />

            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
        <hr></hr>
        <Advertise />
      </React.Fragment>
    );
  }
}
