import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/nav/Navbar"
import Home from "./components/home/Home"
import Categories from "./components/Categories/Categories"
import Bags from "./components/bag/Bags"
import Attire from "./components/attire/Attire"
import Fashion from "./components/fashio/Fashion"
import Products from "./components/products/Products"
import About from "./components/about/About"
import Testimonals from "./components/test/Testimonals"
import Style from "./components/styl2/Style"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Home/>
      <Categories/>
      <Bags/>
      <Attire/>
      <Fashion/>
      <Products/>
      <About/>
      <Testimonals/>
      <Style/>
      <Footer/>
    </Router>
  )
}

export default App
