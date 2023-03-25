import { Link } from "react-router-dom";
import headphonesImage from "../assets/shared/image-headphones.png";
import speakersImage from "../assets/shared/image-speakers.png";
import earphonesImage from "../assets/shared/image-earphones.png";
import rightArrowIcon from "../assets/shared/icon-arrow-right.svg";
import bannerImage from "../assets/home/image-speaker-zx9.png";

function Home() {
  return (
    <>
      <header className="header">
        <h4 className="new">NEW PRODUCT</h4>
        <h1 className="title">
          XX99 Mark II
          <br />
          Headphones
        </h1>
        <p className="sub-title">
          Experience natural, lifelike audio and exceptional
          <br />
          build quality made for the passionate music
          <br />
          enthusiast.
        </p>
        <Link to="/Audiophile/firstitem" className="btn">
          SEE PRODUCT
        </Link>
      </header>

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

      <section className="banner">
        <div className="top-banner">
          <img src={bannerImage} alt="image" className="top-banner-img" />
          <div className="top-banner-content">
            <h2 className="heading">
              ZX9
              <br />
              Speaker
            </h2>
            <p className="text">
              Upgrade to premium speakers that are
              <br />
              phenomenally built to deliver truly remarkable
              <br />
              sound.
            </p>
            <Link to="/Audiophile/fourthitem" className="top-banner-btn">
              See Product
            </Link>
          </div>
        </div>
        <div className="center-banner">
          <h2 className="sub-heading">ZX7 Speaker</h2>
          <Link to="/Audiophile/fifthitem" className="center-banner-btn">
            See Product
          </Link>
        </div>
        <div className="bottom-banner">
          <div className="left-banner"></div>
          <div className="right-banner">
            <h2 className="sub-heading">YX1 Earphones</h2>
            <Link to="/Audiophile/sixthitem" className="right-banner-btn">
              See Product
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
