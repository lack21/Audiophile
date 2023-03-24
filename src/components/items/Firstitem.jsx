import { useState } from "react";
import { Link } from "react-router-dom";
import { cartContent } from "../Navbar";

function Firstitem() {
  const [itemCount, setItemCount] = useState(1);
  const items = [
    "XX99 Mark II",
    "$ 2,999",
    "../src/images/shared/image-xx99-mark-two-headphones.jpg",
    itemCount,
  ];

  function IncrementItem() {
    if (itemCount == 99) {
      return alert("You reached the maximux items limit!");
    }
    setItemCount((itemCount) => itemCount + 1);
  }

  function DecrementItem() {
    if (itemCount == 1) {
      return alert("You can't go under one!");
    }
    setItemCount((itemCount) => itemCount - 1);
  }

  function AddItem() {
    cartContent.push(items);
  }

  return (
    <>
      <section className="collection">
        <div className="item">
          <img
            src="../../../images/shared/image-xx99-mark-two-headphones.jpg"
            alt="image-xx99-mark-two-headphones"
          />
          <div className="context">
            <h3 className="new">New Product</h3>
            <h2 className="heading">
              XX99 Mark II
              <br />
              Headphones
            </h2>
            <p className="text">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <h4 className="price">$ 2,999</h4>

            <div className="btns">
              <div className="counter">
                <button className="count-btn" onClick={DecrementItem}>
                  -
                </button>
                <h5 className="count">{itemCount}</h5>
                <button className="count-btn" onClick={IncrementItem}>
                  +
                </button>
              </div>
              <button className="btn" onClick={AddItem}>
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="details">
          <div className="left-side">
            <h2 className="heading">Features</h2>
            <p className="text">
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you're taking a business call or just in your
              own personal space, the auto on/off and pause features ensure that
              you'll never miss a beat.
            </p>
            <p className="text">
              The advanced Active Noise Cancellation with built-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5. 0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound, cutting-edge technology, and
              a modern design aesthetic.
            </p>
          </div>
          <div className="right-side">
            <h2 className="heading">In the Box</h2>
            <ul className="provides">
              <li>
                <span className="x-plus">1x</span>Headphone unit
              </li>
              <li>
                <span className="x-plus">2x</span>Replacement earcups
              </li>
              <li>
                <span className="x-plus">1x</span>User manual
              </li>
              <li>
                <span className="x-plus">1x</span>3.5mm 5m audio cable
              </li>
              <li>
                <span className="x-plus">1x</span>Travel bag
              </li>
            </ul>
          </div>
        </div>

        <div className="gallery">
          <div className="left-side">
            <img
              src="../../../images/product-xx99-mark-two-headphones/image-gallery-1.jpg"
              alt="image-gallery-1"
            />
            <img
              src="../../../images/product-xx99-mark-two-headphones/image-gallery-2.jpg"
              alt="image-gallery-2"
            />
          </div>
          <img
            src="../../../images/product-xx99-mark-two-headphones/image-gallery-3.jpg"
            alt="image-gallery-3"
            className="right-img"
          />
        </div>

        <div className="also">
          <h2 className="heading">You may also like</h2>

          <div className="item">
            <img
              src="../../../images/shared/image-xx99-mark-one-headphones.jpg"
              alt="image-xx99-mark-one-headphones"
            />
            <h3 className="item-name">XX99 Mark I</h3>
            <Link to="/Audiophile/seconditem" className="btn">
              See Product
            </Link>
          </div>
          <div className="item">
            <img
              src="../../../images/shared/image-xx59-headphones.jpg"
              alt="image-xx59-headphones"
            />
            <h3 className="item-name">XX59</h3>
            <Link to="/Audiophile/thirditem" className="btn">
              See Product
            </Link>
          </div>
          <div className="item">
            <img
              src="../../../images/shared/image-zx9-speaker.jpg"
              alt="image-zx9-speaker"
            />
            <h3 className="item-name">ZX9 Speaker</h3>
            <Link to="/Audiophile/fourthitem" className="btn">
              See Product
            </Link>
          </div>
        </div>
      </section>

      <section className="choices">
        <Link to="/Audiophile/headphones" className="choice">
          <img
            src="src/images/shared/image-headphones.png"
            alt="image-headphones"
            className="choice-img"
          />
          <h3 className="choice-name">HEADPHONES</h3>
          <h4 className="choice-btn">
            SHOP
            <img
              src="src/images/shared/icon-arrow-right.svg"
              alt="icon-arrow-right"
            />
          </h4>
        </Link>
        <Link to="/Audiophile/speakers" className="choice">
          <img
            src="src/images/shared/image-speakers.png"
            alt="image-speakers"
            className="choice-img"
          />
          <h3 className="choice-name">SPEAKERS</h3>
          <h4 className="choice-btn">
            SHOP
            <img
              src="src/images/shared/icon-arrow-right.svg"
              alt="icon-arrow-right"
            />
          </h4>
        </Link>
        <Link to="/Audiophile/earphones" className="choice">
          <img
            src="src/images/shared/image-earphones.png"
            alt="image-earphones"
            className="choice-img"
          />
          <h3 className="choice-name">EARPHONES</h3>
          <h4 className="choice-btn">
            SHOP
            <img
              src="src/images/shared/icon-arrow-right.svg"
              alt="icon-arrow-right"
            />
          </h4>
        </Link>
      </section>
    </>
  );
}

export default Firstitem;
