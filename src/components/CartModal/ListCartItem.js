import styled from "styled-components";
import Button from "../UI/Button";
import Card from "../UI/Card";
import formatNumber from "../UI/formatNumber";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Control = styled.div`
  /* z-index: 9; */
  margin-top: 3.5em;

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

  & .cart-empty h1 {
    padding: 2em 0;
    text-align: center;
    margin: 0.5em 0;
    border-bottom: solid 0.1em #85221b;
  }
  & .order-list {
    max-height: 30em;
    overflow-y: auto;
  }
`;

const ListCartItem = (props) => {
  const sumAmount = (carts) => {
    let sum = 0;
    for (let i = 0; i < carts.length; i++) {
      sum += carts[i].amount * carts[i].price;
    }
    return sum;
  };
  const orderHandler = (carts) => {
    console.log("Sending order...");
  };
  const TotalAmountVisible = () => (
    <div className="total-amount">
      <h1>Total Amount</h1>
      <h1>Rp{formatNumber(sumAmount(props.cart))}</h1>
    </div>
  );

  const TotalAmountNotVisible = () => (
    <div className="cart-empty">
      <h1>Cart is empty</h1>
    </div>
  );

  return (
    <Modal visible={props.visible}>
      <Control>
        <Card width="480px" shadow=" " >
          <div className="order-list">
            {props.cart.map((cart) => {
              return (
                <CartItem
                  data={cart}
                  key={cart.id}
                  updateCart={(event) => props.updateCart(event)}
                />
              );
            })}
          </div>

          <div className="bills">
            {props.cart.length !== 0 && <TotalAmountVisible />}
            {props.cart.length === 0 && <TotalAmountNotVisible />}

            <div className="action-button">
              <Button
                BGColor="white"
                BGColorHover="rgba(221, 221, 221, 1)"
                color="#85221b"
                border="1px solid #85221b"
                onClick={() => props.close()}
              >
                Close
              </Button>
              {props.cart.length !== 0 && (
                <Button onClick={orderHandler}>Order</Button>
              )}
            </div>
          </div>
        </Card>
      </Control>
    </Modal>
  );
};

export default ListCartItem;
