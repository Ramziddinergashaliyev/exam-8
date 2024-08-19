import React from "react";
import "./wishlist.scss";
import { useSelector } from "react-redux";
import Products from "../../components/products/Products";
import EmptyWishlist from "../../components/emptyWishlist/EmptyWishlist";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);

  return (
    <>
      {wishlist.length > 0 ? (
        <div className="new__products container">
          <Products data={wishlist} />
        </div>
      ) : (
        <EmptyWishlist />
      )}
    </>
  );
};

export default Wishlist;
