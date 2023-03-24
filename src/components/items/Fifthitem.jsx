import { Link } from "react-router-dom";
import { useState } from "react";
import { cartContent } from "../Navbar";

function Fifthitem() {
  const [itemCount, setItemCount] = useState(1);
  const items = [
    "Zx7 Speaker",
    "$ 3,500",
    "../src/images/shared/image-zx7-speaker.jpg",
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
            src="../../../images/shared/image-zx7-speaker.jpg"
            alt="image-zx7-speaker"
          />
          <div className="context">
            <h2 className="heading">Zx7 Speaker</h2>
            <p className="text">
              Stream high quality sound wirelessly with minimal to no loss. The
              ZX7 speaker uses high-end audiophile components that represents
              the top of the line powered speakers for home or studio use.
            </p>
            <h4 className="price">$ 3,500</h4>

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
              Reap the advantages of a flat diaphragm tweeter cone. This
              provides a fast response rate and excellent high frequencies that
              lower tiered bookshelf speakers cannot provide. The woofers are
              made from aluminum that produces a unique and clear sound. XLR
              inputs allow you to connect to a mixer for more advanced usage.
            </p>
            <p className="text">
              The ZX7 speaker is the perfect blend of stylish design and high
              performance. It houses an encased MDF wooden enclosure which
              minimises acoustic resonance. Dual connectivity allows pairing
              through bluetooth or traditional optical and RCA input. Switch
              input sources and control volume at your finger tips with the
              included wireless remote. This versatile speaker is equipped to
              deliver an authentic listening experience.
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
                <span className="x-plus">1x</span>3.5mm 7.5m audio cable
              </li>
              <li>
                <span className="x-plus">1x</span>7.5m optical cable
              </li>
            </ul>
          </div>
        </div>

        <div className="gallery">
          <div className="left-side">
            <img
              src="../../../images/product-zx7-speaker/image-gallery-1.jpg"
              alt="image-gallery-1"
            />
            <img
              src="../../../images/product-zx7-speaker/image-gallery-2.jpg"
              alt="image-gallery-2"
            />
          </div>
          <img
            src="../../../images/product-zx7-speaker/image-gallery-3.jpg"
            alt="image-gallery-3"
            className="right-img"
          />
        </div>

        <div className="also">
          <h2 className="heading">You may also like</h2>

          <div className="item">
            <img
              src="../../../images/shared/image-zx9-speaker.jpg"
              alt="image-zx9-speaker"
            />
            <h3 className="item-name">zx9 speaker</h3>
            <Link to="/Audiophile/fourthitem" className="btn">
              See Product
            </Link>
          </div>
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

export default Fifthitem;
