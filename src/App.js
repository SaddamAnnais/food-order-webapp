import "./App.css";
import ListMenuItem from "./components/Menu/ListMenuItem";
import Header from "./components/Header/Header";
import ListCartItem from "./components/CartModal/ListCartItem";

const data = [
  {
    title: "Klepon",
    desc: "klepon asli magelang, isi gula jawa dan sprinled kelapa",
    price: 5,
    id: 0,
  },
  {
    title: "Ayam penyet",
    desc: "ayam oenyet madura kesukaan yara, isi ayam dan sambel penyet",
    price: 18,
    id: 1,
  },
  {
    title: "Klepon goreng",
    desc: "klepon asli magelang, isi gula jawa dan sprinled kelapa",
    price: 5,
    id: 2,
  },
  {
    title: "Ayam bakar",
    desc: "ayam oenyet madura kesukaan yara, isi ayam dan sambel penyet",
    price: 18,
    id: 3,
  },
  {
    title: "Klepon bakar",
    desc: "klepon asli magelang, isi gula jawa dan sprinled kelapa",
    price: 5,
    id: 4,
  },
  {
    title: "Ayam penyet",
    desc: "ayam oenyet madura kesukaan yara, isi ayam dan sambel penyet",
    price: 18,
    id: 5,
  },
];

function App() {
  return (
    <div className="App">
      <ListCartItem />
      <Header />
      <ListMenuItem foodData={data} />
    </div>
  );
}

export default App;
