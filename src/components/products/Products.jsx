import React from "react";
import Product from "../product/Product";

const Products = ({ data }) => {
  return (
    <>
      {data?.slice(0, 4)?.map((product) => (
        <Product product={product} key={product?._id} />
      ))}
    </>
  );
};

export default Products;
