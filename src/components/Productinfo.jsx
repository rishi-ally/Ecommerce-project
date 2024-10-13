import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import StarRating from "./StarRating"; // Assuming you have a StarRating component
import Fakereviews from "./Fakereviews";
import { useEffect } from "react";
import { setvalue, adduser } from "./redux-toolkit";
const Productinfo = () => {
  const item = useSelector((state) => state.display.currentiteminfo);
  const dispatch = useDispatch();

  useEffect(()=>{
    fetch('https://fakestoreapi.com/users')
            .then(res=>res.json())
      .then(json=>dispatch(adduser(json)))
     
  
  },[])
  const users = useSelector((state) => state.display.users);
  return (
    <>
      <div class="card mb-3">
        <div class="alert alert-info" role="alert">
          <h4 class="alert-heading">Before You Proceed...</h4>
          <p>
            Please take a moment to review the product details carefully before
            making your selection. Ensure that the specifications, sizes, and
            features meet your needs. Double-check all options before adding the
            item to your cart to avoid any issues later. We want you to have the
            best experience, so choose wisely!
          </p>
          <hr />
          <p class="mb-0">Shopikart appreciate your attention Thanks!</p>
        </div>
        <div class="card">
          <div class="card-body">
            <center>
              <img
                src={item.image}
                className="card-img-top img-info"
                alt="Product Image showing a stylish shirt"
                style={{ height: "auto", width: "40vh" }} // Use camelCase for inline styles
              />
            </center>
       
          </div>
          <div class="alert alert-success" role="alert">
<center><strong>Buy for {item.price}$🛒</strong></center>
</div>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            <strong>{item.title}</strong>
          </h5>
          <p class="card-text">
           
            <div class="alert alert-secondary" role="alert">
              {item.description}
            </div>
          </p>
          <p class="card-text">
            Ratings & reviews{" "}
            {item.rating && <StarRating ratings={item.rating.rate} />}{" "}
          </p>
        </div>
        {users.map((item) => (
            <Fakereviews users={item}></Fakereviews>
          ))}
      </div>
      
    </>
  );
};

export default Productinfo;
