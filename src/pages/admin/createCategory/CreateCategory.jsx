import React, { useState } from "react";
import { useCreateCategoryMutation } from "../../../context/api/categoryApi";

const initialState = {
  title: "",
};

import "./createCategry.scss";

const CreateCategory = () => {
  const [create, setCreate] = useState(initialState);
  const [createCategory] = useCreateCategoryMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory(create);
    setCreate(initialState);
  };

  const handleChange = (e) => {
    setCreate({ ...create, title: e.target.value });
  };

  return (
    <div className="category">
      <h2>Create Category</h2>
      <form className="category__create" onSubmit={handleSubmit}>
        <input
          required
          placeholder="Enter Title"
          value={create.title}
          onChange={handleChange}
          type="text"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateCategory;
