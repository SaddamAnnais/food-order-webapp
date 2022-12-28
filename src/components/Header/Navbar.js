import { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #b13d00;
  display: flex;
  flex-direction: row;
  z-index: 10;
  justify-content: space-between;

  & .cart-amount {
    background-color: #b13d00;
    margin-left: 1em;
    padding: 0.2em 1em;
    border-radius: 0.9em;
  }

  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  Button {
    margin: 1em 0;
    margin-right: 1rem;
    display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  }

  Button p {
    margin: 0.1em;
  }

  h1 {
    color: white;
    margin-left: 1rem;
  }

  @media (min-width: 1150px) {
    Button {
      margin-right: 13rem;
    }
    h1 {
      margin-left: 13rem;
    }
  }
`;

const Navbar = (props) => {
  const [cartAmount, setCartAmount] = useState(0);

  return (
    <Nav>
      <h1>
        <b>RM YaraSiHot</b>
      </h1>
      <ul class="main-nav">
        <Button>
          <p>🛒 Your Cart</p>
          <p className="cart-amount">{cartAmount}</p>
        </Button>
      </ul>
    </Nav>
  );
};

export default Navbar;
