import React from "react";
import img from "../../assets/images/wishlist.webp";
import { NavLink } from "react-router-dom";
import "./emptyWishlist.scss";

const EmptyWishlist = () => {
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

export default EmptyWishlist;
