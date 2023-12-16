import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextureIcon from "@mui/icons-material/Texture";
import Title from "./components/title";
import ProductDetails from "./components/ProductDetails";
import Reference from "./components/Reference";
import PurchaseCard from "./components/PurchaseCard";

function App() {
  return (
    <div className="App">
      <ProductDetails />
      <PurchaseCard />
    </div>
  );
}

export default App;
