import Button from "../UI/Button";
import styled from "styled-components";
import { useState } from "react";

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: solid;
  border-color: #cccccc;
  border-width: 1px;

  & .item-menu.left {
    margin-left: 0;
    width: 50%;
    text-align: left;
  }

  & .item-menu.right {
    margin-left: 0;
    width: 50%;
    text-align: right;
  }

  & .item-input {
    display: flex;
    justify-content: flex-end;
  }

  input {
    width: 3em;
    height: 1.5em;
    margin: auto 1em;
  }
`;

const MenuItem = (props) => {
  const [amount, setAmount] = useState(1);

  const amountHandler = (event) => {
    setAmount(parseInt(event.target.value));
  };
  const addToCartHandler = (event) => {
    props.toCart({ name: props.title, amount: amount, price: props.price });
  };

  return (
    <MenuWrapper>
      <div className="item-menu left">
        <p className="name">
          <b>{props.title}</b>
        </p>
        <p className="desc">
          <i>{props.desc}</i>
        </p>
        <p className="price">${props.price}</p>
      </div>
      <div className="item-menu right">
        <div className="item-input">
          <p className="amount">Amount</p>
          <input
            type="number"
            min="1"
            value={amount}
            onChange={amountHandler}
          />
        </div>
        <Button onClick={addToCartHandler}>+ Add</Button>
      </div>
    </MenuWrapper>
  );
};

export default MenuItem;
