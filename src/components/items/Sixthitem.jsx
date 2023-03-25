import { Link } from "react-router-dom";
import { useState } from "react";
import { cartContent } from "../Navbar";
import headphonesImage from "../../assets/shared/image-headphones.png";
import speakersImage from "../../assets/shared/image-speakers.png";
import earphonesImage from "../../assets/shared/image-earphones.png";
import rightArrowIcon from "../../assets/shared/icon-arrow-right.svg";
import itemImage from "../../assets/product-yx1-earphones/image-product.jpg";
import galleryImage1 from "../../assets/product-yx1-earphones/image-gallery-1.jpg";
import galleryImage2 from "../../assets/product-yx1-earphones/image-gallery-2.jpg";
import galleryImage3 from "../../assets/product-yx1-earphones/image-gallery-3.jpg";
import alsoImage1 from "../../assets/shared/image-xx99-mark-one-headphones.jpg";
import alsoImage2 from "../../assets/shared/image-xx59-headphones.jpg";
import alsoImage3 from "../../assets/shared/image-zx9-speaker.jpg";

function Sixthitem() {
  const [itemCount, setItemCount] = useState(1);
  const items = ["YX1 Wireless Earphones", "$ 2,999", itemImage, itemCount];

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
          <img src={itemImage} alt="yx1-earphones" />
          <div className="context">
            <h3 className="new">New Product</h3>
            <h2 className="heading">
              YX1 Wireless
              <br /> Earphones
            </h2>
            <p className="text">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
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
              Experience unrivalled stereo sound thanks to innovative acoustic
              technology. With improved ergonomics designed for full day
              wearing, these revolutionary earphones have been finely crafted to
              provide you with the perfect fit, delivering complete comfort all
              day long while enjoying exceptional noise isolation and truly
              immersive sound.
            </p>
            <p className="text">
              The YX1 Wireless Earphones features customizable controls for
              volume, music, calls, and voice assistants built into both
              earbuds. The new 7-hour battery life can be extended up to 28
              hours with the charging case, giving you uninterrupted play time.
              Exquisite craftsmanship with a splash resistant design now
              available in an all new white and grey color scheme as well as the
              popular classic black.
            </p>
          </div>
          <div className="right-side">
            <h2 className="heading">In the Box</h2>
            <ul className="provides">
              <li>
                <span className="x-plus">2x</span>Earphone unit
              </li>
              <li>
                <span className="x-plus">6x</span>Multi-size earplugs
              </li>
              <li>
                <span className="x-plus">1x</span>User manual
              </li>
              <li>
                <span className="x-plus">1x</span>USB-C charging cable
              </li>
              <li>
                <span className="x-plus">1x</span>Travel pouch
              </li>
            </ul>
          </div>
        </div>

        <div className="gallery">
          <div className="left-side">
            <img src={galleryImage1} alt="image-gallery-1" />
            <img src={galleryImage2} alt="image-gallery-2" />
          </div>
          <img
            src={galleryImage3}
            alt="image-gallery-3"
            className="right-img"
          />
        </div>

        <div className="also">
          <h2 className="heading">You may also like</h2>

          <div className="item">
            <img src={alsoImage1} alt="image-xx99-mark-one-headphones" />
            <h3 className="item-name">XX99 Mark I</h3>
            <Link to="/Audiophile/seconditem" className="btn">
              See Product
            </Link>
          </div>
          <div className="item">
            <img src={alsoImage2} alt="image-xx59-headphones" />
            <h3 className="item-name">XX59</h3>
            <Link to="/Audiophile/thirditem" className="btn">
              See Product
            </Link>
          </div>
          <div className="item">
            <img src={alsoImage3} alt="image-zx9-speaker" />
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
            src={headphonesImage}
            alt="image-headphones"
            className="choice-img"
          />
          <h3 className="choice-name">HEADPHONES</h3>
          <h4 className="choice-btn">
            SHOP
            <img src={rightArrowIcon} alt="icon-arrow-right" />
          </h4>
        </Link>
        <Link to="/Audiophile/speakers" className="choice">
          <img
            src={speakersImage}
            alt="image-speakers"
            className="choice-img"
          />
          <h3 className="choice-name">SPEAKERS</h3>
          <h4 className="choice-btn">
            SHOP
            <img src={rightArrowIcon} alt="icon-arrow-right" />
          </h4>
        </Link>
        <Link to="/Audiophile/earphones" className="choice">
          <img
            src={earphonesImage}
            alt="image-earphones"
            className="choice-img"
          />
          <h3 className="choice-name">EARPHONES</h3>
          <h4 className="choice-btn">
            SHOP
            <img src={rightArrowIcon} alt="icon-arrow-right" />
          </h4>
        </Link>
      </section>
    </>
  );
}

export default Sixthitem;
