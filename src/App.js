import "./App.css";
import ListMenuItem from "./components/Menu/ListMenuItem";
import Header from "./components/Header/Header";
import { useState } from "react";

const data = [
  {
    title: "Nasi Padang",
    desc: "Nasi Padang is a flavour-rich dish originated from Padang, Indonesia. It is a rice-based meal topped with various dishes, including curries, chickens, fishes, and various parts of cow meats",
    price: 27000,
    id: 0,
  },
  {
    title: "Pecel",
    desc: "Pecel is an Indonesian vegetable salad containing various boiled greens with a spicy peanut sauce as the topping",
    price: 18000,
    id: 1,
  },
  {
    title: "Ayam Taliwang",
    desc: "Chicken roasted with a seasoning that includes dried chilies, shallots, garlic, tomatoes, fried shrimp paste, galangal, brown sugar, and salt",
    price: 32000,
    id: 2,
  },
  {
    title: "Sop Buntut",
    desc: "Sop buntut is a soup primarily made from oxtail which roasted before it gets boiled with the broth and carrots, tomatoes, potatoes, green onion, and celery",
    price: 35000,
    id: 3,
  },
  {
    title: "Kerak Telor",
    desc: "Kerak telor is a dish made from eggs and sticky rice mixed with other ingredients such as ginger, galangal, sugar, salt, and garlic",
    price: 15000,
    id: 4,
  },
  {
    title: "Rendang",
    desc: "Rendang is slow-cooked beef with various spices and seasonings involved to create a flavorful taste",
    price: 28400,
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
