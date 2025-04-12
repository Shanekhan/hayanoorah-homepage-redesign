import React from "react";
import "./Bags.css";
import bagImage from "../../assets/img5.jpg"; // دائیں کونے کی تصویر
import backgroundImage from "../../assets/bkimg1.jpg"; // پس منظر کی تصویر

const Bags = () => {
  return (
    <section
      className="bags"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bags-content">
        <img src={bagImage} alt="Featured Bag" className="featured-bag" />
        <div className="text-container">
          <h1>Explore our exquisite Bag Collection now!</h1>
          <button className="view-collection">View Collection</button>
        </div>
      </div>
    </section>
  );
};

export default Bags;
