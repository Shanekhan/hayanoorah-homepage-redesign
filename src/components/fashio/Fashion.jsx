import React from "react";
import "./Fashion.css";
import fashionImage from "../../assets/attire3.avif";

const Fashion = () => {
  return (
    <section className="fashion">
      {/* ✅ Image on top & Overlapping */}
      <img src={fashionImage} alt="Fashion Collection" className="featured-fashion" />

      <div className="fashion-content">
        <h1>Discover the allure of fashion reinvented!</h1>
        <p>
          Dive into a world of style with our latest collection! Shop now and redefine your wardrobe narrative!
        </p>
        <button className="shop-now">Shop Now</button>
      </div>
    </section>
  );
};

export default Fashion;
