import React from "react";
import { useGetProductsQuery } from "../../../context/api/productApi";
import Products from "../../../components/products/Products";

import "./manageProduct.scss";

const ManageProduct = () => {
  const { data } = useGetProductsQuery({ limit: 10 });
  return (
    <div className="manage__products">
      <Products data={data?.payload} />
    </div>
  );
};

export default ManageProduct;
