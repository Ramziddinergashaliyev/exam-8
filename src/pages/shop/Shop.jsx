import React from "react";
import "./shop.scss";
import { useGetProductsQuery } from "../../context/api/productApi";
import Products from "../../components/products/Products";
import { TbFilters } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa6";

const Shop = () => {
  const { data } = useGetProductsQuery();
  return (
    <div className="shop container">
      <div className="shop__left">
        <div className="shop__left-top">
          <h3>Filters</h3>
          <TbFilters />
        </div>
        <ul className="shop__left-list">
          <li className="shop__left-item">
            T-shirts
            <FaChevronRight />
          </li>
          <li className="shop__left-item">
            Shorts
            <FaChevronRight />
          </li>
          <li className="shop__left-item">
            Shirts
            <FaChevronRight />
          </li>
          <li className="shop__left-item">
            Hoodie
            <FaChevronRight />
          </li>
          <li className="shop__left-item">
            Jeans
            <FaChevronRight />
          </li>
        </ul>
        <div className="shop__left-price">
          <h3>
            Price
            <FaChevronRight />
          </h3>
        </div>
        <div className="shop__left-colors">
          <h2>
            Colors
            <FaChevronRight />
          </h2>
          <div className="shop__left-color">
            <span className="shop__left-color-item shop__left-color-blue"></span>
            <span className="shop__left-color-item shop__left-color-red"></span>
            <span className="shop__left-color-item shop__left-color-yellow"></span>
            <span className="shop__left-color-item shop__left-color-orange"></span>
            <span className="shop__left-color-item shop__left-color-green"></span>
            <span className="shop__left-color-item shop__left-color-aqua"></span>
            <span className="shop__left-color-item shop__left-color-black"></span>
            <span className="shop__left-color-item shop__left-color-grey"></span>
          </div>
        </div>
        <div className="shop__left-size">
          <h2>
            Size
            <FaChevronRight />
          </h2>
          <div className="shop__left-size-btns">
            <button>XX-Small</button>
            <button>X-Small</button>
            <button>Small</button>
            <button>Medium</button>
            <button>Large</button>
            <button>X-Large</button>
            <button>XX-Large</button>
            <button>3X-Large</button>
            <button>4X-Large</button>
          </div>
        </div>
      </div>
      <div className="shop__right">
        <h2>Casual</h2>
        <div className="shop__right-card">
          <Products data={data?.payload} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
