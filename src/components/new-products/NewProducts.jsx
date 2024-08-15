import React from "react";
import { NEW_PRODUCTS } from "../../static/index";
import "./newProducts.scss";
import Products from "../products/Products";

const NewProducts = () => {
  let data = NEW_PRODUCTS;
  return (
    <section id="new">
      <div className="container">
        <div className="new">
          <h2 className="section-title">NEW ARRIVALS</h2>
          <div className="new__products">
            <Products data={data} />
          </div>
          <button className="view-all__btn">View All</button>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
