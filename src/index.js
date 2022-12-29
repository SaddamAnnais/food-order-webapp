import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import "./index.css";

const GlobalStyle = createGlobalStyle`
  body {
    /* overflow: hidden; */
  }
    
`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
