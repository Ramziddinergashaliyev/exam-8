import React from "react";
import img from "../../assets/icons/bars.svg";
import people from "../../assets/icons/img.jfif";
import "./menu.scss";

function Menu({ setClose }) {
  return (
    <div className="products__top">
      <img onClick={() => setClose((p) => !p)} src={img} alt="" />
    </div>
  );
}

export default Menu;
