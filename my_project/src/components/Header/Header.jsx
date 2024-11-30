import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importing Link for navigation
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState(""); // State for the search input

  return (
    <header
      style={{
        backgroundColor: "#FFEBE8",
        padding: "20px 50px", // Increased padding for height
        boxShadow: "none", // Removing any border or box shadow
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Logo Section */}
      <div>
        <h1
          style={{
            fontFamily: "Arial, sans-serif",
            color: "#FF5C5C",
            margin: 0,
          }}
        >
          PlatinumRx
        </h1>
      </div>

      {/* Search Bar Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "50%",
          marginLeft: "20px", // Slight margin for spacing
          borderRadius: "30px",
          backgroundColor: "#fff",
          padding: "10px 20px",
        }}
      >
        {/* Search Icon */}
        <FaSearch style={{ color: "#888", fontSize: "20px" }} />

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for medicines..."
          style={{
            border: "none",
            outline: "none",
            flexGrow: 1,
            padding: "10px",
            fontSize: "16px",
            borderRadius: "30px",
            marginLeft: "10px",
          }}
        />

        {/* Search Button */}
        <button
          onClick={() => console.log(searchQuery)}
          style={{
            backgroundColor: "#FF5C5C",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            borderRadius: "30px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      {/* Navigation Links */}
      <nav style={{ display: "flex", alignItems: "center" }}>
        <Link
          to="/how-to-order-medicine"
          style={{
            margin: "0 15px",
            textDecoration: "none",
            color: "#333",
          }}
        >
          How to order medicine
        </Link>
        <Link
          to="/contact"
          style={{
            margin: "0 15px",
            textDecoration: "none",
            color: "#333",
          }}
        >
          Contact Us
        </Link>
        <Link
          to="/login"
          style={{
            margin: "0 15px",
            textDecoration: "none",
            color: "#333",
          }}
        >
          Login
        </Link>
        <Link
          to="/cart"
          style={{
            margin: "0 15px",
            textDecoration: "none",
            color: "#FF5C5C",
          }}
        >
          Cart
        </Link>
      </nav>
    </header>
  );
}
