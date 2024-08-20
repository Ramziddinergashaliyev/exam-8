import React from "react";
import { Link } from "react-router-dom";
import "./product.scss";
import { GoStarFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { toggleHeart } from "../../context/slices/wishlistSlice";
import { IoIosHeartEmpty } from "react-icons/io";
import { addToCart } from "../../context/slices/cartSlice";
import { BsFillCartFill } from "react-icons/bs";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);
  return (
    <div className="products__card">
      <div className="products__card__img">
        <div className="products__card__img__btns">
          <button onClick={() => dispatch(toggleHeart(product))}>
            {wishlist?.some((list) => list._id === product._id) ? (
              <FaHeart color="red" />
            ) : (
              <IoIosHeartEmpty color="black" />
            )}
          </button>
          <button onClick={() => dispatch(addToCart(product))}>
            {cart?.some((list) => list._id === product._id) ? (
              <BsFillCartFill color="black" />
            ) : (
              <BsCart2 color="black" />
            )}
          </button>
        </div>
        <Link to={`/single/${product?._id}`}>
          <img src={product?.urls?.[0]} alt="card-img" />
        </Link>
      </div>
      <div className="products__card__content">
        <h3>{product?.title}</h3>
        <div className="products__card__rating">
          <div className="products__card__stars">
            <GoStarFill color="gold" />
            <GoStarFill color="gold" />
            <GoStarFill color="gold" />
            <GoStarFill color="gold" />
            <GoStarFill color="gold" />
          </div>
          <p>{product?.rating}</p>
        </div>
        <div className="products__card__price">
          <p className="products__card__price-new">${product?.price}</p>
          <p className="products__card__price-old">${product?.oldPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
