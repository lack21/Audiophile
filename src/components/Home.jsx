import { Link } from "react-router-dom";

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
            src="../assets/shared/image-headphones.png"
            alt="image-headphones"
            className="choice-img"
          />
          <h3 className="choice-name">HEADPHONES</h3>
          <h4 className="choice-btn">
            SHOP
            <img
              src="../src/assets/shared/icon-arrow-right.svg"
              alt="icon-arrow-right"
            />
          </h4>
        </Link>
        <Link to="/Audiophile/speakers" className="choice">
          <img
            src="/Audiophile/assets/shared/image-speakers.png"
            alt="image-speakers"
            className="choice-img"
          />
          <h3 className="choice-name">SPEAKERS</h3>
          <h4 className="choice-btn">
            SHOP
            <img
              src="../src/assets/shared/icon-arrow-right.svg"
              alt="icon-arrow-right"
            />
          </h4>
        </Link>
        <Link to="/Audiophile/earphones" className="choice">
          <img
            src="../..//images/shared/image-earphones.png"
            alt="image-earphones"
            className="choice-img"
          />
          <h3 className="choice-name">EARPHONES</h3>
          <h4 className="choice-btn">
            SHOP
            <img
              src="../..//images/shared/icon-arrow-right.svg"
              alt="icon-arrow-right"
            />
          </h4>
        </Link>
      </section>

      <section className="banner">
        <div className="top-banner">
          <img
            src="../..//images/home/image-speaker-zx9.png"
            alt="image"
            className="top-banner-img"
          />
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
