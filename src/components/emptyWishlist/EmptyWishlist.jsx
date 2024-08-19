import React from "react";
import img from "../../assets/images/wishlist.webp";
import { NavLink } from "react-router-dom";
import "./emptyWishlist.scss";

const EmptyWishlist = () => {
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

export default EmptyWishlist;
