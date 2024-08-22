import React, { useState } from "react";
import { useCreateCategoryMutation } from "../../../context/api/categoryApi";

const initialState = {
  title: "",
};

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
    <div>
      <form onSubmit={handleSubmit}>
        <input value={create.title} onChange={handleChange} type="text" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateCategory;
