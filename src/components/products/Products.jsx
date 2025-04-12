import React from "react"
import pimg1 from "../../assets/pimg1.jpg"
import pimg2 from "../../assets/pimg2.jpg"
import pimg3 from "../../assets/pimg3.jpg"
import pimg4 from "../../assets/pimg4.jpg"
import "./Products.css"

const Products = () => {
  const products = [
    { id: 1, img: pimg1, category: "Activewear", name: "Professional Pinstripe Blazer", price: "109,99 Kč" },
    { id: 2, img: pimg2, category: "Work & Office", name: "Relaxed Fit Joggers", price: "250,00 Kč" },
    { id: 3, img: pimg3, category: "Evening Dresses", name: "Urban Chic Ensemble", price: "224,95 Kč" },
    { id: 4, img: pimg4, category: "Activewear", name: "Weekend Wanderlust Wardrobe", price: "119,95 Kč" },
  ]

  return (
    <div className="products">
      <h1>Newest Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <div className="product-info">
              <p className="category">{product.category}</p>
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
