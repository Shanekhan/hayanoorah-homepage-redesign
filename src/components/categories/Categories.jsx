import React from "react";
import "./Categroie.css";
import img1 from "../../assets/img1.jpg"; // Replace with actual image paths
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.jfif";
import img4 from "../../assets/img4.jfif";

const Categories = () => {
  const dresses = [
    { img: img1, category: "Office Wear", name: "Elegant Blazer Dress", price: "$120" },
    { img: img2, category: "Party Wear", name: "Luxury Evening Gown", price: "$180" },
    { img: img3, category: "Casual Wear", name: "Cozy Winter Dress", price: "$90" },
    { img: img4, category: "Evening Dresses", name: "Silk Maxi Dress", price: "$150" },
  ];

  return (
    <section className="categories">
      <h1>Most Popular</h1>
      <div className="category-grid">
        {dresses.map((dress, index) => (
          <div className="category-item" key={index}>
            <img src={dress.img} alt={dress.name} />
            <p>{dress.category}</p>
            <h3>{dress.name}</h3>
            <h4>{dress.price}</h4>
            <div className="sizes">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button key={size}>{size}</button>
              ))}
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
