import { Link } from "react-router-dom";

function Earphones() {
  return (
    <>
      <h1 className="sub-header">Earphones</h1>

      <section className="collection">
        <div className="item">
          <img
            src="../..//images/category-earphones/image-yx1-earphones.jpg"
            alt="image-yx1-earphones"
          />
          <div className="context">
            <h3 className="new">New Product</h3>
            <h2 className="heading">
              YX1 Wireless
              <br />
              Earphones
            </h2>
            <p className="text">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <Link to="/Audiophile/sixthitem" className="btn">
              See Product
            </Link>
          </div>
        </div>
      </section>

      <section className="choices">
        <Link to="/Audiophile/headphones" className="choice">
          <img
            src="../..//images/shared/image-headphones.png"
            alt="image-headphones"
            className="choice-img"
          />
          <h3 className="choice-name">HEADPHONES</h3>
          <h4 className="choice-btn">
            SHOP
            <img
              src="../..//images/shared/icon-arrow-right.svg"
              alt="icon-arrow-right"
            />
          </h4>
        </Link>
        <Link to="/Audiophile/speakers" className="choice">
          <img
            src="../..//images/shared/image-speakers.png"
            alt="image-speakers"
            className="choice-img"
          />
          <h3 className="choice-name">SPEAKERS</h3>
          <h4 className="choice-btn">
            SHOP
            <img
              src="../..//images/shared/icon-arrow-right.svg"
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
    </>
  );
}

export default Earphones;
