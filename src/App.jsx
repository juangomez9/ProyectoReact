import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/catalogo" element={<ItemListContainer />} />
       <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
