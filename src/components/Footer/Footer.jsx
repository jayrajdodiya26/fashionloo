import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Welcome to fashion loo, home of fashion</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Welcome to fashion loo, home of fashion</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Fashion Loo</span>
          <span className="copyright">Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
