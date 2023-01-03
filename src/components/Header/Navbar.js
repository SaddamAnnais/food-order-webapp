import { useEffect, useState } from "react";
import styled from "styled-components";
import ListCartItem from "../CartModal/ListCartItem";
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

  @keyframes beat {
    0% {
      transform: none;
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: none;
    }
  }

  & .cart-button {
    animation-name: beat;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }
`;

const sumCart = (cart) => {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].amount;
  }
  return sum;
};

const Navbar = (props) => {
  const [numCart, setNumCart] = useState(0);
  const [classNameCartButton, setClassNameCartButton] = useState("");
  const [cartModalVisibleStatus, setcartModalVisibleStatus] = useState(false);

  const num = sumCart(props.cart);

  useEffect(() => {
    setNumCart(num);
    return () => setClassNameCartButton("cart-button");
  }, [num]);

  const cartModalHandler = (event) => {
    setcartModalVisibleStatus((prevState) => !prevState);
  };

  return (
    <>
      <ListCartItem
        visible={cartModalVisibleStatus}
        close={cartModalHandler}
        cart={props.cart}
        updateCart={(event) => props.updateCart(event)}
      />
      <Nav>
        <h1>
          <b>My Restaurant</b>
        </h1>
        <ul className="main-nav">
          <Button
            className={classNameCartButton}
            key={num}
            onClick={cartModalHandler}
          >
            <p>🛒 Your Cart</p>
            <p className="cart-amount">{numCart}</p>
          </Button>
        </ul>
      </Nav>
    </>
  );
};

export default Navbar;
