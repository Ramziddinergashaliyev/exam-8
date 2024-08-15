import React from "react";
import Product from "../product/Product";

const Products = ({ data }) => {
  return (
    <>
      {data?.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </>
  );
};

export default Products;
