import React from "react";
import { Link } from "react-router-dom";
import "./product.scss";
import { GoStarFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";

const Product = ({ product }) => {
  return (
    <div className="products__card">
      <div className="products__card__img">
        <div className="products__card__img__btns">
          <button>
            <GoHeart />
          </button>
          <button>
            <BsCart2 />
          </button>
        </div>
        <Link to={"#"}>
          <img src={product.img} alt="card-img" />
        </Link>
      </div>
      <div className="products__card__content">
        <h3>{product.title}</h3>
        <div className="products__card__rating">
          <div className="products__card__stars">
            <GoStarFill color="gold" />
            <GoStarFill color="gold" />
            <GoStarFill color="gold" />
            <GoStarFill color="gold" />
            <GoStarFill color="gold" />
          </div>
          <p>{product.rate}.0</p>
        </div>
        <div className="products__card__price">
          <p className="products__card__price-new">${product.price}</p>
          <p className="products__card__price-old">${product.oldPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
