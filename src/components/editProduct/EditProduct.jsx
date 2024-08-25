import React, { useState } from "react";
import "./editProduct.scss";
import { useGetCategorysQuery } from "../../context/api/categoryApi";

const EditProduct = () => {
  const { categoryId } = useGetCategorysQuery();
  return (
    <div className="edit__product">
      <h3>Edit Product</h3>
      <form>
        <div className="edit__product__group">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" placeholder="Product Title" />
        </div>
        <div className="edit__product__group">
          <label htmlFor="price">Price</label>
          <input id="price" type="text" placeholder="Product Price" />
        </div>
        <div className="edit__product__group">
          <label htmlFor="desc">Description</label>
          <input id="desc" type="text" placeholder="Product Description" />
        </div>
        <div className="edit__product__group">
          <label htmlFor="units">Units</label>
          <input id="units" type="text" placeholder="Product Units" />
        </div>
        <button className="edit__product__group-btn" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
