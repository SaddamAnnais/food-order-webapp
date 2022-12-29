import styled from "styled-components";
import MenuItem from "./MenuItem";
import Card from "../UI/Card";

const Control = styled.div`
  @keyframes animate {
    from {
      opacity: 0;
      transform: translateY(10%);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  z-index: 1;
  animation-name: animate;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  padding-bottom: 3em;
`;

const ListMenuItem = (props) => {
  return (
    <Control>
      <Card width="720px">
        {props.foodData.map((food) => {
          return (
            <MenuItem
              title={food.title}
              desc={food.desc}
              price={food.price}
              key={food.id}
            />
          );
        })}
      </Card>
    </Control>
  );
};

export default ListMenuItem;
