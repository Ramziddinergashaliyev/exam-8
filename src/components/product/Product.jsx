import React from "react";
import { Link } from "react-router-dom";
import "./product.scss";
import { GoStarFill } from "react-icons/go";

const Product = ({ product }) => {
    return (
        <div className="products__card">
            <div className="products__card__img">
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
                    <p className="products__card__price-new">
                        ${product.price}
                    </p>
                    <p className="products__card__price-old">
                        ${product.oldPrice}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Product;
