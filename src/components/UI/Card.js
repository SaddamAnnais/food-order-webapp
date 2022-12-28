import styled from "styled-components";

const Card = styled.div`
  background-color: ${props => props.BGcolor || 'white'};
  color: ${props => props.color || 'black'};
  width: 90%;  
  margin: 1.5em auto;
  padding: 1.5em;

  box-shadow: 0px 7px 5px 0px black;
  border-radius: 1em;

  @media (min-width:800px) {
    width: ${props => props.width || '90%'};
  }

` 

export default Card;