import React from "react";
import "./Attire.css";


const Attire = () => {
  return (
    <section className="attire">
      {/* Left Side - Text Section */}
      <div className="attire-text">
        <h6>Work & Office Attire</h6>
        <h1>Professional Pinstripe Blazers Collection</h1>
        <p>
          Elevate your workwear with our Professional Pinstripe Blazers
          Collection, where tailored sophistication meets modern confidence for
          a powerfully polished office look.
        </p>
        <button className="shop-now">Shop Now</button>
      </div>

      {/* Right Side - Full Height Image */}
      <div className="attire-img"></div>
    </section>
  );
};

export default Attire;
