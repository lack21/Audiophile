import { Link } from "react-router-dom";
import { useState } from "react";
import { cartContent } from "../Navbar";
import headphonesImage from "../../assets/shared/image-headphones.png";
import speakersImage from "../../assets/shared/image-speakers.png";
import earphonesImage from "../../assets/shared/image-earphones.png";
import rightArrowIcon from "../../assets/shared/icon-arrow-right.svg";
import itemImage from "../../assets/shared/image-xx59-headphones.jpg";
import galleryImage1 from "../../assets/product-xx59-headphones/image-gallery-1.jpg";
import galleryImage2 from "../../assets/product-xx59-headphones/image-gallery-2.jpg";
import galleryImage3 from "../../assets/product-xx59-headphones/image-gallery-3.jpg";
import alsoImage1 from "../../assets/shared/image-xx99-mark-two-headphones.jpg";
import alsoImage2 from "../../assets/shared/image-xx99-mark-one-headphones.jpg";
import alsoImage3 from "../../assets/shared/image-zx9-speaker.jpg";

function Thirditem() {
  const [itemCount, setItemCount] = useState(1);
  const items = ["XX59", "$ 899", itemImage, itemCount];

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
          <img src={itemImage} alt="image-xx99-mark-two-headphones" />
          <div className="context">
            <h2 className="heading">
              XX59
              <br />
              Headphones
            </h2>
            <p className="text">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <h4 className="price">$ 899</h4>

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
              These headphones have been created from durable, high-quality
              materials tough enough to take anywhere. Its compact folding
              design fuses comfort and minimalist style making it perfect for
              travel. Flawless transmission is assured by the latest wireless
              technology engineered for audio synchronization with videos.
            </p>
            <p className="text">
              More than a simple pair of headphones, this headset features a
              pair of built-in microphones for clear, hands-free calling when
              paired with a compatible smartphone. Controlling music and calls
              is also intuitive thanks to easy-access touch buttons on the
              earcups. Regardless of how you use the XX59 headphones, you can do
              so all day thanks to an impressive 30-hour battery life that can
              be rapidly recharged via USB-C.
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
            <img src={alsoImage1} alt="image-xx99-mark-two-headphones" />
            <h3 className="item-name">XX99 Mark II</h3>
            <Link to="/Audiophile/firstitem" className="btn">
              See Product
            </Link>
          </div>
          <div className="item">
            <img src={alsoImage2} alt="image-xx99-mark-one-headphones" />
            <h3 className="item-name">XX99 Mark I</h3>
            <Link to="/Audiophile/seconditem" className="btn">
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

export default Thirditem;
