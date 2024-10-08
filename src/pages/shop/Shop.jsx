import React, { useEffect, useState } from "react";
import "./shop.scss";
import { useGetProductsQuery } from "../../context/api/productApi";
import Products from "../../components/products/Products";
import { TbFilters } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa6";
import { Slider, Switch } from "antd";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useGetCategorysQuery } from "../../context/api/categoryApi";

const Shop = () => {
  const [category, setCategory] = useState("");
  let limit = 3;
  const [page, setPage] = React.useState(1);

  const { data } = useGetProductsQuery({
    limit,
    skip: page,
    category: category,
  });

  const { data: categories } = useGetCategorysQuery();
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  let totalCount = Math.ceil(data?.total / limit) || 0;
  let categoryItems = categories?.payload?.map((el) => (
    <li key={el._id} className="shop__left-item">
      <data
        value={el._id}
        onClick={(e) => setCategory(e.target.value)}
        className="shop__item"
      >
        {el.title}
      </data>
    </li>
  ));

  return (
    <div className="shop container">
      <div className="shop__left">
        <div className="shop__left-top">
          <h3>Filters</h3>
          <TbFilters />
        </div>
        <ul className="shop__left-list">
          <li className="shop__left-item">
            <data
              value=""
              onClick={(e) => setCategory(e.target.value)}
              className="shop__item"
            >
              All
            </data>
          </li>
          {categoryItems}
        </ul>

        <div className="shop__left-price">
          <h3>
            Price
            <FaChevronRight />
          </h3>
          <Slider range defaultValue={[20, 50]} />
        </div>
        <div className="shop__left-colors">
          <h2>
            Colors
            <FaChevronRight />
          </h2>
          <div className="shop__left-color">
            <span className="shop__left-color-item shop__left-color-blue"></span>
            <span className="shop__left-color-item shop__left-color-red"></span>
            <span className="shop__left-color-item shop__left-color-yellow"></span>
            <span className="shop__left-color-item shop__left-color-orange"></span>
            <span className="shop__left-color-item shop__left-color-green"></span>
            <span className="shop__left-color-item shop__left-color-aqua"></span>
            <span className="shop__left-color-item shop__left-color-black"></span>
            <span className="shop__left-color-item shop__left-color-grey"></span>
          </div>
        </div>
        <div className="shop__left-size">
          <h2>
            Size
            <FaChevronRight />
          </h2>
          <div className="shop__left-size-btns">
            <button>XX-Small</button>
            <button>X-Small</button>
            <button>Small</button>
            <button>Medium</button>
            <button>Large</button>
            <button>X-Large</button>
            <button>XX-Large</button>
            <button>3X-Large</button>
            <button>4X-Large</button>
          </div>
        </div>
      </div>
      <div className="shop__right">
        <h2>Casual</h2>
        <div className="shop__right-card">
          <Products data={data?.payload} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            padding: "10px 0px",
          }}
        >
          <Stack spacing={2}>
            <Pagination
              count={totalCount}
              page={page}
              onChange={handleChange}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Shop;
