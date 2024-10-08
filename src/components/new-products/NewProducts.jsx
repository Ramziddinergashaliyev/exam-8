import React from "react";
import { NEW_PRODUCTS } from "../../static/index";
import "./newProducts.scss";
import Products from "../products/Products";
import { useGetProductsQuery } from "../../context/api/productApi";
import Loading from "../loading/Loading";
import { NavLink } from "react-router-dom";

const NewProducts = () => {
  const { data } = useGetProductsQuery({ limit: 4 });
  console.log(data);
  return (
    <section id="new">
      <div className="container">
        <div className="new">
          <h2 className="section-title">NEW ARRIVALS</h2>
          {data ? (
            <div className="new__products">
              <Products data={data?.payload} />
            </div>
          ) : (
            <Loading />
          )}
          <NavLink to={"/shop"} className="view-all__btn">
            View All
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
