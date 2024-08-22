import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import "./manageCategory.scss";
import {
  useDeleteCategoryMutation,
  useGetCategorysQuery,
} from "../../../context/api/categoryApi";

const ManageCategory = () => {
  const { data } = useGetCategorysQuery();
  const [deleteCategory] = useDeleteCategoryMutation();

  const handleDelete = (id) => {
    const categoryDelete = window.confirm("Category O'chirilsinmi");
    if (categoryDelete) {
      deleteCategory(id);
    }
  };

  const categoryData = data?.payload?.map((el) => (
    <div key={el?.id} className="categoryManage__card">
      <h4>{el?.title}</h4>
      <div className="categoryManage__card-btns">
        <button onClick={() => handleDelete(el?._id)}>
          <AiOutlineDelete />
        </button>
        <button className="categoryManage__card-edit">
          <CiEdit />
        </button>
      </div>
    </div>
  ));

  return (
    <div className="categoryManage">
      <div className="categoryManage__cards">{categoryData}</div>
    </div>
  );
};

export default ManageCategory;
