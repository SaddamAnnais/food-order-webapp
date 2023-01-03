import styled from "styled-components";
import formatNumber from "../UI/formatNumber";

const Control = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid #85221b;

  & .item-cart.left {
    width: 50%;
  }

  @media (min-width: 520px) {
    & .item-cart.left {
      width: 37%;
    }
  }

  & .item-cart.right {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & .inc-dec {
    margin: 0 0.7em;
    padding: 0.2em 1em;
    border-radius: 12px;
    width: 3em;
    height: 2em;
    border: 1px solid #85221b;
    background-color: white;
  }

  & .inc-dec:hover {
    background-color: rgba(221, 221, 221, 1);
  }

  & .price-amount {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    margin-bottom: 0;
  }

  & .price {
    color: #85221b;
  }
`;

const CartItem = (props) => {
  return (
    <Control>
      <div className="item-cart left">
        <h2>{props.data.name}</h2>
        <div className="price-amount">
          <p className="price">
            <b>Rp{formatNumber(props.data.price)}</b>
          </p>
          <p className="amount">x {props.data.amount}</p>
        </div>
      </div>
      <div className="item-cart right">
        <button
          className="inc-dec"
          onClick={() => props.updateCart({ type: "INC", id: props.data.id })}
        >
          +
        </button>
        <button
          className="inc-dec"
          onClick={() => props.updateCart({ type: "DEC", id: props.data.id })}
        >
          -
        </button>
      </div>
    </Control>
  );
};

export default CartItem;
