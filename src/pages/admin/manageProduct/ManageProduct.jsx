import React, { useState } from "react";
import { useGetProductsQuery } from "../../../context/api/productApi";
import Products from "../../../components/products/Products";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "./manageProduct.scss";

const ManageProduct = () => {
  const [isTrue, setIsTrue] = useState(true);
  let limit = 4;
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const { data } = useGetProductsQuery({ limit, skip: page });
  let totalCount = Math.ceil(data?.total / limit);

  return (
    <>
      <div className="manage__products">
        <Products isTrue={isTrue} data={data?.payload} />
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Stack spacing={2}>
          <Pagination count={totalCount} page={page} onChange={handleChange} />
        </Stack>
      </div>
    </>
  );
};

export default ManageProduct;
