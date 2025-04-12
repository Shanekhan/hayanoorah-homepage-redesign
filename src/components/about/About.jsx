import React from "react";
import { FaStar } from "react-icons/fa"; // Import the star icon
import "./About.css"; // Import the CSS for About section

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        {/* ⭐⭐⭐⭐⭐ Golden Rating */}
        <div className="stars">
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
        </div>

        {/* Testimonial */}
        <p>
          FemmeWardrobe is my fashion sanctuary! The curated collection
          effortlessly blends chic trends with timeless elegance, making every
          purchase a delightful discovery. The quality of their pieces is unmatched,
          and I appreciate the brand's commitment to sustainable fashion. What
          truly sets FemmeWardrobe apart is their customer-centric approach.
        </p>
        <p className="customer-name">Sarah M., Devoted FemmeWardrobe Fan</p>
      </div>
    </section>
  );
};

export default About;
