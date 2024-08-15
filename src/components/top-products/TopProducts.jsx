import React from "react";
import { TOP_PRODUCTS } from "../../static";
import "./topProducts.scss";
import Products from "../products/Products";

const TopProducts = () => {
  let data = TOP_PRODUCTS;
  return (
    <section id="top">
      <div className="container">
        <div className="top">
          <h2 className="section-title">TOP SELLING</h2>
          <div className="top__products">
            <Products data={data} />
          </div>
          <button className="view-all__btn">View All</button>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
