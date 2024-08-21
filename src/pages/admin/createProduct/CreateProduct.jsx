import React, { useState } from "react";
import "./createProduct.scss";

const initialState = {
  title: "",
  price: "",
  units: "",
  desc: "",
  urls: null,
};

const CreateProduct = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form">
      <h3>Create Product</h3>
      <form className="form__card" onSubmit={handleSubmit}>
        <div className="form__card-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            placeholder="Title"
            type="text"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form__card-group">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            placeholder="Price"
            type="text"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="form__card-group">
          <label htmlFor="units">Units</label>
          <input
            id="units"
            name="units"
            placeholder="Units"
            type="text"
            value={formData.units}
            onChange={handleChange}
          />
        </div>
        <div className="form__card-group">
          <label htmlFor="desc">Description</label>
          <input
            id="desc"
            name="desc"
            placeholder="Description"
            type="text"
            value={formData.desc}
            onChange={handleChange}
          />
        </div>
        <div className="form__card-group">
          <label htmlFor="urls">Image</label>
          <input id="urls" name="urls" type="file" onChange={handleChange} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
