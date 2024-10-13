import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { showCart } from './redux-toolkit/index2';
import { Link } from 'react-router-dom';
import { FaShopware } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
const Navbar = () => {
  const dispatch = useDispatch();
  const inventory = () => {
    dispatch(showCart());
  };
  const quantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      <header className="navbar p-3 mb-3 shadow-sm">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none logo-link me-5">
            <FaShopware />
              <span className="brand-name">Shopikart</span>
            </Link>

            <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
              <li className="nav-item me-4">
                <Link to="/" className="nav-link px-3 hover-link">Home</Link>
              </li>
              <li className="nav-item me-4">
                <Link to="/products" className="nav-link px-3 hover-link">Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link px-3 hover-link" onClick={inventory}>
                  <button type="button" className="btn cart-btn position-relative" aria-label="Shopping Cart">
                  <MdShoppingCart />
                    {quantity !== 0 ? (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {quantity}
                      </span>
                    ) : null}
                  </button>
                </Link>
              </li>
            </ul>

            <form className="search-bar d-flex mb-3 mb-lg-0 me-5" role="search">
              <input type="search" className="form-control rounded-pill me-2" placeholder="Search..." aria-label="Search" />
              <button className="btn search-btn" type="submit"><i className="bi bi-search"></i></button>
            </form>

            <div className="dropdown text-end">
              <a href="#" className="d-block text-decoration-none profile-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="Profile" width="32" height="32" className="rounded-circle" />
              </a>
              <ul className="dropdown-menu text-small">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
