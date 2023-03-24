import { Link } from "react-router-dom";

function Speakers() {
  return (
    <>
      <h1 className="sub-header">Speakers</h1>

      <section className="collection">
        <div className="item">
          <img
            src="../src/images/category-speakers/image-zx9.jpg"
            alt="image-zx9"
          />
          <div className="context">
            <h3 className="new">New Product</h3>
            <h2 className="heading">ZX9 Speaker</h2>
            <p className="text">
              Upgrade your sound system with the all new ZX9 active speaker.
              It's a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <Link to="/Audiophile/fourthitem" className="btn">
              See Product
            </Link>
          </div>
        </div>
        <div className="item">
          <img
            src="../src/images/category-speakers/image-zx7.jpg"
            alt="image-zx7"
          />
          <div className="context">
            <h2 className="heading">ZX7 Speaker</h2>
            <p className="text">
              Stream high quality sound wirelessly with minimal to no loss. The
              ZX7 speaker uses high-end audiophile components that represents
              the top of the line powered speakers for home or studio use.
            </p>
            <Link to="/Audiophile/fifthitem" className="btn">
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

export default Speakers;
