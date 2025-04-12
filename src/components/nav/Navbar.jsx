import React, { useState, useEffect } from "react"
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { FaSearch, FaShoppingCart, FaMoon, FaSun } from "react-icons/fa"

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  )

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode")
      document.body.classList.remove("light-mode")
      localStorage.setItem("darkMode", "enabled")
    } else {
      document.body.classList.add("light-mode")
      document.body.classList.remove("dark-mode")
      localStorage.setItem("darkMode", "disabled")
    }
  }, [darkMode])

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Hayanoora Logo" />
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="nav-icons">
        <FaSearch className="icon" />
        <FaShoppingCart className="icon" />
        {/* ✅ Dark Mode Toggle */}
        <button className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
