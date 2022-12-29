import styled from "styled-components";

const Button = styled.button`
  padding: 0.6em 2em;
  background-color: ${props => props.BGColor || '#85221b'};
  color: ${props => props.color || 'white'};;
  border: ${props => props.border || 'none'};
  border-radius :1.5em;
  &:hover {
  background-color: ${props => props.BGColorHover || 'rgba(96, 25, 0, 1)'};
}
`

export default Button