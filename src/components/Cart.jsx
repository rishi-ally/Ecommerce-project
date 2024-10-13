import React from "react";
import { useSelector, useDispatch } from "react-redux";
import StarRating from "./StarRating";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { decreaseQuantity,deleteitem,increasequanity } from "./redux-toolkit/index2";
import { MdOutlineDeleteOutline } from "react-icons/md";
const Cart = () => {
  const dispatch = useDispatch();

const handleDelete=(id)=>{
  dispatch(deleteitem(id))

}
  // Get all cart items from Redux
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate total bill
  const totalBill = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const discountamount = totalBill * 0.20;

  // If no items in the cart, display a message
  if (cartItems.length === 0) {
    return (
      <div
        className="cart-modal d-flex align-items-center justify-content-center flex-column"
        style={{ height: "80vh" }}
      >
        <img
          src="https://cdn.pixabay.com/photo/2015/11/03/09/04/shopping-1020025_1280.jpg"
          className="img-fluid mb-4"
          alt="Empty Cart"
          style={{
            height: "16rem",
            borderRadius: "10px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
          }}
        />
        <h1 className="display-6 text-center text-secondary fw-bold">
          Oops! Your cart is feeling a bit lonely.
        </h1>
        <p className="text-muted text-center mt-3">Add some items to keep it company!</p>
        <Link to="/">
          <button className="btn btn-primary mt-3">Start Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="bd-callout bd-callout-info alert alert-info">
        <strong>Friendly reminder:</strong> Don’t rush—take a moment to review your order!
      </div>

      <div className="cart-content d-flex flex-column align-items-center">
        {/* Cart Items Section */}
        <div className="cart-items-container d-flex flex-wrap justify-content-center">
           {cartItems.map((item) => (<>
           <div key={item.id} className="card shadow mb-4 bg-body-tertiary rounded m-3" style={{ width: "18rem" }}> <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"onClick={()=>{handleDelete(item.id)}}>
            <MdOutlineDeleteOutline /><span class="visually-hidden">New alerts</span>
  </span>
              <div className="card-body d-flex flex-column align-items-center">
                <img
                  src={item.img}
                  className="img-thumbnail mb-3"
                  alt={item.name}
                  style={{ height: "15rem", width: "100%" }}
                />
                <h5 className="card-title text-center">{item.name}</h5>
                <StarRating ratings={item.rating} />
                <p className="text-center">{item.buyers} people have bought this product!</p>
                <div className="d-flex justify-content-center align-items-center mb-2">
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    <AiOutlineMinus />
                  </button>
                  {item.quantity}
                  <button
                    className="btn btn-success ms-2"
                    onClick={() => dispatch(increasequanity(item.id))}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
                <p>Price: {item.price.toFixed(2)}$</p>
                <p><strong>Total: {item.totalPrice.toFixed(2)}$</strong></p>
              </div>
            </div>
          </>))}
        </div>

        {/* Total Bill Section */}
        <div className="total-bill-section w-100 mt-5 p-3 border rounded bg-light">
          <h3>Checkout Summary</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{Math.floor(item.totalPrice)}$</td>
                </tr>
              ))}
              <tr>
                <td><strong>Amount</strong></td>
                <td><strong>{totalBill.toFixed(2)}$</strong></td>
              </tr>
              <tr className="table-warning">
                <td><strong>Discount</strong></td>
                <td><strong>{Math.floor(-discountamount)}$</strong></td>
              </tr>
              <tr className="table-success">
                <td><strong>Total Bill</strong></td>
                <td><strong>{(totalBill - discountamount).toFixed(2)}$</strong></td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-success mt-3">Proceed to Checkout</button>

          <hr />

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="ENTER PROMO CODE!"
            />
            <button className="btn btn-outline-primary" type="button">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
