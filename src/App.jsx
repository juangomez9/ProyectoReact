import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { ShoppingCartProvider } from "./components/context/ShoppingCartContext";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import NavBarFooter from "./components/NavBarFooter";
import Contact from "./components/Contact";

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/catalogo" element={<ItemListContainer />} />
          <Route
            exact
            path="/categoria/:categoria"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/contacto" element={<Contact />} />
        </Routes>
        <Footer />
        <NavBarFooter />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
