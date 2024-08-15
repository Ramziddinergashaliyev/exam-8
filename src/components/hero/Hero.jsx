import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left container">
        <h1 className="hero__left__title">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="hero__left__text">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="hero__left__btn">Shop Now</button>
        <div className="hero__left__result">
          <div className="hero__left__result__card">
            <h1>200+</h1>
            <span>International Brands</span>
          </div>
          <div className="hero__left__result__card">
            <h1>2,000+</h1>
            <span>High-Quality Products</span>
          </div>
          <div className="hero__left__result__card">
            <h1>30,000+</h1>
            <span>Happy Customers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
