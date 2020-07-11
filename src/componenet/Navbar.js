import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-1">
        <Link to="/">
          <h2 className="navbar-brand">E D A G A</h2>
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              PRODUCTS
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-5">
          <Button>
            <i className="fas fa-cart-plus"></i>
            <span className="mr-4">CART</span>
          </Button>
        </Link>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background: black;

  .navbar-brand {
    color: #f9dc11;
    font-weight: 700;
    font-family: "Philosopher";
    font-size: 1.9rem;
    padding: 0 !important;
    &:hover {
      color: #fcee14;
    }
  }
  .nav-link {
    color: #d6dbdf !important;
    font-weight: bold;
    font-size: 0.9rem;
    &:hover {
      color: #bfc9ca !important;
    }
  }
  span {
    margin: 0.5rem !important;
    font-size: 0.9rem;
  }
  .navbar-nav {
    margin-left: auto !important;
  }
  @media only screen and (max-width: 460px) {
    padding: 0.5rem 0 !important;
    .navbar {
      padding: 0.5rem !important;
    }
    .ml-5 {
      padding: 0rem !important;
    }
    ul.navbar-nav {
      align-items: left !important;
      margin: 0 !important;
    }
    .navbar-brand {
      font-weight: 700;
      font-size: 1.3rem;
      padding: 0 !important;
    }
    .nav-link {
      font-weight: bold;
      font-size: 0.8rem;
    }

    .navbar-nav {
      margin-left: 0 !important;
    }
    Button {
      padding: 0 !important;
      font-weight: 400 !important;
    }
  }
`;
