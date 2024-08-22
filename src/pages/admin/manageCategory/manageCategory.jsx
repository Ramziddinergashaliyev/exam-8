import React, { useState } from "react";
import { LuFileEdit } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";
import "./manageCategory.scss";
import {
  useDeleteCategoryMutation,
  useGetCategorysQuery,
} from "../../../context/api/categoryApi";

const ManageCategory = () => {
  const { data } = useGetCategorysQuery();
  const [deleteCategory] = useDeleteCategoryMutation();
  console.log(data);

  const categoryData = data?.payload?.map((el) => (
    <div key={el?.id} className="category__card">
      <h4>{el?.title}</h4>
      <div className="category__card-btns">
        <button onClick={() => deleteCategory(el?._id)}>
          <AiOutlineDelete />
        </button>
        <button className="category__card-edit">
          <LuFileEdit />
        </button>
      </div>
    </div>
  ));

  return (
    <div className="category">
      <div className="category__cards">{categoryData}</div>
    </div>
  );
};

export default ManageCategory;
