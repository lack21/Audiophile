import { Link } from "react-router-dom";
import headphonesImage from "../assets/shared/image-headphones.png";
import speakersImage from "../assets/shared/image-speakers.png";
import earphonesImage from "../assets/shared/image-earphones.png";
import rightArrowIcon from "../assets/shared/icon-arrow-right.svg";
import headphoneImage1 from "../assets/shared/image-xx99-mark-two-headphones.jpg";
import headphoneImage2 from "../assets/shared/image-xx99-mark-one-headphones.jpg";
import headphoneImage3 from "../assets/shared/image-xx59-headphones.jpg";

function Headphones() {
  return (
    <>
      <h1 className="sub-header">Headphones</h1>

      <section className="collection">
        <div className="item">
          <img src={headphoneImage1} alt="image-xx99-mark-two-headphones" />
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
            <Link to="/Audiophile/firstitem" className="btn">
              See Product
            </Link>
          </div>
        </div>
        <div className="item">
          <img src={headphoneImage2} alt="image-xx99-mark-one-headphones" />
          <div className="context">
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
            <Link to="/Audiophile/seconditem" className="btn">
              See Product
            </Link>
          </div>
        </div>
        <div className="item">
          <img src={headphoneImage3} alt="image-xx59-headphones" />
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
            <Link to="/Audiophile/thirditem" className="btn">
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

export default Headphones;
