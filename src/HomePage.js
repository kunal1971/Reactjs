import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Carousel from "react-material-ui-carousel";
import Header from "./Header";
import Footer from "./Footer";


const HomePage = () => {
  const [filterProducts, setFilterProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setFilterProducts(data.products);
      });
  }, []);

  useEffect(
    function () {
      var filtered = products.filter(
        (product) =>
          product.title &&
          product.title.toLowerCase().search(searchTerm.toLowerCase()) > -1
      );
      setFilterProducts(filtered);
    },
    [searchTerm]
  );

  // Pagination
  const Paginate = function (filteredArr, pageNumber) {
    var indexStart = (pageNumber - 1) * productsPerPage;
    return filteredArr.slice(indexStart, indexStart + productsPerPage);
  };

  return (
    <div>
      <Header />
      <div
        style={{
          border: "1px solid black",
          borderRadius: "8px",
          overflow: "hidden",
          margin: "20px",
        }}
      >
        <Carousel animation="slide">
          {products.slice(0, 5).map((product) => (
            <Link
              to={`/item/${product.id}`}
              key={product.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  display: "block",
                  width: "100%",
                  height: "70vh",
                  backgroundImage: `url(${product.images[0]})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </Link>
          ))}
        </Carousel>
      </div>

      <h2 style={{ textAlign: "center", color: "black" }}>Products</h2>

      <TextField
        variant="outlined"
        label="Type to search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "70%",
          maxWidth: "300px",
          margin: "20px auto",
          backgroundColor: "white",
          position: "relative",
          left: "20px",
        }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {Paginate(filterProducts, currentPage).map((product) => (
          <Link key={product.id} to={`/item/${product.id}`}>
            <div
              style={{
                width: "210px",
                height: "auto",
                margin: "16px",
                border: "1px solid black",
                padding: "16px",
                borderRadius: "8px",
              }}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                style={{ width: "210px", height: "225px" }}
              />
              <p
                style={{ margin: "8px 0", fontWeight: "bold", color: "black" }}
              >
                {product.title}
              </p>
              <p style={{ color: "black" }}>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        {Array.from(
          { length: Math.ceil(filterProducts.length / productsPerPage) },
          (_, index) => (
            <button key={index + 1} onClick={() => setCurrentPage(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
