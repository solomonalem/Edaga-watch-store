import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componenet/Navbar";
import ProductList from "./componenet/ProductList";
import Product from "./componenet/Product";
import Details from "./componenet/Details";
import Default from "./componenet/Default";
import Cart from "./componenet/Cart/Cart";
import Footer from "./componenet/Footer";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
