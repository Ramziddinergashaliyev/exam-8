import React from "react";
import { TOP_PRODUCTS } from "../../static";
import "./topProducts.scss";
import Products from "../products/Products";
import { useGetProductsQuery } from "../../context/api/productApi";
import { NavLink } from "react-router-dom";
import Loading from "../loading/Loading";

const TopProducts = () => {
  const { data, isLoading } = useGetProductsQuery({ limit: 4 });
  return (
    <section id="top">
      <div className="container">
        <div className="top">
          <h2 className="section-title">TOP SELLING</h2>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="top__products">
              <Products data={data?.payload} />
            </div>
          )}
          <NavLink to={"/shop"} className="view-all__btn">
            View All
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
