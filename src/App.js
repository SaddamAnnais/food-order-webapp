import "./App.css";
import ListMenuItem from "./components/Menu/ListMenuItem";
import About from "./components/About/About";

const data = [
  {
    title: "Klepon",
    desc: "klepon asli magelang, isi gula jawa dan sprinled kelapa",
    price: 5,
  },
  {
    title: "Ayam penyet",
    desc: "ayam oenyet madura kesukaan yara, isi ayam dan sambel penyet",
    price: 18,
  },
];

function App() {
  return (
    <div className="App">
      <About />
      <ListMenuItem foodData={data} />
    </div>
  );
}

export default App;
