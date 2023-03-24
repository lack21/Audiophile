import { Link } from "react-router-dom";
import { useState } from "react";
import { cartContent } from "../Navbar";

function Seconditem() {
  const [itemCount, setItemCount] = useState(1);
  const items = [
    "XX99 Mark I",
    "$ 1,750",
    "../src/images/shared/image-xx99-mark-one-headphones.jpg",
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
            src="../../../images/shared/image-xx99-mark-one-headphones.jpg"
            alt="image-xx99-mark-two-headphones"
          />
          <div className="context">
            <h3 className="new">New Product</h3>
            <h2 className="heading">
              XX99 Mark I<br />
              Headphones
            </h2>
            <p className="text">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <h4 className="price">$ 1,750</h4>

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
              As the headphones all others are measured against, the XX99 Mark I
              demonstrates over five decades of audio expertise, redefining the
              critical listening experience. This pair of closed-back headphones
              are made of industrial, aerospace-grade materials to emphasize
              durability at a relatively light weight of 11 oz.
            </p>
            <p className="text">
              From the handcrafted microfiber ear cushions to the robust metal
              headband with inner damping element, the components work together
              to deliver comfort and uncompromising sound. Its closed-back
              design delivers up to 27 dB of passive noise cancellation,
              reducing resonance by reflecting sound to a dedicated absorber.
              For connectivity, a specially tuned cable is includes with a
              balanced gold connector.
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
            </ul>
          </div>
        </div>

        <div className="gallery">
          <div className="left-side">
            <img
              src="../../../images/product-xx99-mark-one-headphones/image-gallery-1.jpg"
              alt="image-gallery-1"
            />
            <img
              src="../../../images/product-xx99-mark-one-headphones/image-gallery-2.jpg"
              alt="image-gallery-2"
            />
          </div>
          <img
            src="../../../images/product-xx99-mark-one-headphones/image-gallery-3.jpg"
            alt="image-gallery-3"
            className="right-img"
          />
        </div>

        <div className="also">
          <h2 className="heading">You may also like</h2>

          <div className="item">
            <img
              src="../../../images/shared/image-xx99-mark-two-headphones.jpg"
              alt="image-xx99-mark-two-headphones"
            />
            <h3 className="item-name">XX99 MK II</h3>
            <Link to="/Audiophile/firstitem" className="btn">
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

export default Seconditem;
