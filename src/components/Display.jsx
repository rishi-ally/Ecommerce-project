import React, { useState, useEffect } from "react";
import StarRating from "./StarRating"; // Assuming you have a StarRating component
import { VscThumbsup, VscThumbsupFilled } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { dispayinfo, setvalue} from "./redux-toolkit/index";
import { additem} from "./redux-toolkit/index2";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdFileDownloadDone } from "react-icons/md";
const Display = ({ items }) => {
  const [like, setLike] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  /*const [showCart, setShowCart] = useState(false); // State to manage cart visibility
  const [selectedItem, setSelectedItem] = useState(null); // State to hold selected item for cart*/
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleMoreInfo = (item) => {
    navigate("/product-info"); 
   dispatch(setvalue(item))
  };
  const isItemInCart = cartItems.find(cartItem => cartItem.id === items.id); 

    const handleAddToCart = (item) => {
     
        dispatch(additem(item)); // Add item to cart only if it's not already there
    
    };
    
   
  const gotoCart=(item)=>{
    navigate("/cart")
 
  }

  return (
    <>
      <div className="shadow p-3 mb-5 bg-body-tertiary rounded h-100">
        <div className="card h-100">
          <img
            src={items.image}
            className="card-img-top img-fluid h-40"
            alt="Product"
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">
              <strong>{items.title}</strong>
            </h5>
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={()=>{handleMoreInfo(items)}}
            >
              More about this product
            </button>
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item"
                onClick={() => setLike(!like)}
              >
                {like ? <VscThumbsupFilled /> : <VscThumbsup />}
              </li>
              <li className="list-group-item">
                Price: {items.price.toFixed(2)}$
              </li>
              <li className="list-group-item">
                {items.rating && <StarRating ratings={items.rating.rate} />}
              </li>
              <li className="list-group-item">
                No of purchasers: {items.rating.count}
              </li>
            </ul>
            <div className="mt-3 flexing">
             {isItemInCart?<button type="button" class="btn btn-success" disabled>Item Added<MdFileDownloadDone /></button>:<button
              type="button"
              className="btn btn-outline-success"
              data-bs-toggle="modal"
              data-bs-target={`#staticBackdrop${items.id}`}
            onClick={()=>{handleAddToCart(items)}}
            >
           Add item
            </button>}  
            
            <div
              className="modal fade"
              id={`staticBackdrop${items.id}`}
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby={`staticBackdropLabel${items.id}`}
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5"
                      id={`staticBackdropLabel${items.id}`}
                    >
                      {items.title}
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="alert alert-success" role="alert">
                      Successfully Added to your cart! ✅
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-success"
                      data-bs-dismiss="modal"
                    >
                      Keep shopping!
                    </button>
                    
               <button type="button" className="btn btn-primary"     data-bs-dismiss="modal" onClick={gotoCart}>
                      View bag
                    </button>
                  </div>
                </div>
              </div>
            </div>
              <a
                className="btn btn-primary ms-2"
                data-bs-toggle="collapse"
                href={`#collapse${items.id}`}
                role="button"
                aria-expanded="false"
                aria-controls={`collapse${items.id}`}
              >
                Read Warning
              </a>
            </div>
            <div className="collapse mt-2" id={`collapse${items.id}`}>
              <div className="alert alert-warning" role="alert">
                Note: Verify the product features to avoid misunderstandings.
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Display;
