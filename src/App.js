import "./App.css";
import ListMenuItem from "./components/Menu/ListMenuItem";
import Header from "./components/Header/Header";
import { useState } from "react";

const data = [
  {
    title: "Klepon",
    desc: "klepon asli magelang, isi gula jawa dan sprinled kelapa",
    price: 5000,
    id: 0,
  },
  {
    title: "Ayam penyet",
    desc: "ayam oenyet madura kesukaan yara, isi ayam dan sambel penyet",
    price: 18000,
    id: 1,
  },
  {
    title: "Klepon goreng",
    desc: "klepon asli magelang, isi gula jawa dan sprinled kelapa",
    price: 5200,
    id: 2,
  },
  {
    title: "Ayam bakar",
    desc: "ayam oenyet madura kesukaan yara, isi ayam dan sambel penyet",
    price: 18200,
    id: 3,
  },
  {
    title: "Klepon bakar",
    desc: "klepon asli magelang, isi gula jawa dan sprinled kelapa",
    price: 5400,
    id: 4,
  },
  {
    title: "Ayam penyet bakar",
    desc: "ayam oenyet madura kesukaan yara, isi ayam dan sambel penyet",
    price: 18400,
    id: 5,
  },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCartHandler = (event) => {
    setCart((prevState) => {
      for (let i = 0; i < prevState.length; i++) {
        if (prevState[i].name === event.name) {
          let newCart = [...prevState];
          newCart[i].amount = newCart[i].amount + event.amount;
          return newCart;
        }
      }
      const newElmtCart = { ...event, id: prevState.length };
      const newCart = [...prevState, newElmtCart];
      return newCart;
    });
  };

  const updateCartHandler = (event) => {
    if (event.type === "INC") {
      setCart((prevState) => {
        let newCart = [...prevState];
        newCart[event.id].amount += 1;
        return newCart;
      });
    } else if (event.type === "DEC") {
      setCart((prevState) => {
        let newCart = [...prevState];
        newCart[event.id].amount -= 1;

        if (newCart[event.id].amount === 0) {
          newCart.splice(event.id, 1);
          for (let i = 0; i<newCart.length;i++) {
            newCart[i].id = i;
          }
          return newCart;
        } else {
          return newCart;
        }
      });
    }
  };

  return (
    <div className="App">
      <Header cart={cart} updateCart={updateCartHandler} />
      <ListMenuItem foodData={data} toCart={addToCartHandler} />
    </div>
  );
}

export default App;
