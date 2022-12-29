import styled, { createGlobalStyle } from "styled-components";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const cartData = [
  {
    id: 0,
    name: "geprek",
    amount: 1,
    price: 18,
  },
  {
    id: 1,
    name: "somay",
    amount: 2,
    price: 5,
  },
  {
    id: 2,
    name: "geprek",
    amount: 1,
    price: 18,
  },
  {
    id: 3,
    name: "somay",
    amount: 2,
    price: 5,
  },
  {
    id: 4,
    name: "geprek",
    amount: 1,
    price: 18,
  },
  {
    id: 5,
    name: "somay",
    amount: 2,
    price: 5,
  },
];

const Control = styled.div`
  /* z-index: 9; */
  margin-top: 7em;

  Card {
    max-height: 50%;
    /* overflow-y: scroll; */
  }
  /* max-height: 50%; */

  & .total-amount {
    display: flex;
    justify-content: space-between;
  }

  & .action-button {
    display: flex;
    justify-content: flex-end;
  }

  Button {
    margin: 0 0 0 1em;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
    
`

const ListCartItem = (props) => {
  return (
    <Modal>
      <GlobalStyle />
      <Control>
        <Card width="480px" shadow=" " maxHeight="33em" overflow="scroll">
          {cartData.map((cart) => {
            return <CartItem data={cart} key={cart.id} />;
          })}
          <div className="total-amount">
            <h1>Total Amount</h1>
            <h1>$33.0</h1>
          </div>
          <div className="action-button">
            <Button
              BGColor="white"
              BGColorHover="rgba(221, 221, 221, 1)"
              color="#85221b"
              border="1px solid #85221b"
            >
              Close
            </Button>
            <Button>Order</Button>
          </div>
        </Card>
      </Control>
    </Modal>
  );
};

export default ListCartItem;
