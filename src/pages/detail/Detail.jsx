import React, { useEffect } from "react";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "../../context/api/productApi";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

import "./detail.scss";
import Comment from "../../components/comment/Comment";
import { NEW_PRODUCTS } from "../../static";
import NewProducts from "../../components/new-products/NewProducts";
import Products from "../../components/products/Products";

const Detail = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);
  const { data: product } = useGetProductsQuery();
  console.log(data?.payload);
  useEffect(() => {
    window.scroll(0, 0);
  }, [id]);
  return (
    <div className="single container">
      <div className="single__top">
        <div className="single__left">
          <div className="single__left__small">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div className="single__left__large">
            <img src={data?.payload?.urls?.[0]} alt={data?.payload?.title} />
          </div>
        </div>
        <div className="single__right">
          <h3 className="single__right__title">{data?.payload?.title}</h3>
          <div className="single__right__stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="single__right__price">
            <h1 className="single__right__price">{data?.payload?.price}</h1>
            <h1 className="single__right__price single__right__old">
              {data?.payload?.oldPrice}
            </h1>
          </div>
          <p className="single__right__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            distinctio culpa dolore inventore nihil ad, eligendi voluptates
            impedit consequatur sapiente nisi molestias ea quod esse iure, eos
            reprehenderit totam. Assumenda.
          </p>
          <div className="single__right__colors">
            <p>Select Colors</p>
            <div className="single__right__color">
              <span className="single__right__color-one"></span>
              <span className="single__right__color-two"></span>
              <span className="single__right__color-three"></span>
            </div>
          </div>
          <div className="single__right__size">
            <p>Choose Size</p>
            <div className="single__right__size__btns">
              <button>Small</button>
              <button>Medium</button>
              <button>Large</button>
              <button>X-Large</button>
            </div>
          </div>
          <div className="single__right__btns">
            <button className="single__right__btns-heart">Add to Heart</button>
            <button className="single__right__btns-cart">Add to Cart</button>
          </div>
        </div>
      </div>
      <Comment />
      <div className="single__cards">
        <h2 className="single__cards__title">You might also like</h2>
        <div className="new__products">
          <Products data={product?.payload} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
