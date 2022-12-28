import styled from "styled-components";
import ItemMenu from "./ItemMenu";
import Card from "../UI/Card";

const Control = styled.div``;

const ListMenuItem = (props) => {
  return (
    <Card width='720px'>
      <Control>
        {props.foodData.map((food) => {
          return (
            <ItemMenu title={food.title} desc={food.desc} price={food.price} />
          );
        })}
      </Control>
    </Card>
  );
};

export default ListMenuItem;
