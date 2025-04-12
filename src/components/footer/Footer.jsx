import React from "react"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1 - Info */}
        <div>
          <h3>Info</h3>
          <ul>
            <li><a href="#">Formats</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">Policy</a></li>
          </ul>
        </div>

        {/* Column 2 - Getting Started */}
        <div>
          <h3>Getting Started</h3>
          <ul>
            <li><a href="#">Introduction</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Usages</a></li>
            <li><a href="#">Global</a></li>
          </ul>
        </div>

        {/* Column 3 - Resources */}
        <div>
          <h3>Resources</h3>
          <ul>
            <li><a href="#">API</a></li>
            <li><a href="#">Customization</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Visibility</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div className="newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for updates, tips, and exclusive offers.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
        </div>
        <p>© 2024 Hayaoorah Brands. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
