import styled from "styled-components";
import Card from "../UI/Card";

const Control = styled.div`
  color: white;
  padding: 0;
`;

const About = () => {
  return (
    <Card BGcolor="#343434" color="white" width='480px'>
      <Control>
        <h1>Delicious Food</h1>
        <p>Delicious and nutritious food is ready to be delivered to you</p>
        <p>Made from high quality ingredients</p>
      </Control>
    </Card>
  );
};

export default About;
