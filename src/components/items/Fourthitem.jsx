import { Link } from "react-router-dom";
import { useState } from "react";
import { cartContent } from "../Navbar";

function Fourthitem() {
  const [itemCount, setItemCount] = useState(1);
  const items = [
    "Zx9 Speaker",
    "$ 4,500",
    "../src/images/shared/image-zx9-speaker.jpg",
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
            src="../src/images/shared/image-zx9-speaker.jpg"
            alt="image-zx9-speaker"
          />
          <div className="context">
            <h2 className="heading">Zx9 Speaker</h2>
            <p className="text">
              Upgrade your sound system with the all new ZX9 active speaker.
              It's a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <h4 className="price">$ 4,500</h4>

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
              Connect via Bluetooth or nearly any wired source. This speaker
              features optical, digital coaxial, USB Type-B, stereo RCA, and
              stereo XLR inputs, allowing you to have up to five wired source
              devices connected for easy switching. Improved bluetooth
              technology offers near lossless audio quality at up to 328ft
              (100m).
            </p>
            <p className="text">
              Discover clear, more natural sounding highs than the competition
              with ZX9's signature planar diaphragm tweeter. Equally important
              is its powerful room-shaking bass courtesy of a 6.5” aluminum
              alloy bass unit. You'll be able to enjoy equal sound quality
              whether in a large room or small den. Furthermore, you will
              experience new sensations from old songs since it can respond to
              even the subtle waveforms.
            </p>
          </div>
          <div className="right-side">
            <h2 className="heading">In the Box</h2>
            <ul className="provides">
              <li>
                <span className="x-plus">2x</span>Speaker unit
              </li>
              <li>
                <span className="x-plus">2x</span>Speaker cloth panel
              </li>
              <li>
                <span className="x-plus">1x</span>User manual
              </li>
              <li>
                <span className="x-plus">1x</span>3.5mm 10m audio cable
              </li>
              <li>
                <span className="x-plus">1x</span>10m optical cable
              </li>
            </ul>
          </div>
        </div>

        <div className="gallery">
          <div className="left-side">
            <img
              src="../src/images/product-zx9-speaker/image-gallery-1.jpg"
              alt="image-gallery-1"
            />
            <img
              src="../src/images/product-zx9-speaker/image-gallery-2.jpg"
              alt="image-gallery-2"
            />
          </div>
          <img
            src="../src/images/product-zx9-speaker/image-gallery-3.jpg"
            alt="image-gallery-3"
            className="right-img"
          />
        </div>

        <div className="also">
          <h2 className="heading">You may also like</h2>

          <div className="item">
            <img
              src="../src/images/shared/image-zx7-speaker.jpg"
              alt="image-zx7-speaker"
            />
            <h3 className="item-name">zx7 speaker</h3>
            <Link to="/Audiophile/fifthitem" className="btn">
              See Product
            </Link>
          </div>
          <div className="item">
            <img
              src="../src/images/shared/image-xx99-mark-one-headphones.jpg"
              alt="image-xx99-mark-one-headphones"
            />
            <h3 className="item-name">XX99 Mark I</h3>
            <Link to="/Audiophile/seconditem" className="btn">
              See Product
            </Link>
          </div>
          <div className="item">
            <img
              src="../src/images/shared/image-xx59-headphones.jpg"
              alt="image-xx59-headphones"
            />
            <h3 className="item-name">XX59</h3>
            <Link to="/Audiophile/thirditem" className="btn">
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

export default Fourthitem;
