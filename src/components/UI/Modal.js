import { createPortal } from "react-dom";
import styled, { createGlobalStyle } from "styled-components";

const Overlay = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.49);
  z-index: 11;
  position: fixed;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const GlobalStyle = createGlobalStyle`
  body {
    position: ${(props) => (props.visible ? "absolute" : "default")};
    /* overflow-y: scroll; */
    /* width: 100%; */
    overflow: ${(props) => (props.visible ? "hidden" : "auto")};
  }
    
`;
const Modal = (props) => {
  return (
    <>
      {createPortal(<GlobalStyle visible={props.visible}/>, document.body)}
      {createPortal(
        <Overlay visible={props.visible}>{props.children}</Overlay>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
