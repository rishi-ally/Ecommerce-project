import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Centerelem from "./components/Centerelem";
import Allproducts from "./components/Allproducts";
import Productinfo from "./components/Productinfo";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";

function App() {
  const carttoshow = useSelector((state) => state.cart.setShowCart);

  return (
    <Router>
      <Navbar />
      
      {/* Define your routes here */}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Centerelem />
              <Allproducts />
            </>
          } 
        />
        <Route path="/products" element={<Allproducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-info" element={<Productinfo />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
