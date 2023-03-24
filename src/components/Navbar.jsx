import { Outlet, Link } from "react-router-dom";
import iconClose from "../assets/shared/icon-close.svg";
import iconBars from "../assets/shared/icon-hamburger.svg";
import { useState } from "react";

export let cartContent = [];

function Navbar() {
  const [isLinksActive, setIsLinksActive] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);

  function ToggleCart() {
    setIsCartActive(!isCartActive);
  }

  function ToggleLinks() {
    setIsLinksActive(!isLinksActive);
  }

  function RemoveAllItems() {
    cartContent = [];
    setIsCartActive(!isCartActive);
  }

  function RemoveCartItem(index) {
    cartContent.splice(index, 1);
    setIsCartActive(!isCartActive);
  }

  return (
    <>
      <nav className="nav-bar">
        <img
          src={isLinksActive ? iconClose : iconBars}
          alt="links-icon"
          className="links-icon"
          onClick={ToggleLinks}
        />

        <img src="../../images/shared/logo.svg" alt="logo" className="logo" />

        <ul className={`links ${isLinksActive ? "active" : ""}`}>
          <li>
            <Link to="/Audiophile" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Audiophile/headphones" className="link">
              Headphones
            </Link>
          </li>
          <li>
            <Link to="/Audiophile/speakers" className="link">
              Speakers
            </Link>
          </li>
          <li>
            <Link to="/Audiophile/earphones" className="link">
              Earphones
            </Link>
          </li>
        </ul>

        <img
          src="../../images/shared/icon-cart.svg"
          alt="icon-cart"
          className="cart"
          onClick={ToggleCart}
        />
      </nav>

      <div className={`cart-content ${isCartActive ? "active" : ""}`}>
        <div className="top-content">
          <h2 className="heading">Cart</h2>
          <button className="remove-all" onClick={RemoveAllItems}>
            Remove All
          </button>
        </div>
        <div className="center-content">
          {cartContent.map((item, index) => (
            <div className="center-item" key={index}>
              <img src={item[2]} alt="image" className="item-img" />
              <div className="center-center">
                <h3 className="item-name">{item[0]}</h3>
                <h3 className="item-price">{item[1]}</h3>
                <p className="item-count">X{item[3]}</p>
              </div>
              <img
                src={iconClose}
                alt="close-icon"
                className="close-btn"
                onClick={RemoveCartItem}
              />
            </div>
          ))}
        </div>
        <Link to="/Audiophile" className="btn">
          Checkout
        </Link>
      </div>

      <Outlet />

      <footer className="footer">
        <div className="top-footer">
          <div className="left-side">
            <h2 className="heading">
              Bringing you the <span>best</span>
              <br />
              audio gear
            </h2>
            <p className="text">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <img
            src="../..//images/shared/image-best-gear.jpg"
            alt="image-best-gear"
          />
        </div>
        <div className="bottom-footer">
          <div className="left-side">
            <img src="../..//images/shared/logo.svg" alt="logo" />
            <p className="text">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
            <p className="text">Copyright 2023. All Rights Reserved</p>
          </div>
          <div className="right-side">
            <div className="footer-links">
              <Link to="/Audiophile" className="link">
                Home
              </Link>
              <Link to="/Audiophile/headphones" className="link">
                Headphones
              </Link>
              <Link to="/Audiophile/speakers" className="link">
                Speakers
              </Link>
              <Link to="/Audiophile/earphones" className="link">
                Earphones
              </Link>
            </div>
            <div className="social-icons">
              <img
                src="../..//images/shared/icon-facebook.svg"
                alt="icon-facebook"
              />
              <img
                src="../..//images/shared/icon-twitter.svg"
                alt="icon-twitter"
              />
              <img
                src="../..//images/shared/icon-instagram.svg"
                alt="icon-instagram"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Navbar;
