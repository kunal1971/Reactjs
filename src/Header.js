import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import logo1 from "./logo1.avif";

const Header = () => {
  return (
    <header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          background: "#354F52",
          color: "black",
        }}
      >
        <Link to="/">
          <img
            src={logo1}
            alt="Webpage Logo"
            style={{ height: "60px", width: "auto" }}
          />
        </Link>
        <h2 style={{ textAlign: "center", color: "black" }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Online Shopping Website
          </Link>
        </h2>
        <div>
          <FaUser style={{ marginRight: "10px" }} />
          <FaShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default Header;
