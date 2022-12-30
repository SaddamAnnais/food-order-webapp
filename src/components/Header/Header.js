import styled from "styled-components"
import About from "./About"
import Navbar from "./Navbar"
import background from "./food-BG.jpeg"

const Wrapper = styled.div`
  padding-top: 5em;
  padding-bottom: 1em;
  margin-bottom: 1em;
  background-image: url(${background});
  background-size: cover;
  background-repeat: repeat;
` 

const Header = props => {
  return (
    <Wrapper >
      <Navbar cart={props.cart} updateCart={(event) => props.updateCart(event)} />
      <About />
    </Wrapper>
  )
}

export default Header;