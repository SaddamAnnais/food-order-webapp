import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.BGcolor || "white"};
  color: ${(props) => props.color || "black"};
  width: 90%;
  margin: 1.5em auto;
  padding: 1.5em;

  box-shadow: ${(props) => props.shadow || "0px 7px 5px 0px black"};
  border-radius: 1em;

  overflow-y: ${(props) => props.overflow || " "};
  max-height: ${(props) => props.maxHeight || " "};

  /* scrollbar-width: none; Firefox */
  /* -ms-overflow-style: none; Internet Explorer 10+ */

  @media (min-width: 720px) {
    width: ${(props) => props.width || "90%"};
  }
`;

export default Card;
