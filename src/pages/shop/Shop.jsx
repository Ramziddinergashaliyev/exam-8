import React from "react";
import "./shop.scss";
import { useGetProductsQuery } from "../../context/api/productApi";
import Products from "../../components/products/Products";

const Shop = () => {
  const { data } = useGetProductsQuery();
  return (
    <div className="shop container">
      <div className="shop__left">
        <h1>Logo</h1>
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
