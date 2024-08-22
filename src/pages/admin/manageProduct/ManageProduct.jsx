import React, { useState } from "react";
import { useGetProductsQuery } from "../../../context/api/productApi";
import Products from "../../../components/products/Products";

import "./manageProduct.scss";

const ManageProduct = () => {
  const [isTrue, setIsTrue] = useState(true);
  const { data } = useGetProductsQuery({ limit: 10 });
  return (
    <div className="manage__products">
      <Products isTrue={isTrue} data={data?.payload} />
    </div>
  );
};

export default ManageProduct;
