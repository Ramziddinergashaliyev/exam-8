import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import "./manageCategory.scss";
import {
  useDeleteCategoryMutation,
  useGetCategorysQuery,
  useUpdateCategoryMutation,
} from "../../../context/api/categoryApi";
import Module from "../../../components/module/Module";

const ManageCategory = () => {
  const { data } = useGetCategorysQuery();
  const [deleteCategory] = useDeleteCategoryMutation();
  const [updete] = useUpdateCategoryMutation();
  const [hide, setHide] = useState(false);

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
        <button
          onClick={() => setHide(true)}
          className="categoryManage__card-edit"
        >
          <CiEdit />
        </button>
      </div>
    </div>
  ));

  return (
    <div className="categoryManage">
      {hide ? (
        <Module width={500} close={setHide} bg={"#aaa6"}>
          <div className="categoryManage__form">
            <input type="text" />
            <button>save</button>
          </div>
        </Module>
      ) : (
        <></>
      )}
      <div className="categoryManage__cards">{categoryData}</div>
    </div>
  );
};

export default ManageCategory;
