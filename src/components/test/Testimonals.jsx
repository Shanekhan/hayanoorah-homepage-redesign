import React from 'react';
import { FaLock, FaTruck, FaUndo, FaMapMarkedAlt } from 'react-icons/fa';
import './Testimonals.css';  // Import the CSS for Testimonial

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-item">
        <FaLock />
        <p>Secure Payments</p>
        <p>Shop with confidence knowing that your transactions are safeguarded.</p>
      </div>

      <div className="testimonial-item">
        <FaTruck />
        <p>Free Shipping</p>
        <p>Shopping with no extra charges – savor the liberty of complimentary shipping on every order.</p>
      </div>

      <div className="testimonial-item">
        <FaUndo />
        <p>Easy Returns</p>
        <p>With our hassle-free Easy Returns, changing your mind has never been more convenient.</p>
      </div>

      <div className="testimonial-item">
        <FaMapMarkedAlt />
        <p>Order Tracking</p>
        <p>Stay in the loop with our Order Tracking feature – from checkout to your doorstep.</p>
      </div>
    </div>
  );
}

export default Testimonial;
