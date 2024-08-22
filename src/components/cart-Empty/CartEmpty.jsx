import React from "react";
import img from "../../assets/images/cart.webp";
import { NavLink } from "react-router-dom";
import "./cartEmpty.scss";

const CartEmpty = () => {
  return (
    <div className="empty__wishlist">
      <img src={img} alt="" />
      <p>Sevimlilar topilmadi</p>
      <NavLink to={"/"}>
        <button>Home</button>
      </NavLink>
    </div>
  );
};

export default CartEmpty;
