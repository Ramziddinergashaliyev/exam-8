import React, { useState, useEffect } from "react";
import { Button, Form, Input, Upload, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useCreateProductMutation } from "../../../context/api/productApi";
import { useGetCategorysQuery } from "../../../context/api/categoryApi";
import { useNavigate } from "react-router-dom";

import "./createProduct.scss";

const CreateProduct = () => {
  const [fileList, setFileList] = useState([]);
  const [create, { data, isLoading, isSuccess }] = useCreateProductMutation();
  const { data: categories } = useGetCategorysQuery();
  const navigate = useNavigate();

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("price", values.price);
    formData.append("oldPrice", values.oldPrice);
    formData.append("desc", values.desc);
    formData.append("units", values.units);
    formData.append("categoryId", values.categoryId);
    fileList.forEach((file) => formData.append("photos", file.originFileObj));

    await create(formData).unwrap();
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/admin/manageProduct");
    }
  }, [isSuccess, navigate]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form-category">
      <h2>Create Product</h2>
      <Form
        name="basic"
        layout="vertical"
        className="form-category-value"
        labelCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input the title!",
            },
          ]}
        >
          <Input placeholder="Enter title" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="desc"
          rules={[
            {
              required: true,
              message: "Please input the description!",
            },
          ]}
        >
          <Input placeholder="Enter description" />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input the price!",
            },
          ]}
        >
          <Input placeholder="Enter price" />
        </Form.Item>

        <Form.Item
          label="oldPrice"
          name="oldPrice"
          rules={[
            {
              required: true,
              message: "Please input the oldPrice!",
            },
          ]}
        >
          <Input placeholder="Enter oldPrice" />
        </Form.Item>

        <Form.Item
          label="Units"
          name="units"
          rules={[
            {
              required: true,
              message: "Please input the units!",
            },
          ]}
        >
          <Select placeholder="Select a category" className="select">
            <Select.Option value="dona">dona</Select.Option>
            <Select.Option value="kg">kg</Select.Option>
            <Select.Option value="litr">litr</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Category"
          name="categoryId"
          rules={[
            {
              required: true,
              message: "Please select a category!",
            },
          ]}
        >
          <Select placeholder="Select a category" className="select">
            {categories?.payload?.map((category) => (
              <Select.Option key={category._id} value={category?._id}>
                {category.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture"
            multiple
            beforeUpload={() => false}
            onChange={handleFileChange}
            fileList={fileList}
            defaultFileList={fileList}
          >
            <Button type="dark" icon={<UploadOutlined />}>
              Upload
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button
            loading={isLoading}
            className="w-full"
            type="dark"
            htmlType="submit"
          >
            {isLoading ? "Loading..." : "Create"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateProduct;
