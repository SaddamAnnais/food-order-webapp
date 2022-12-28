import styled from "styled-components";
import ItemMenu from "./ItemMenu";
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
`;

const ListMenuItem = (props) => {
  return (
    <Control>
      <Card width="720px">
        {props.foodData.map((food) => {
          return (
            <ItemMenu
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
