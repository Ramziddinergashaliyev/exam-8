import React from "react";
import "./brands.scss";

import img1 from "../../assets/brand/logo1.png";
import img2 from "../../assets/brand/logo2.jpg";
import img3 from "../../assets/brand/logo3.png";
import img4 from "../../assets/brand/logo4.png";
import img5 from "../../assets/brand/logo6.jpg";
import img6 from "../../assets/brand/logo16.png";
import img7 from "../../assets/brand/logo18.png";
import img8 from "../../assets/brand/logo20.png";
import img9 from "../../assets/brand/logo21.jpg";
import img10 from "../../assets/brand/logo22.png";
import img11 from "../../assets/brand/logo24.png";
import img12 from "../../assets/brand/logo25.png";

const Brands = () => {
  return (
    <div className="scroll-box container">
      <div className="scroll">
        <div>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
          <img src={img10} alt="" />
          <img src={img11} alt="" />
          <img src={img12} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
