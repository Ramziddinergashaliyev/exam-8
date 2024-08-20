import React from "react";
import img from "../../assets/images/cart.webp";
import { NavLink } from "react-router-dom";
import "./cartEmpty.scss";

const CartEmpty = () => {
  return (
    <div className="empty__wishlist">
      <p>Sevimlilar topilmadi</p>
      <img src={img} alt="" />
      <NavLink to={"/"}>
        <button>Home</button>
      </NavLink>
    </div>
  );
};

export default CartEmpty;
