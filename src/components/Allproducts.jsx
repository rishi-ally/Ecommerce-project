import React from "react";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import Display from "./dISPLAY.JSX";
import Cart from "./Cart";
import LoadingSpinner from "./LoadingSpinner";
const Allproducts = () => {
  const [items, setItems] = useState([]);
  const [spinner, setSpinner] = useState(false); // Fixed the state name to be consistent

  useEffect(() => {
    setSpinner(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setSpinner(false); // Move this inside the then block
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setSpinner(false); // Ensure spinner is stopped on error
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Bootstrap row */}
        {spinner ? (
          <LoadingSpinner />
        ) : (
          items.map((item) => (
            <div className="col-md-4 col-sm-6 mb-4 carrrd" key={item.id}>
              <Display items={item} />
            </div>
          ))
        )}
      </div>
     
    </div>
  );
};

export default Allproducts;