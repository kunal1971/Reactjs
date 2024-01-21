import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./Header";
import Footer from "./Footer";

const ItemPage = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${itemId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [itemId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <h3
        style={{ textAlign: "center", paddingRight: "20px", marginTop: "50px" }}
      >
        {product.title}
      </h3>

      <div
        style={{
          maxWidth: "800px",
          margin: "20px auto",
          border: "1px solid black",
          borderRadius: "2px",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Carousel animation="slide">
          {product.images.map((image, index) => (
            <div
              key={index}
              style={{
                display: "block",
                width: "100%",
                height: "350px",
              }}
            >
              <img
                src={image}
                alt={`Item ${index + 1}`}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
        }}
      >
        <button
          className="add-to-cart-button"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          Add to Cart
        </button>
      </div>
      
      {/* No specific functionality of button added , just for appearance on the product page */}

      <div
        style={{
          margin: "20px auto",
          maxWidth: "600px",
          textAlign: "left",
          border: "1px solid black",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}>
          Item Details
        </h3>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Discount:</strong> {product.discountPercentage}%
        </p>
        <p>
          <strong>Rating:</strong> {product.rating}
        </p>
        <p>
          <strong>Stock:</strong> {product.stock}
        </p>
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default ItemPage;
