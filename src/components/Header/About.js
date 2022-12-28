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
        <h1>RM Minang Bu Yara Sihotang</h1>
        <p>Makanan lezat dan bergizi siap diantar ke kosan anda</p>
        <p>Terbuat dari bahan-bahan berkualitas</p>
      </Control>
    </Card>
  );
};

export default About;
